"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const profileFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  body: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  body: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

const titleQuotes = ["New Systems Subteam!", "Kirby Intake is Still Dead :(", "Mandatory: Git Etiquette Meeting", "New Attendance System", "Bounty: MATE ROV Nvida Jetson", "Bounty: MATE ROV's ROVs (all of them)", "Mandatory: Why are we worse than MATE: A 9-slide presentaion"];

const bodyQuotes = ["Valley and WB have finally realized it was necessary for us to have a systems subteamteam! The subteam will be availible starting in the 2025-26 season.", 
                    "We keep thinking the intake works, but it doesn't :(",
                    "After certain software members (cough couch ryan) sent git commits with certain choice words (sam get ready for some immaaculate *CENSORED*... Like *CENSORED* so i can see that *CENSORED* and *CENSORED* deep into the *CENSORED* and go *CENSORED*), AMSE and WB have deemed it neccisary to have a git Etiquette discussion at the next meeting.",
                    "The systems psuedo-subteam is proud to announce that our new attendance system is now opperational, and we'll be issuing badges at the next meeting. Read more on our site.",
                    "NEW BOUNTY! Whoever can steal MATE's Nvidia jetsons and bring them to Patrick, by the end of the next meeting, will have their volunteer requirments waved.",
                    "NEW BOUNTY! Whoever can steal MATE's ROVs (all of them) and bring them to Patrick, by the end of the next meeting, will have their volunteer requirments waved.",
                  "Due to the recent misdeminors, of the software team, it seems that we have fallen further behind MATE in maners and morality (Not like we were every ahead of them), but if we want to return to even be close to them, we have to be better. Now, you guys will stand here for 2 hours, think about what you've done, while I get myself some Chipotle."]

export function TitleBodyForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  var rand = Math.floor( Math.random() * titleQuotes.length )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder={titleQuotes[rand]} {...field} />
              </FormControl>
              <FormDescription>
                This is the title of your campaign. It's used to identify your campaign and provide a general overview of the message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={bodyQuotes[rand]}
                  className="resize"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}