<?php

namespace App\Repositories\Partnership;

use App\Interfaces\BaseRepositoryInterface;
use App\Models\Partnership\PartnershipActivity;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class PartnershipActivityRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected PartnershipActivity $model,
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

    public function create(array $data): PartnershipActivity
    {
        if (isset($data['file']) && $data['file'] instanceof \Illuminate\Http\UploadedFile) {
            $filePath = $data['file']->store('partnership_activities/documents', 'public');
            $data['document_path'] = $filePath;
        }

        unset($data['file']);

        return $this->model->create($data);
    }

    public function update($id, array $data): bool
    {
        if (isset($data['file']) && $data['file'] instanceof \Illuminate\Http\UploadedFile) {
            $filePath = $data['file']->store('partnership_activities/documents', 'public');
            $data['document_path'] = $filePath;
        }

        unset($data['file']);

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

    public function findByAttributes(array $attributes): ?PartnershipActivity
    {
        $query = $this->model->query();


        return $query->where($attributes)->first();
    }

    public function exists(array $attributes): bool
    {
        $query = $this->model->query();

        return $query->where($attributes)->exists();
    }
}
