<?php

use App\Http\Controllers\Api\GetFacultyController;
use App\Http\Controllers\Api\GetFieldActivityController;
use App\Http\Controllers\Api\GetInstituteController;
use App\Http\Controllers\Api\GetPartnerController;
use App\Http\Controllers\Api\GetPartnerCriteriaController;
use App\Http\Controllers\Api\GetPartnershipController;
use App\Http\Controllers\Api\GetStudyProgramController;
use App\Http\Controllers\Api\GetUptController;
use Illuminate\Support\Facades\Route;

Route::name('api.')
    ->group(function () {
        Route::get('faculties', GetFacultyController::class)->name('faculties');
        Route::get('studyPrograms', GetStudyProgramController::class)->name('studyPrograms');
        Route::get('institutes', GetInstituteController::class)->name('institutes');
        Route::get('upts', GetUptController::class)->name('upts');
        Route::get('activities', GetFieldActivityController::class)->name('activities');
        Route::get('partners', GetPartnerController::class)->name('partners');
        Route::get('partnerships', GetPartnershipController::class)->name('partnerships');
        Route::get('partnerCriterias', GetPartnerCriteriaController::class)->name('partnerCriterias');
    });
