<?php

namespace App\Models\Partnership;

use App\Enums\PartnershipActivityTypeEnum;
use App\Models\Master\FieldActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * 
 *
 * @property int $id
 * @property int $partnership_id
 * @property PartnershipActivityTypeEnum $activity_type
 * @property string $document_path
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Partnership\Partnership $partnership
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereActivityType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereDocumentPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity wherePartnershipId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereUpdatedAt($value)
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @property int $field_activity_id
 * @property-read FieldActivity $fieldActivity
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereFieldActivityId($value)
 * @mixin \Eloquent
 */
class PartnershipActivity extends Model
{
    protected $fillable = [
        'partnership_id',
        'field_activity_id',
        'document_path',
    ];

    protected $with = ["fieldActivity"];

    public function partnership(): BelongsTo
    {
        return $this->belongsTo(Partnership::class);
    }

    public function fieldActivity(): BelongsTo
    {
        return $this->belongsTo(FieldActivity::class);
    }
}
