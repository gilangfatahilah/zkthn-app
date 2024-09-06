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
            'gender' => 'Pria',
            'dob' => '1990-01-01',

        ]);

        User::create([
            'name' => 'Nama Organisasi',
            'email' => 'organisasi@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'organization',
            'gender' => 'Pria',
            'dob' => '2024-09-03T17:00:00.000Z',


        ]);

        User::create([
            'name' => 'Nama Personal',
            'email' => 'personal@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'personal',
            'gender' => 'Pria',
            'dob' => '1990-01-01',


        ]);
    }
}
