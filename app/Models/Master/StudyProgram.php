<?php

namespace App\Models\Master;

use App\Models\Partnership\Partnership;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * 
 *
 * @property int $id
 * @property int $faculty_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Master\Faculty $faculty
 * @property-read \Illuminate\Database\Eloquent\Collection<int, User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereUpdatedAt($value)
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @property float|null $weight
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Partnership> $partnerships
 * @property-read int|null $partnerships_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereWeight($value)
 * @mixin \Eloquent
 */
class StudyProgram extends Model
{
    protected $fillable = [
        'faculty_id',
        'name',
        'weight'
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    public function partnerships(): HasMany
    {
        return $this->hasMany(Partnership::class);
    }
}
