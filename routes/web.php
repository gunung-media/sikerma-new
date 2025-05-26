<?php

use App\Http\Controllers\AnalyticController;
use App\Http\Controllers\Master\DocumentController;
use App\Http\Controllers\Master\FieldActivityController;
use App\Http\Controllers\Master\PartnerCriteriaController;
use App\Http\Controllers\Master\UptController;
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
    Route::get('/analytic', AnalyticController::class)->name('analytic');

    Route::middleware('super-admin')
        ->name('master.')
        ->prefix('master')
        ->group(function () {
            Route::resource('users', UserController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('faculties', FacultyController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('study-programs', StudyProgramController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('institutes', InstituteController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('upts', UptController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('field-activities', FieldActivityController::class)->only(['index', 'store', 'update', 'destroy']);
            Route::resource('partner-criterias', PartnerCriteriaController::class)->only(['index', 'store', 'update', 'destroy']);
        });

    Route::name('master.')
        ->prefix('master')
        ->group(function () {
            Route::resource('documents', DocumentController::class)->only(['index', 'store', 'update', 'destroy']);
        });

    Route::resource('partnerships', PartnershipController::class);
    Route::get('partnerships_export', [PartnershipController::class, 'export'])->name('partnerships.export');
    Route::get('partnerships_print/{id}', [PartnershipController::class, 'print'])->name('partnerships.print');
    Route::post('partnerships_update/{id}', [PartnershipController::class, 'updatePartnerCriteria'])->name('partnerships.updatePartnerCriteria');
    Route::get('partnerships_weight', [PartnershipController::class, 'weight'])->name('partnerships.weight');
});
