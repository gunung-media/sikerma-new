<?php

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
        Schema::table('partnerships', function (Blueprint $table) {
            $table->dropForeign(['faculty_id']);
            $table->dropForeign(['study_program_id']);
            $table->dropColumn(['faculty_id', 'study_program_id']);           //

            $table->unsignedBigInteger('institute_id')->nullable();

            $table->foreign('institute_id')->references('id')->on('institutes')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('partnerships', function (Blueprint $table) {
            $table->dropForeign(['institute_id']);
            $table->dropColumn('institute_id');

            $table->unsignedBigInteger('faculty_id')->nullable();
            $table->unsignedBigInteger('study_program_id')->nullable();

            $table->foreign('faculty_id')->references('id')->on('faculties')->nullOnDelete();
            $table->foreign('study_program_id')->references('id')->on('study_programs')->nullOnDelete();
        });
    }
};
