<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

// public
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/all-activity', [HomeController::class, 'allActivity'])->name('allActivity');

// allrole
Route::middleware('auth', 'role:administrator,organization,personal', 'verified')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// admin dan organisasi 
Route::middleware('auth', 'role:administrator,organization', 'verified')->group(function () {
    Route::get('dashboard/user', [UserController::class, 'index'])->name('user');
    Route::delete('dashboard/user/{id}', [UserController::class, 'destroy'])->name('user.destroy');


    Route::get('dashboard/activity', [ActivityController::class, 'index'])->name('activity');
    Route::get('dashboard/activity/create', [ActivityController::class, 'create'])->name('activity.create');
    Route::post('dashboard/activity', [ActivityController::class, 'store'])->name('activity.store');
    Route::get('dashboard/activity{id}', [ActivityController::class, 'show'])->name('activity.show');
    Route::get('dashboard/activity/{id}/edit', [ActivityController::class, 'edit'])->name('activity.edit');
    Route::patch('dashboard/activity/{id}', [ActivityController::class, 'update'])->name('activity.update');
    Route::delete('dashboard/activity/{id}', [ActivityController::class, 'destroy'])->name('activity.destroy');
});




require __DIR__ . '/auth.php';
