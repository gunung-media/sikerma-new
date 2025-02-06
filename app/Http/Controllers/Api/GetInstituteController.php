<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Master\InstituteRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetInstituteController extends Controller
{
    public function __construct(
        protected InstituteRepository $instituteRepository,
    ) {}

    public function __invoke(Request $request): JsonResponse
    {
        return response()->json([
            'institutes' => $this->instituteRepository->getAll(),
        ]);
    }
}
