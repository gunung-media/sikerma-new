<?php

namespace App\Repositories\Partnership;

use App\Interfaces\BaseRepositoryInterface;
use App\Models\Partnership\Partner;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\TModel;

class PartnerRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected Partner $model,
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

    public function create(array $data): Partner
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

    public function findByAttributes(array $attributes): ?Partner
    {
        $query = $this->model->query();


        return $query->where($attributes)->first();
    }

    public function exists(array $attributes): bool
    {
        $query = $this->model->query();

        return $query->where($attributes)->exists();
    }
    /**
     * @return Collection<int,TModel>
     */
    public function search(string $search, ?array $attributes = null): Collection
    {
        $query = $this->model->query();

        if ($attributes) {
            $query->where($attributes);
        }

        return $query->where('agency_name', 'like', "%{$search}%")->distinct()->get();
    }
}
