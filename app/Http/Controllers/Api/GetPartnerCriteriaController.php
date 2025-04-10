<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Master\PartnerCriteriaRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetPartnerCriteriaController extends Controller
{
    public function __construct(
        protected PartnerCriteriaRepository $partnerCriteriaRepository,
    ) {}

    public function __invoke(Request $request): JsonResponse
    {
        return response()->json([
            'partnerCriterias' => $this->partnerCriteriaRepository->getAll(),
        ]);
    }
}
