<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\User;
use Illuminate\Console\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'personal' => User::where('role', 'personal')->count(),
            'organization' => User::where('role', 'organization')->count(),
            'activity' => Activity::count(),
            'newActivity' => Activity::latest()->take(6)->get(),
        ];
        // dd($data);
        return Inertia::render('Home', $data);
    }

    // Menampilkan seluruh activity
    public function allActivity()
    {
        $data = [
            'activity' => Activity::all(),
        ];
        dd($data);
        return Inertia::render('....', $data);
    }
}
