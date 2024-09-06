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
use Carbon\Carbon;
use Exception;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
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

        // Cek apakah ada 'dob' dalam request dan coba konversi
        if ($request->has('dob')) {
            try {
                // Ubah format ISO 8601 atau input lain ke 'Y-m-d' (format DATE di MySQL)
                $dob = Carbon::parse($request->input('dob'))->format('Y-m-d H:i:s');
                // $request->merge(['dob' => $dob]); // Ganti nilai 'dob' di request dengan yang sudah dikonversi
            } catch (Exception $e) {
                // Jika parsing gagal, kembalikan dengan pesan error
                return Redirect::route('profile.edit')->withErrors(['dob' => 'Invalid date format']);
            }
        }

        // Isi data user dengan data yang sudah divalidasi
        $request->user()->fill($request->validated());

        // Jika email berubah, reset verifikasi email
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        // Simpan data user
        $request->user()->save();

        // Redirect kembali ke halaman profile edit dengan pesan sukses
        return Redirect::route('profile.edit')->with('success', 'Profile updated successfully.');
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
