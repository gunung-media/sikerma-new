<?php

namespace App\Enums;

enum RoleEnum: string
{
    case SUPER_ADMIN = 'super-admin';
    case FACULTY_ADMIN = 'faculty-admin';
    case STUDY_PROGRAM_ADMIN = 'study-program-admin';


    public static function getValues(): array
    {
        return [
            self::SUPER_ADMIN->value,
            self::FACULTY_ADMIN->value,
            self::STUDY_PROGRAM_ADMIN->value,
        ];
    }
}
