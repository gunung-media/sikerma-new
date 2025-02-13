<?php

namespace App\Repositories\Partnership;

use App\Interfaces\BaseRepositoryInterface;
use App\Models\Partnership\Partnership;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\TModel;
use Illuminate\Support\Facades\DB;

class PartnershipRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected Partnership $model,
    ) {}

    public function getAll(): Collection
    {
        $query = $this->model->query();

        return $query->get();
    }

    public function findById($id): mixed
    {
        $query = $this->model->query();
        $query->with(['partners', 'activities']);

        return $query->find($id);
    }

    public function create(array $data): Partnership
    {
        if (isset($data['document_path']) && $data['document_path'] instanceof \Illuminate\Http\UploadedFile) {
            $filePath = $data['document_path']->store('partnership_documents', 'public');
            $data['document_path'] = $filePath;
        }

        return $this->model->create($data);
    }

    public function update($id, array $data): bool
    {
        $query = $this->findById($id);

        return $query->update($data);
    }

    public function delete($id): ?bool
    {
        $query = $this->findById($id);

        return $query->delete();
    }

    public function paginate($perPage = 15): LengthAwarePaginator
    {
        $query = $this->model->query();

        return $query->paginate($perPage);
    }

    public function findByAttributes(array $attributes): ?Partnership
    {
        $query = $this->model->query();


        return $query->where($attributes)->first();
    }

    public function exists(array $attributes): bool
    {
        $query = $this->model->query();

        return $query->where($attributes)->exists();
    }

    public function getYearlyPartnerships(?int $year = null): Collection
    {
        $query = $this->model->whereYear('start_date', $year ?? now()->year);

        $query->select(
            DB::raw('start_date as date'),
            DB::raw('count(*) as count')
        )
            ->groupBy('start_date');

        return $query->get();
    }

    public function getYearlyDueDates(?int $year = null)
    {
        $query = $this->model->whereYear('end_date', $year ?? now()->year);

        $query->select(
            DB::raw('end_date as date'),
            DB::raw('count(*) as count')
        )
            ->groupBy('end_date');

        return $query->get();
    }

    public function count()
    {
        return $this->model->count();
    }
}
