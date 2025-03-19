<?php

namespace App\Http\Controllers\Api;

use App\Enums\PartnershipStatusEnum;
use App\Enums\PartnershipTypeEnum;
use App\Http\Controllers\Controller;
use App\Repositories\Partnership\PartnershipRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetPartnershipController extends Controller
{
    public function __construct(protected PartnershipRepository $partnershipRepository) {}

    public function __invoke(Request $request): JsonResponse
    {
        $attributes = [
            'status' => PartnershipStatusEnum::ACTIVE,
            'type' => PartnershipTypeEnum::MOU,
        ];
        $partnerships = $this->partnershipRepository->getByAttributes($attributes);

        return response()->json(['partnerships' => $partnerships]);
    }
}
