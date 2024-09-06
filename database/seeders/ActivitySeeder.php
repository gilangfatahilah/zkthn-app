<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Menggunakan query builder untuk menyisipkan beberapa entri
        Activity::insert([
            [
                'title' => 'Workshop Laravel',
                'banner' => 'workshop-laravel.jpg',
                'publised_by' => 1,
                'location' => 'Jakarta',
                'category' => 'event, kesehatan',
                'schedule' => '2024-10-01 09:00:00',
                'deadline' => '2024-09-30 23:59:59',
                'description' => 'Workshop mendalam tentang Laravel.',
                'max' => 50,
                'jobdesk' => 'Memahami Laravel secara mendalam',
                'requirement' => 'Basic PHP',
                'domicile' => 'Jakarta',
                'addtional_information' => 'Diharapkan membawa laptop sendiri.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Seminar Teknologi AI',
                'banner' => 'seminar-ai.jpg',
                'publised_by' => 2,
                'location' => 'Bandung',
                'category' => 'event, pendidikan, pengembangan masyarakat',
                'schedule' => '2024-11-15 10:00:00',
                'deadline' => '2024-11-14 23:59:59',
                'description' => 'Seminar mengenai perkembangan terbaru dalam AI.',
                'max' => 100,
                'jobdesk' => 'Diskusi panel dengan para ahli AI',
                'requirement' => 'Minat di bidang teknologi',
                'domicile' => 'Bandung',
                'addtional_information' => 'Tidak ada persyaratan khusus.',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
