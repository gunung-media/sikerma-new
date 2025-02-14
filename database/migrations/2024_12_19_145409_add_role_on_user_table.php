<?php

use App\Enums\RoleEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', RoleEnum::getValues())->default(RoleEnum::SUPER_ADMIN->value);
            $table->unsignedBigInteger('faculty_id')->nullable();
            $table->unsignedBigInteger('study_program_id')->nullable();
            $table->unsignedBigInteger('institute_id')->nullable();

            $table->foreign('faculty_id')->references('id')->on('faculties')->nullOnDelete();
            $table->foreign('study_program_id')->references('id')->on('study_programs')->nullOnDelete();
            $table->foreign('institute_id')->references('id')->on('institutes')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['faculty_id', 'study_program_id', 'institute_id']);
            $table->dropColumn(['role', 'faculty_id', 'study_program_id', 'institute_id']);
        });
    }
};
