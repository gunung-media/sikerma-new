<?php

use App\Http\Controllers\Api\GetFacultyController;
use App\Http\Controllers\Api\GetStudyProgramController;
use Illuminate\Support\Facades\Route;

Route::name('api.')
    ->group(function () {
        Route::get('faculties', GetFacultyController::class)->name('faculties');
        Route::get('studyPrograms', GetStudyProgramController::class)->name('studyPrograms');
    });
