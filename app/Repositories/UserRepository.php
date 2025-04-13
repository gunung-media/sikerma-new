<?php

namespace App\Repositories;

use App\Interfaces\BaseRepositoryInterface;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;

class UserRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected User $model,
    ) {}

    public function getAll(): Collection
    {
        $query = $this->model->query();

        $query->with('faculty', 'studyProgram', 'institute', 'upt');

        return $query->get();
    }

    public function findById($id): mixed
    {
        $query = $this->model->query();

        return $query->find($id);
    }

    public function create(array $data): User
    {
        $data['password'] = bcrypt($data['password']);
        return $this->model->create($data);
    }

    public function update($id, array $data): bool
    {
        $query = $this->findById($id);

        if (isset($data['password']) && $data['password'] != $query->password) {
            $data['password'] = bcrypt($data['password']);
        }

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

    public function findByAttributes(array $attributes): ?User
    {
        $query = $this->model->query();


        return $query->where($attributes)->first();
    }

    public function exists(array $attributes): bool
    {
        $query = $this->model->query();

        return $query->where($attributes)->exists();
    }

    public function getGroupByRole()
    {
        return $this->model->all()
            ->groupBy('role')
            ->map(function ($users, $role) {
                return [
                    'name' => $role,
                    'users' => $users,
                ];
            })
            ->values();
    }

    public function count()
    {
        return $this->model->count();
    }
}
