<?php

namespace App\Models;

use App\Enums\RoleEnum;
use App\Models\Master\Faculty;
use App\Models\Master\StudyProgram;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'username',
        'password',
        'role',
        'faculty_id',
        'study_program_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'role' => RoleEnum::class,
            'password' => 'hashed',
        ];
    }

    public function faculty(): BelongsTo|null
    {
        return $this->belongsTo(Faculty::class);
    }

    public function studyProgram(): BelongsTo|null
    {
        return $this->belongsTo(StudyProgram::class);
    }
}
