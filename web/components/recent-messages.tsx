import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function RecentMessages() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>PW</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Thanksgiving Break Meetings</p>
            <p className="text-sm text-muted-foreground">
              patrick@warriorb.org
            </p>
          </div>
          <div className="ml-auto font-medium">129 messages</div>
        </div>
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>JU</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Mandatory: Git Etiquette Meeting</p>
            <p className="text-sm text-muted-foreground">josh@warriorb.org</p>
          </div>
          <div className="ml-auto font-medium">15 messages</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Kirby's Done!</p>
            <p className="text-sm text-muted-foreground">
              aimee.ding@warriorlife.net
            </p>
          </div>
          <div className="ml-auto font-medium">126 messages</div>
        </div>
      </div>
    )
  }