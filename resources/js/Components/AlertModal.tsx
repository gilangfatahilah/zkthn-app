import { useEffect, useState } from 'react';
import { Button } from '@/Components/ui/button';
import { Modal } from './ui/modal';
import { Icons } from './icons';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => (void | Promise<void>);
  loading: boolean;
  description?: string;
  title?: string;
  variant?: 'danger' | 'primary';
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  description,
  title = 'Apakah anda yakin?',
  variant = 'danger',
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title={title}
      description={description ?? "This action cannot be undone."}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        {
          loading ? (
            <Button disabled={loading} variant={variant === 'danger' ? 'destructive' : 'default'} onClick={onConfirm}>
              <Icons.spinner className="mr-2 w-4 h-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button disabled={loading} variant={variant === 'danger' ? 'destructive' : 'default'} onClick={onConfirm}>
              Continue
            </Button>
          )
        }
      </div>
    </Modal>
  );
};
