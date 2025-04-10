<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Model;

/**
 *
 *
 * @property int $id
 * @property string $name
 * @property float $weight
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnerCriteria whereWeight($value)
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @mixin \Eloquent
 */
class PartnerCriteria extends Model
{
    protected $fillable = [
        'name',
        'weight',
    ];
}
