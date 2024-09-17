<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityDetail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use Smalot\PdfParser\Parser;
use Illuminate\Support\Facades\Http;
use Gemini\Laravel\Facades\Gemini;

class ActivityDetailController extends Controller
{
    public function apply(Request $request)
    {
        $request->validate([
            'id' => 'integer',
        ]);

        // dd($request->id);
        $user = Auth::user();

        // mengambil data 
        $userCV = User::where('id', $user->id)->select('cv')->first();
        $persyaratan = Activity::where('id', $request->id)->select('requirement')->first();

        $destinationPath = public_path('file');
        $filePath = $destinationPath . DIRECTORY_SEPARATOR . $userCV['cv'];

        $parser = new Parser();
        $pdf = $parser->parseFile($filePath);
        $text = $pdf->getText();  // Ekstrak teks dari file PDF

        if (empty($text)) {
            return back()->with('error', 'Teks tidak ditemukan di dalam file PDF.');
        }

        try {
            // Mendapatkan API key dari konfigurasi
            $prompt = "Berdasarkan CV berikut: " . $text . "\n\n" .
                "Dan persyaratan kegiatan berikut: " . $persyaratan['requirement'] . "\n\n" .
                "Apakah kandidat tersebut sesuai dengan persyaratan untuk mengikuti kegiatan ini? Mohon berikan penilaian apakah kandidat layak diterima atau tidak dengan kata direkomendasiakan tau tidak direkomendasikan, dan jelaskan alasannya.";
            $result = Gemini::geminiPro()->generateContent($prompt);
            // $user->cv_review = $result;
            // dd($result->text());
            // Menampilkan hasil untuk debugging
        } catch (\Exception $e) {
            dd("Error: " . $e->getMessage());
        }


        $detail = new ActivityDetail();

        $detail->activity_id = $request->id;
        $detail->user_id = $user->id;
        $detail->status = 1;
        $detail->note = $result->text();

        $detail->save();

        return redirect()->back();
    }
    public function handleapplier(Request $request)
    {
        $detail = ActivityDetail::where('id', $request->id)->first();


        if ($request->status == 2) {
            $detail->status = $request->status; // Ambil status dari request
        }

        if ($request->status == 3) {
            $detail->status = $request->status; // Ambil status dari request
        }
        // Ubah status sesuai dengan data dari request

        // Simpan perubahan
        $detail->save();

        return redirect()->back();
    }
}
