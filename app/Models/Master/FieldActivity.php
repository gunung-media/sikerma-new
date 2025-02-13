<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FieldActivity whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class FieldActivity extends Model
{
    protected $fillable = [
        'name'
    ];
}
