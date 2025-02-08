<?php

namespace App\Models\Master;

use App\Models\Partnership\Partnership;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * 
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute query()
 * @property int $id
 * @property string $name
 * @property string $type
 * @property string|null $address
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $website
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Institute whereWebsite($value)
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Partnership> $partnerships
 * @property-read int|null $partnerships_count
 * @mixin \Eloquent
 */
class Institute extends Model
{
    protected $fillable = [
        'name',
        'type',
        'address',
        'phone',
        'email',
        'website',
        'is_active',
    ];


    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }

    public function partnerships(): HasMany
    {
        return $this->hasMany(Partnership::class);
    }
}
