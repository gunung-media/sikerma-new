<?php

namespace App\Http\Controllers;

use App\Repositories\Master\FacultyRepository;
use App\Repositories\Master\StudyProgramRepository;
use App\Repositories\Partnership\PartnershipRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AnalyticController extends Controller
{
    public function __construct(
        protected PartnershipRepository $partnershipRepository,
        protected FacultyRepository $facultyRepository,
        protected StudyProgramRepository $studyProgramRepository,
        protected UserRepository $userRepository,
    ) {}

    public function __invoke(Request $request): Response
    {
        $data = [
            'partnershipCalendar' => $this->partnershipRepository->getYearlyPartnerships(),
            'dueDateCalendar' => $this->partnershipRepository->getYearlyDueDates(),
            'data' => $this->partnershipRepository->getAll(),
            'count' => [
                'user' => $this->userRepository->count(),
                'faculty' => $this->facultyRepository->count(),
                'studyProgram' => $this->studyProgramRepository->count(),
                'partnership' => $this->partnershipRepository->count()
            ]
        ];

        return Inertia::render('Analytic/index', $data);
    }
}
