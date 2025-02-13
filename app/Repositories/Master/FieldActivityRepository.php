<?php

namespace App\Repositories\Master;

use App\Interfaces\BaseRepositoryInterface;
use App\Models\Master\FieldActivity;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class FieldActivityRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected FieldActivity $model,
    ) {}

    public function getAll(): Collection
    {
        $query = $this->model->query();

        return $query->get();
    }

    public function findById($id): mixed
    {
        $query = $this->model->query();

        return $query->find($id);
    }

    public function create(array $data): FieldActivity
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

    public function findByAttributes(array $attributes): ?FieldActivity
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
