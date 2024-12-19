<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Master\StudyProgramRepository;
use Illuminate\Http\Request;

class GetStudyProgramController extends Controller
{
    public function __construct(
        protected StudyProgramRepository $studyProgramRepository,
    ) {}

    public function __invoke(Request $request)
    {
        return response()->json([
            'studyPrograms' => $this->studyProgramRepository->getAll(),
        ]);
    }
}
