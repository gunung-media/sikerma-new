<?php

namespace App\Repositories\Master;

use App\Interfaces\BaseRepositoryInterface;
use App\Models\Master\PartnerCriteria;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class PartnerCriteriaRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected PartnerCriteria $model,
    ) {}

    public function getAll(): Collection
    {
        $query = $this->model->query();
        $query->with(['partnerships']);

        return $query->get();
    }

    public function findById($id): mixed
    {
        $query = $this->model->query();

        return $query->find($id);
    }

    public function create(array $data): PartnerCriteria
    {
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

    public function findByAttributes(array $attributes): ?PartnerCriteria
    {
        $query = $this->model->query();


        return $query->where($attributes)->first();
    }

    public function exists(array $attributes): bool
    {
        $query = $this->model->query();

        return $query->where($attributes)->exists();
    }

    public function count()
    {
        $query = $this->model->query();

        return $query->count();
    }
}
