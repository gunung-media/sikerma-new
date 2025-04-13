<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Master\UptRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetUptController extends Controller
{
    public function __construct(
        protected UptRepository $uptRepository,
    ) {}

    public function __invoke(Request $request): JsonResponse
    {
        return response()->json([
            'upts' => $this->uptRepository->getAll(),
        ]);
    }
}
