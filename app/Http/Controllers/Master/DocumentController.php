<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use App\Models\Master\Document;
use App\Repositories\Master\DocumentRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class DocumentController extends Controller
{
    public function __construct(
        protected DocumentRepository $documentRepository,
        protected UserRepository $userRepository,
    ) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('Document/index', ['data' => $this->documentRepository->getAll()]);
    }

    public function store(Request $request): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'path' => [
                'required',
                function ($attribute, $value, $fail) use ($request) {
                    if (!$request->hasFile('path') && !filter_var($value, FILTER_VALIDATE_URL)) {
                        $fail('The path must be a valid URL or a file.');
                    }
                },
            ],
        ]);

        DB::beginTransaction();
        try {
            if ($request->hasFile('path')) {
                $file = $request->file('path');
                $path = $file->store('documents', 'public');
                $validated['path'] = $path;
            }

            $this->documentRepository->create($validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function update(Request $request, Document $document): Response|RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'path' => [
                'nullable',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->hasFile('path') || is_string($value) && filter_var($value, FILTER_VALIDATE_URL)) {
                        return;
                    }
                    $fail('The path must be a valid URL or a file.');
                },
            ],
        ]);

        DB::beginTransaction();
        try {
            if ($request->hasFile('path')) {
                $file = $request->file('path');
                $path = $file->store('documents', 'public');
                $validated['path'] = $path;
            }

            $this->documentRepository->update($document->id, $validated);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }

    public function destroy(Document $document): Response|RedirectResponse
    {
        DB::beginTransaction();
        try {
            $this->documentRepository->delete($document->id);
            DB::commit();
            return response(status: 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->withErrors(['error' => $th->getMessage()]);
        }
    }
}
