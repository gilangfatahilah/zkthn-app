import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/Components/ui/dropdown-menu';
import { LogOut, Settings } from 'lucide-react';
import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { AlertModal } from '../AlertModal';

interface UserNavProps {
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    image?: string;
    role: string;
  }
}

export function UserNav({ user }: UserNavProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const { post } = useForm();

  const handleSignOutClick = () => {
    setOpenDialog(true);
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);

      // Perform Inertia.js sign out action
      post(route('logout'), {
        onSuccess: () => {
          toast.success('Sign out success.');
        },
        onError: () => {
          toast.error('Something went wrong !', {
            description:
              'There was a problem while processing your request, please try again.',
          });
        },
        onFinish: () => setLoading(false),
      });
    } catch (error) {
      toast.error('An unexpected error occurred');
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <AlertModal
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleSignOut}
        loading={loading}
        description="Are you sure you want to Logout ?"
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user.image ?? ''}
                alt={user.name ?? ''}
              />
              <AvatarFallback>{user.name?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Account
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/profile">
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>
                  <Settings className="w-4 h-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuItem onClick={handleSignOutClick}>
            Logout
            <DropdownMenuShortcut>
              <LogOut className="w-4 h-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
