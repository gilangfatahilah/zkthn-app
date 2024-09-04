import { FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>

        <Head title='Register' />

        <div className="w-full h-screen lg:grid lg:grid-cols-2 relative">
            <div className="absolute top-0 right-0 mr-4 p-4">
                <Link href="/" className="block" aria-label="logo">
                    <svg className="w-8 h-8 fill-current text-primary" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                    </svg>
                </Link>
            </div>

            <div className="hidden bg-muted lg:block">
                <img
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>

            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <form className='space-y-4' onSubmit={submit}>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Name</Label>
                                <Input
                                    id="name"
                                    type="name"
                                    name='name'
                                    value={data.name}
                                    autoComplete="username"
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name='email'
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" name="password" value={data.password} autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)} required />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input id="password_confirmation" type="password" name="password" value={data.password_confirmation} autoComplete="confirm-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)} required />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <Button type="submit" className="w-full" disabled={processing}>
                                Continue
                            </Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full">
                                Continue with Google
                            </Button>
                        </form>
                    </div>
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href={route('login')} className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
