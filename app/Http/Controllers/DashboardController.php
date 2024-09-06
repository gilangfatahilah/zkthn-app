<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        // dd($user->name);

        // jika role nya organisasi, maka tampilkan aktifitas yang sesuai dengan organisasi tersebut 
        if ($user->role == 'organization') {
            $data = [
                'activity' => Activity::where('publised_by', $user->id)->get(),
            ];
        } else {
            $data = [
                'activity' => Activity::all(),
            ];
        }

        return Inertia::render('Dashboard', $data);
    }
}
