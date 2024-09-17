import { useState } from 'react';
import { Button } from '@/Components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/Components/ui/dropdown-menu';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { AlertModal } from '@/Components/AlertModal';
import { User } from '@/types';
import UserDetail from '@/Components/UserDetail';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { Badge } from '@/Components/ui/badge';

interface CellActionProps {
  data: User;
  fromActivity?: boolean;
  activityLabel?: string;
}

export const CellAction: React.FC<CellActionProps> = ({ data, fromActivity = false, activityLabel = 'Perlu Verifikasi' }: CellActionProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const badgeSeverity = activityLabel === 'Perlu Verifikasi' ? 'warning' : activityLabel === 'Diterima' ? 'default' : 'destructive'
  const { delete: deleteUser } = useForm();

  const onConfirm = async () => {
    setLoading(true);

    try {
      deleteUser(route('user.destroy', { id: data.id }), {
        onSuccess: () => {
          setOpen(false); // Close the modal after successful deletion
          return toast.success('Berhasil menghapus pengguna');
        },
        onError: () => {
          toast.error('Error', {
            description:
              'Terjadi kesalahan, silahkan coba lagi.',
          });
        },
        onFinish: () => setLoading(false),
      });
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />

      <UserDetail user={data} isOpen={openDetail} onClose={() => setOpenDetail(false)} />

      {
        fromActivity ? (
          <Badge className='cursor-pointer' variant={badgeSeverity} onClick={() => setOpenDetail(true)}>
            {activityLabel}
          </Badge>
        ) :
          (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>

                <DropdownMenuItem onClick={() => setOpenDetail(true)}>
                  <Edit className="mr-2 h-4 w-4" /> Detail
                </DropdownMenuItem>

                <DropdownMenuItem className='text-red-600' onClick={() => setOpen(true)}>
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
      }
    </>
  );
};
