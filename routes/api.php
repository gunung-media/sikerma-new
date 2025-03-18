<?php

use App\Http\Controllers\Api\GetFacultyController;
use App\Http\Controllers\Api\GetFieldActivityController;
use App\Http\Controllers\Api\GetInstituteController;
use App\Http\Controllers\Api\GetPartnerController;
use App\Http\Controllers\Api\GetStudyProgramController;
use Illuminate\Support\Facades\Route;

Route::name('api.')
    ->group(function () {
        Route::get('faculties', GetFacultyController::class)->name('faculties');
        Route::get('studyPrograms', GetStudyProgramController::class)->name('studyPrograms');
        Route::get('institutes', GetInstituteController::class)->name('institutes');
        Route::get('activities', GetFieldActivityController::class)->name('activities');
        Route::get('partners', GetPartnerController::class)->name('partners');
    });
