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

        $activityModel = new Activity();
        $user = Auth::user();

        // dd($user->name);

        // jika role nya organisasi, maka tampilkan aktifitas yang sesuai dengan organisasi tersebut 
        if ($user->role == 'organization') {
            $data = [
                'activity' => $activityModel->activityPublised($user->id),
            ];
        } else {
            $data = [
                'activity' => $activityModel->activityJoin()
            ];
        }

        return Inertia::render('Dashboard', $data);
    }
}
