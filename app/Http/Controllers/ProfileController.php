<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;





class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {

        // dd($request->user());
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        // Ambil pengguna yang sedang login
        $user = $request->user();

        // Isi data pengguna dengan data yang sudah tervalidasi
        $user->fill($request->validated());

        // Cek jika ada file gambar profil
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $destinationPath = public_path('images');

            $file->move($destinationPath, $fileName);

            $user->image = $fileName; // Simpan nama file di database
        }

        // Cek jika ada file CV
        if ($request->hasFile('cv')) {
            $file = $request->file('cv');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $destinationPath = public_path('file');

            // Pastikan folder tujuan ada
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true); // Membuat folder jika tidak ada
            }

            // Pindahkan file CV ke direktori 'files'
            $file->move($destinationPath, $fileName);

            $user->cv = $fileName;


            // Path lengkap ke file yang sudah dipindahkan
            $filePath = $destinationPath . DIRECTORY_SEPARATOR . $fileName;
        }

        // Simpan data pengguna
        $user->save();

        // Redirect kembali ke halaman profile edit dengan pesan sukses
        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
