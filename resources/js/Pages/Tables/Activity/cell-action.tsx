import { useState } from 'react';
import { Button } from '@/Components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/Components/ui/dropdown-menu';
import { Edit, Eye, MoreHorizontal, Trash } from 'lucide-react';
import { AlertModal } from '@/Components/AlertModal';
import { Activity } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

interface CellActionProps {
  data: Activity;
}

export const CellAction: React.FC<CellActionProps> = ({ data }: CellActionProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { delete: deleteActivity } = useForm();

  const onConfirm = async () => {
    setLoading(true);

    try {
      deleteActivity(route('activity.destroy', { id: data.id }), {
        onSuccess: () => {
          setOpen(false); // Close the modal after successful deletion
          return toast.success('Berhasil menghapus aktivitas.');
        },
        onError: () => {
          toast.error('Error!', {
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

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <Link href={`/dashboard/activity${data.id}`}>
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" /> detail
            </DropdownMenuItem>
          </Link>

          <Link href={`/dashboard/activity/${data.id}/edit`}>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className='text-destructive' onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
