<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $activityModel = new Activity();

        $data = [
            'activity' => $activityModel->activityJoin()
        ];

        return Inertia::render('Tables/Activity/ActivityTable', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Form/AddActivity');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'banner' => 'required',
            'location' => 'required',
            'category' => 'required',
            'schedule' => 'required',
            'deadline' => 'required',
            'description' => 'required',
            'max' => 'required',
            'jobdesk' => 'required',
            'requirement' => 'required',
            'domicile' => 'required',
            'addtional_information' => 'required',
        ]);

        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('resources/assets/images', $fileName); // Simpan file di folder resources/assets/images

            // Pindahkan file ke folder public
            $publicPath = public_path('images/' . $fileName);

            Activity::create($validated);

            // Redirect atau beri respons sukses
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $activityModel = new Activity();

        $data = [
            'activity' => $activityModel->activityJoin($id)
        ];



        return Inertia::render('....', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $activityModel = new Activity();

        $data = [
            'activity' => $activityModel->activityJoin($id)
        ];

        return Inertia::render('....', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $activity = Activity::findOrFail($id);

        // Hapus Activity
        $activity->delete();

        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('activity');
    }
}
