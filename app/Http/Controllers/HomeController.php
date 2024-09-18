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
use Smalot\PdfParser\Parser;
use Gemini\Laravel\Facades\Gemini;



use Inertia\Inertia;

use function Laravel\Prompts\text;

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

        return Inertia::render('ActivityDetail', $data);
    }
    public function recomActivity()
    {
        // Mengambil category
        $allCategories = Activity::select('category')->get()->map(function ($activity) {
            return json_decode($activity->category, true);
        })->toArray();

        $mergedCategories = array_merge(...$allCategories);

        $uniqueCategories = array_unique($mergedCategories);

        // Tambahkan kutip di setiap elemen
        $quotedCategories = array_map(function ($item) {
            return '"' . $item . '"';
        }, $uniqueCategories);

        // Format hasil sebagai string dengan format ["1", "2", "3", ...]
        $category = '[' . implode(', ', $quotedCategories) . ']';

        // extrak cv
        $user = Auth::user();

        // mengambil data 
        $userCV = User::where('id', $user->id)->select('cv')->first();

        $destinationPath = public_path('file');
        $filePath = $destinationPath . DIRECTORY_SEPARATOR . $userCV['cv'];

        $parser = new Parser();
        $pdf = $parser->parseFile($filePath);
        $text = $pdf->getText();  // Ekstrak teks dari file PDF

        try {
            // Mendapatkan API key dari konfigurasi
            $prompt = "Berdasarkan CV berikut: " . $text . "\n\n" .
                "Dan array kategori ini  :" . $category . "\n\n" .
                "Berikan sebuah objek dengan format 
                {category: (berisi list array kategori 
                yang relevan dengan cv, jika tidak relevan 
                berikan array kosong), reason: (berisi rangkuman alasan mengapa kategori tersebut direkomendasikan,
                gunakan kata 'kamu' sebagai pengganti dari nama pengguna }";
            $result = Gemini::geminiPro()->generateContent($prompt);
            // $user->cv_review = $result;
            // Menampilkan hasil untuk debugging
        } catch (\Exception $e) {
            dd("Error: " . $e->getMessage());
        }

        return response()->json($result->text());
    }
}
