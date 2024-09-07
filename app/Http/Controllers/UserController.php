<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;




class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'users' => User::all()
        ];

        // Meneruskan data user ke view
        return Inertia::render('Tables/User/UserTable', $data);
        // return view('users.index', ['users' => $users]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);

        // Hapus user
        $user->delete();

        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('user');
    }
    public function changeaccount(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        // $user = $request->id;
        $user = User::findOrFail($user->id);

        $user->status = 1;

        $user->save();

        return redirect()->back();
    }
    public function handleaccount(Request $request)
    {

        // dd($request->id);
        // $user = $request->id;
        $user = User::findOrFail($request->id);

        if ($request->status == 2) {
            $user->status = $request->status; // Ambil status dari request
            $user->role = 'organization';
        }

        if ($request->status == 3) {
            $user->status = $request->status; // Ambil status dari request
        }
        // Ubah status sesuai dengan data dari request

        // Simpan perubahan
        $user->save();

        return redirect()->back();
    }
}
