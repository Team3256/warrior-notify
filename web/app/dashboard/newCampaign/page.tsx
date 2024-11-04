import { Separator } from "@/components/ui/separator"
import { TitleBodyForm } from "@/app/dashboard/newCampaign/title-body-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Title and Body</h3>
        <p className="text-sm text-muted-foreground">
          This is publicly facing information (aka don't put stupid stuff here).
        </p>
      </div>
      <Separator />
      <TitleBodyForm />
    </div>
  )
}