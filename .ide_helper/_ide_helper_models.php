<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models\Master{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Master\StudyProgram> $studyPrograms
 * @property-read int|null $study_programs_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Faculty whereUpdatedAt($value)
 */
	class Faculty extends \Eloquent {}
}

namespace App\Models\Master{
/**
 * 
 *
 * @property int $id
 * @property int $faculty_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Master\Faculty $faculty
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|StudyProgram whereUpdatedAt($value)
 */
	class StudyProgram extends \Eloquent {}
}

namespace App\Models\Partnership{
/**
 * 
 *
 * @property int $id
 * @property int $partnership_id
 * @property \App\Enums\AgencyTypeEnum $agency_type
 * @property string $agency_name
 * @property string $agency_address
 * @property string $signatory_name
 * @property string $signatory_position
 * @property string|null $responsible_name
 * @property string|null $responsible_position
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Partnership\Partnership $partnership
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereAgencyAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereAgencyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereAgencyType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner wherePartnershipId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereResponsibleName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereResponsiblePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereSignatoryName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereSignatoryPosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partner whereUpdatedAt($value)
 */
	class Partner extends \Eloquent {}
}

namespace App\Models\Partnership{
/**
 * 
 *
 * @property int $id
 * @property \App\Enums\PartnershipTypeEnum $type
 * @property string $document_number
 * @property string $title
 * @property string|null $description
 * @property int|null $user_id
 * @property \App\Enums\PartnershipStatusEnum $status
 * @property \Illuminate\Support\Carbon $start_date
 * @property \Illuminate\Support\Carbon $end_date
 * @property string|null $executor
 * @property int|null $faculty_id
 * @property int|null $study_program_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Partnership\PartnershipActivity> $activities
 * @property-read int|null $activities_count
 * @property-read \App\Models\Master\Faculty|null $faculty
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Partnership\Partner> $partners
 * @property-read int|null $partners_count
 * @property-read \App\Models\Master\StudyProgram|null $studyProgram
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereDocumentNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereExecutor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereStudyProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Partnership whereUserId($value)
 */
	class Partnership extends \Eloquent {}
}

namespace App\Models\Partnership{
/**
 * 
 *
 * @property int $id
 * @property int $partnership_id
 * @property \App\Enums\PartnershipActivityTypeEnum $activity_type
 * @property string $document_path
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Partnership\Partnership $partnership
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereActivityType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereDocumentPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity wherePartnershipId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PartnershipActivity whereUpdatedAt($value)
 */
	class PartnershipActivity extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $username
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \App\Enums\RoleEnum $role
 * @property int|null $faculty_id
 * @property int|null $study_program_id
 * @property-read \App\Models\Master\Faculty|null $faculty
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \App\Models\Master\StudyProgram|null $studyProgram
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereFacultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereStudyProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUsername($value)
 */
	class User extends \Eloquent {}
}

