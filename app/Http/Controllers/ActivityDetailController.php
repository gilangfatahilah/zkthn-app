<?php

namespace App\Http\Controllers;

use App\Models\ActivityDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ActivityDetailController extends Controller
{
    public function apply(Request $request)
    {
        $request->validate([
            'id' => 'integer',
        ]);

        // dd($request->id);
        $user = Auth::user();


        $detail = new ActivityDetail();

        $detail->activity_id = $request->id;
        $detail->user_id = $user->id;
        $detail->status = 1;

        $detail->save();

        return redirect()->back();
    }
}
