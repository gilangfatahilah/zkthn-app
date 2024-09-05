<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/all-activity', [HomeController::class, 'allActivity'])->name('allActivity');

// Route::get('/dashboard', function () {

// })->middleware(['auth', 'role:administrator,personal,organization', 'verified'])->name('dashboard');

Route::middleware('auth', 'role:administrator,organization,personal', 'verified')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware('auth', 'role:administrator,organization', 'verified')->group(function () {
    Route::get('/user', [UserController::class, 'index'])->name('user');
    Route::delete('/user{id}', [UserController::class, 'destroy'])->name('user.destroy');


    Route::get('/activity', [ActivityController::class, 'index'])->name('activity');
    Route::get('/activity{id}', [ActivityController::class, 'show'])->name('activity.show');
});

Route::middleware('auth', 'role:administrator,organization,personal')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
