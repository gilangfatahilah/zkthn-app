import { useRef, useState, FormEventHandler } from 'react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/Components/ui/dialog';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from '@/Components/ui/card';

export default function ChangeAccount({ className = '' }: { className?: string }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    post,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const confirm = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('changeaccount'), {
      data,
      onSuccess: () => {
        closeModal();
        toast.success('Berhasil membuat permintaan')
      },
      onError: () => {
        closeModal();
        toast.error('Gagal membuat permintaan')
      }
    })
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };

  return (
    <section className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tipe Akun</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing el.
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex">
          <Button onClick={confirm}>Ganti Tipe Akun</Button>
        </CardFooter>
      </Card>

      <Dialog open={confirmingUserDeletion} onOpenChange={closeModal}>
        <DialogContent>
          <form onSubmit={deleteUser}>
            <DialogHeader>
              <DialogTitle>Apakah anda yakin?</DialogTitle>
              <DialogDescription>
                Once your account is deleted, all of its resources and data will be permanently deleted. Please
                enter your password to confirm you would like to permanently delete your account.
              </DialogDescription>
            </DialogHeader>

            <CardContent className="mt-6">
              <Label className='mb-4' htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder="Password"
                ref={passwordInput}
              />
              {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
            </CardContent>

            <DialogFooter>
              <Button type="button" variant="secondary" onClick={closeModal}>Batal</Button>
              <Button type="submit" variant="destructive" disabled={processing}>
                Konfirmasi
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
