import { Button } from "@/Components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { User } from "@/types"

interface UserDetailProps {
  user: User
  isOpen: boolean
  onClose: () => void
}

export default function UserDetail({ user, isOpen,onClose }: UserDetailProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="bg-muted rounded-md p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user.image} alt="user image" />
                <AvatarFallback>{user.name.charAt(0).toLocaleUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="text-lg font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">{user.email}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Email</div>
              <div>{user.email}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Nomor Telepon</div>
              <div>{user.phone ?? '-'}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Alamat</div>
              <div>{user.address ?? '-'}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Tipe Akun</div>
              <div>{user.role}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
