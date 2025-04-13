<?php

namespace App\Enums;

enum RoleEnum: string
{
    case SUPER_ADMIN = 'super-admin';
    case FACULTY_ADMIN = 'admin-fakultas';
    case STUDY_PROGRAM_ADMIN = 'admin-program-studi';
    case INSTITUTE_ADMIN = 'admin-institusi';
    case UPT_ADMIN = 'admin-upt';
    case SUPERVISOR = 'pimpinan';


    public static function getValues(): array
    {
        return [
            self::SUPER_ADMIN->value,
            self::FACULTY_ADMIN->value,
            self::STUDY_PROGRAM_ADMIN->value,
            self::INSTITUTE_ADMIN->value,
            self::UPT_ADMIN->value,
            self::SUPERVISOR->value
        ];
    }
}
