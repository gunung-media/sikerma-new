<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Master\StudyProgramController;
use App\Http\Controllers\Master\FacultyController;
use App\Http\Controllers\Master\InstituteController;
use App\Http\Controllers\Partnership\PartnershipController;
use App\Http\Controllers\UserController;

Route::name('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('login', [AuthenticationController::class, 'showLoginForm'])->name('login');
        Route::post('login', [AuthenticationController::class, 'loginPost'])->name('login.post');
    });
    Route::get('logout', [AuthenticationController::class, 'logout'])->name('logout')->middleware('auth');
    Route::post('changePassword', [AuthenticationController::class, 'changePassword'])->name('changePassword')->middleware('auth');
});

Route::middleware('auth')->group(function () {
    Route::get('/', DashboardController::class)->name('dashboard');

    Route::middleware('super-admin')
        ->name('master.')
        ->prefix('master')
        ->group(function () {
            Route::resource('users', UserController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('faculties', FacultyController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('study-programs', StudyProgramController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('institutes', InstituteController::class)->only(['index', 'store', 'update', 'destroy']);
        });

    Route::resource('partnerships', PartnershipController::class);
});
