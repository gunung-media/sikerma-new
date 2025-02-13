<?php

namespace Database\Seeders;

use App\Enums\PartnershipActivityTypeEnum;
use App\Models\Master\FieldActivity;
use Illuminate\Database\Seeder;

class FieldActivitySeeder extends Seeder
{
    public function run(): void
    {
        $values = PartnershipActivityTypeEnum::getValues();

        foreach ($values as $value) {
            FieldActivity::create([
                'name' => $value,
            ]);
        }
    }
}
