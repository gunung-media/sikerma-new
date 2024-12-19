<?php

namespace App\Enums;

enum PartnershipTypeEnum: string
{
    case MOU = "Memorandum of Understanding";
    case MOA = "Memorandum of Agreement";
    case IA = "Implementation Agreement";

    public static function getValues(): array
    {
        return [
            self::MOU->value,
            self::MOA->value,
            self::IA->value,
        ];
    }
}
