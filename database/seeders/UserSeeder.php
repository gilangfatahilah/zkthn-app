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
            'name' => 'Baznas Indonesia',
            'image' => 'baznas.png',
            'email' => 'baznas@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'administrator',
            'gender' => 'Lainnya',
            'dob' => '2001-01-17',
            'address' => 'Jl. Matraman Raya No.134, Kb. Manggis, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150',
            'phone' => '02122897983',

        ]);

        User::create([
            'name' => 'Metrodata Electronics',
            'image' => 'metrodata.png',
            'email' => 'metrodata@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'organization',
            'gender' => 'Lainnya',
            'dob' => '1990-01-01',
            'address' => 'APL Tower 37th Floor Suite 3 Jl. Letjen S. Parman Kav. 28, RT.13/RW.7, Jelambar Baru, Grogol petamburan, RT.10, RT.12/RW.6, Tj. Duren Sel., Grogol petamburan, Kota Jakarta Barat, DKI Jakarta',
            'phone' => '082129345800',


        ]);

        User::create([
            'name' => 'Mark Zuckerberg',
            'image' => 'personal.jpeg',
            'email' => 'personal@mailnesia.com',
            'password' => Hash::make('password123'),
            'role' => 'personal',
            'gender' => 'Pria',
            'dob' => '2002-02-12',
            'address' => 'Sektor 5 Bekasi Utara, Kota Bekasi',
            'phone' => '0895330944736',
        ]);
    }
}
