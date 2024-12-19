<?php

namespace App\Models\Partnership;

use App\Enums\PartnershipActivityTypeEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PartnershipActivity extends Model
{
    protected $fillable = [
        'partnership_id',
        'activity_type',
        'document_path',
    ];

    protected $casts = [
        'activity_type' => PartnershipActivityTypeEnum::class,
    ];

    public function partnership(): BelongsTo
    {
        return $this->belongsTo(Partnership::class);
    }
}
