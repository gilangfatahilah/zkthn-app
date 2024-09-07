<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityDetail;
use App\Models\User;
use Illuminate\Console\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;



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
            'newActivity' => DB::table('activity')->join('users', 'users.id', '=', 'activity.publised_by')
                ->select('activity.*', 'users.name as publised_name')
                ->orderBy('activity.created_at', 'desc')
                ->limit(6)
                ->get()
        ];
        // dd($data);
        return Inertia::render('Home', $data);
    }

    // Menampilkan seluruh activity
    public function allActivity()
    {
        $activityModel = new Activity();

        $data = [
            'activity' => $activityModel->activityJoin()
        ];
        $data = [
            'activity' => $activityModel->activityJoin()
        ];
        // dd($data);
        return Inertia::render('Activity', $data);
    }

    public function detailActivity(string $id)
    {
        $activityModel = new Activity();
        $user = Auth::user();

        if ($user == null) {
            $alreadyRegistered = false;
        } else {
            $alreadyRegistered = ActivityDetail::where('user_id', $user->id)
                ->where('activity_id', $id)
                ->exists();
        }

        $data = [
            'activity' => $activityModel->activityJoin($id),
            'joined' => $alreadyRegistered
        ];

        dd($data);

        return Inertia::render('ActivityDetail', $data);
    }
}
