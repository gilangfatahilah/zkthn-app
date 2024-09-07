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
        } else if ($user->role == 'administrator') {
            $data = [
                'activity' => $activityModel->activityJoin()
            ];
        } else {
            $data = [
                'activity' => Activity::join('users', 'users.id', '=', 'activity.publised_by')
                    ->join('activity_detail', 'activity_detail.activity_id', '=', 'activity.id')
                    ->select('activity.*', 'users.name as publised_name', 'activity_detail.status as status_daftar')
                    ->where('activity_detail.user_id', '=', $user->id) // Sesuaikan dengan user ID yang ingin dicari
                    ->get()
            ];
        }
        dd($data);

        return Inertia::render('Dashboard', $data);
    }
}
