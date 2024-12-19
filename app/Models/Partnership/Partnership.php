<?php

namespace App\Models\Partnership;

use App\Enums\PartnershipStatusEnum;
use App\Enums\PartnershipTypeEnum;
use App\Models\Master\StudyProgram;
use App\Models\Master\Faculty;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 *
 *
 * @property int $id
 * @property PartnershipTypeEnum $type
 * @property string $document_number
 * @property string $title
 * @property string|null $description
 * @property int|null $user_id
 * @property PartnershipStatusEnum $status
 * @property \Illuminate\Support\Carbon $start_date
 * @property \Illuminate\Support\Carbon $end_date
 * @property string|null $executor
 * @property int|null $faculty_id
 * @property int|null $study_program_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Partnership\PartnershipActivity> $activities
 * @property-read int|null $activities_count
 * @property-read Faculty|null $faculty
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Partnership\Partner> $partners
 * @property-read int|null $partners_count
 * @property-read StudyProgram|null $studyProgram
 * @property-read User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereDocumentNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereExecutor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereStudyProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereUserId($value)
 * @mixin \Eloquent
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Partnership extends Model
{
    protected $fillable = [
        'type',
        'document_number',
        'title',
        'description',
        'user_id',
        'status',
        'start_date',
        'end_date',
        'executor',
        'faculty_id',
        'study_program_id',
    ];

    protected $casts = [
        'type' => PartnershipTypeEnum::class,
        'status' => PartnershipStatusEnum::class,
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    public function studyProgram(): BelongsTo
    {
        return $this->belongsTo(StudyProgram::class);
    }

    public function activities(): HasMany
    {
        return $this->hasMany(PartnershipActivity::class);
    }

    public function partners(): HasMany
    {
        return $this->hasMany(Partner::class);
    }
}
