<?php

namespace App\Models\Master;

use App\Models\Partnership\Partnership;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Partnership> $partnerships
 * @property-read int|null $partnerships_count
 * @mixin \Eloquent
 */
class PartnerCriteria extends Model
{
    protected $fillable = [
        'name',
        'weight',
    ];

    public function partnerships(): HasMany
    {
        return $this->hasMany(Partnership::class);
    }
}
