<?php

namespace App\Enums;

enum AgencyTypeEnum: string
{
    case COLAGE = 'perguruan';
    case PARTNER = 'mitra';

    public static function getValues(): array
    {
        return [
            self::COLAGE->value,
            self::PARTNER->value,
        ];
    }
}
