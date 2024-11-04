import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "next/navigation"

interface OptInFormProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function OptInForm() {
  const params = useSearchParams();

  const subteam = params.get("subteam");
  const isNewMember = params.has("isNewMember");

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Opt-In to Recieve SMS notifications</CardTitle>
        <CardDescription>
          Enter your phone number below sign up!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Phone Number</Label>
            <Input
              id="phoneNum"
              placeholder="+12727272727"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Opt-In
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have a phone number?{" "}
          <Link href="#" className="underline">
            Use Discord
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
