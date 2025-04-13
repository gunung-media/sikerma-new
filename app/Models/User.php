<?php

namespace App\Models;

use App\Enums\RoleEnum;
use App\Models\Master\Faculty;
use App\Models\Master\Institute;
use App\Models\Master\StudyProgram;
use App\Models\Master\Upt;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 *
 *
 * @property int $id
 * @property string $name
 * @property string $username
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property RoleEnum $role
 * @property int|null $faculty_id
 * @property int|null $study_program_id
 * @property-read Faculty|null $faculty
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read StudyProgram|null $studyProgram
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereStudyProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUsername($value)
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @property int|null $institute_id
 * @property-read Institute|null $institute
 * @property-read mixed $is_super_admin
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereInstituteId($value)
 * @property string|null $password_raw
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePasswordRaw($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name',
        'username',
        'password',
        'password_raw',
        'role',
        'faculty_id',
        'study_program_id',
        'institute_id',
        'upt_id',
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

    protected $appends = ['is_super_admin'];

    public function faculty(): BelongsTo|null
    {
        return $this->belongsTo(Faculty::class);
    }

    public function studyProgram(): BelongsTo|null
    {
        return $this->belongsTo(StudyProgram::class);
    }

    public function institute(): BelongsTo|null
    {
        return $this->belongsTo(Institute::class);
    }

    public function isSuperAdmin(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->role === RoleEnum::SUPER_ADMIN
        );
    }

    public function Upt(): BelongsTo|null
    {
        return $this->belongsTo(Upt::class);
    }
}
