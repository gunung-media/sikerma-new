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
