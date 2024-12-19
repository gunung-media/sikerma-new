<?php

namespace App\Enums;

enum PartnershipStatusEnum: string
{
    case ACTIVE = 'active';
    case IN_RENEWAL = 'dalam-perpanjangan';
    case EXPIRED = 'expired';
    case INACTIVE = 'non-aktif';

    public static function getValues(): array
    {
        return [
            self::ACTIVE->value,
            self::IN_RENEWAL->value,
            self::EXPIRED->value,
            self::INACTIVE->value,
        ];
    }
}
