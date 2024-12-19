<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Master\FacultyRepository;
use Illuminate\Http\Request;

class GetFacultyController extends Controller
{
    public function __construct(
        protected FacultyRepository $facultyRepository,
    ) {}

    public function __invoke(Request $request)
    {
        return response()->json([
            'faculties' => $this->facultyRepository->getAll(),
        ]);
    }
}
