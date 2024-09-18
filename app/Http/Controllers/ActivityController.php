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
            'title' => 'required|string|max:255',
            'banner' => 'required|file|mimes:jpeg,png,jpg,pdf|max:2048', // file boleh kosong (nullable)
            'location' => 'required|string|max:255',
            'category' => 'required|array',
            'schedule' => 'required|date',
            'deadline' => 'required|date',
            'description' => 'required|string',
            'max' => 'required|integer',
            'jobdesk' => 'required|string',
            'requirement' => 'required|string',
            'domicile' => 'required|string|max:255',
            'addtional_information' => 'required|string',
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
        $activityDetailModel = new ActivityDetail();

        $data = [
            'activity' => $activityModel->activityJoin($id),
            'registrants' => $activityDetailModel->getRegistrants($id),
        ];

        return Inertia::render('Tables/Activity/ActivityDetail', $data);
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

        return Inertia::render('Form/AddActivity', $data);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, string $id)
    {
        // Validasi input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'banner' => 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048', // file boleh kosong (nullable)
            'location' => 'required|string|max:255',
            'category' => 'required|array',
            'schedule' => 'required|date',
            'deadline' => 'required|date',
            'description' => 'required|string',
            'max' => 'required|integer',
            'jobdesk' => 'required|string',
            'requirement' => 'required|string',
            'domicile' => 'required|string|max:255',
            'addtional_information' => 'required|string',
        ]);

        // Cari data activity berdasarkan ID
        $activity = Activity::findOrFail($id);

        // Jika ada file baru yang diunggah
        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $fileName = time() . '_' . $file->getClientOriginalName();

            // Tentukan path tujuan di folder public/images
            $destinationPath = public_path('images');



            // Pindahkan file baru ke folder public/images
            $file->move($destinationPath, $fileName);

            // Hapus file lama jika ada
            if ($activity->banner && file_exists(public_path('images/' . $activity->banner))) {
                unlink(public_path('images/' . $activity->banner));
            }

            // Update nama file baru ke database
            $activity->banner = $fileName;
        }

        // Simpan data lain ke database
        $activity->title = $validated['title'];
        $activity->location = $validated['location'];
        $activity->category = json_encode($validated['category']); // Ubah menjadi JSON
        $activity->schedule = $validated['schedule'];
        $activity->deadline = $validated['deadline'];
        $activity->description = $validated['description'];
        $activity->max = $validated['max'];
        $activity->jobdesk = $validated['jobdesk'];
        $activity->requirement = $validated['requirement'];
        $activity->domicile = $validated['domicile'];
        $activity->addtional_information = $validated['addtional_information'];
        $activity->publised_by = $request->user()->id; // User yang memperbarui

        // Simpan perubahan ke database
        $activity->save();

        // Redirect atau beri respons sukses
        return redirect()->back()->with('success', 'Data dan file berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // dd($id);
        $activity = Activity::findOrFail($id);

        // Hapus Activity
        $activity->delete();

        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('activity');
    }
}
