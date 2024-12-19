<?php

namespace App\Models\Partnership;

use App\Enums\AgencyTypeEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Partner extends Model
{
    protected $fillable = [
        'partnership_id',
        'agency_type',
        'agency_name',
        'agency_address',
        'signatory_name',
        'signatory_position',
        'responsible_name',
        'responsible_position',
    ];

    protected $casts = [
        'agency_type' => AgencyTypeEnum::class,
    ];

    public function partnership(): BelongsTo
    {
        return $this->belongsTo(Partnership::class);
    }
}
