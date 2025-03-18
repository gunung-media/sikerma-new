<?php

namespace App\Http\Controllers\Api;

use App\Enums\AgencyTypeEnum;
use App\Http\Controllers\Controller;
use App\Repositories\Partnership\PartnerRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetPartnerController extends Controller
{
    public function __construct(
        protected PartnerRepository $partnerRepository
    ) {}

    public function __invoke(Request $request): JsonResponse
    {
        $isAgency = $request->query('is_perguruan', true);
        $searchParam = $request->query('s', '');

        $partners = $this
            ->partnerRepository
            ->search($searchParam, ['agency_type' => $isAgency ? AgencyTypeEnum::COLAGE->value : AgencyTypeEnum::PARTNER->value]);

        return response()->json(['partners' => $partners]);
    }
}
