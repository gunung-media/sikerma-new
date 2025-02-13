<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Master\FieldActivityRepository;
use Illuminate\Http\Request;

class GetFieldActivityController extends Controller
{
    public function __construct(
        protected FieldActivityRepository $repository,
    ) {}

    public function __invoke(Request $request)
    {
        return response()->json([
            'activities' => $this->repository->getAll(),
        ]);
    }
}
