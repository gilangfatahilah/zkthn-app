<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityDetail;
use Illuminate\Support\Facades\Auth;
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
        $user = Auth::user();
        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $fileName = time() . '_' . $file->getClientOriginalName();

            // Tentukan path tujuan di folder public/images
            $destinationPath = public_path('images');

            // Buat folder jika belum ada
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }

            // Pindahkan file dari direktori sementara ke direktori tujuan
            $file->move($destinationPath, $fileName);

            // Simpan informasi file ke database
            $coba = json_encode($validated['category']);
            Activity::create([
                'title' => $validated['title'],
                'banner' => $fileName, // Nama file disimpan di database
                'location' => $validated['location'],
                'category' => $coba,
                'schedule' => $validated['schedule'],
                'deadline' => $validated['deadline'],
                'description' => $validated['description'],
                'max' => $validated['max'],
                'jobdesk' => $validated['jobdesk'],
                'requirement' => $validated['requirement'],
                'domicile' => $validated['domicile'],
                'addtional_information' => $validated['addtional_information'],
                'publised_by' => $user->id,
            ]);


            // Redirect atau beri respons sukses
            return redirect()->back()->with('success', 'File berhasil diupload dan disimpan.');
        } else {
            return redirect()->back()->with('error', 'Tidak ada file yang diupload.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $activityModel = new Activity();
        $activityDetailModel = new ActivityDetail();

        $data = [
            'activity' => $activityModel->activityJoin($id),
            'registrants' => $activityDetailModel->getRegistrants($id),
        ];

        dd($data);

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
