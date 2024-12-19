<?php

namespace App\Models\Partnership;

use App\Enums\AgencyTypeEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 *
 *
 * @property int $id
 * @property int $partnership_id
 * @property AgencyTypeEnum $agency_type
 * @property string $agency_name
 * @property string $agency_address
 * @property string $signatory_name
 * @property string $signatory_position
 * @property string|null $responsible_name
 * @property string|null $responsible_position
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Partnership\Partnership $partnership
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereAgencyAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereAgencyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereAgencyType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner wherePartnershipId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereResponsibleName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereResponsiblePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereSignatoryName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereSignatoryPosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereUpdatedAt($value)
 * @mixin \Eloquent
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
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
