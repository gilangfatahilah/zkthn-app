<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Nama Admin',
            'email' => 'admin@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'administrator',
        ]);

        User::create([
            'name' => 'Nama Organisasi',
            'email' => 'organisasi@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'organization',
        ]);

        User::create([
            'name' => 'Nama Personal',
            'email' => 'personal@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'personal',
        ]);
    }
}
