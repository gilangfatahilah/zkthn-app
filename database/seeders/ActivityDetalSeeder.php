<?php

namespace Database\Seeders;

use App\Models\ActivityDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ActivityDetalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ActivityDetail::create([
            'activity_id' => 1,
            'user_id' => 3,
            'status' => 1,
        ]);
    }
}
