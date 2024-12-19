<?php

use App\Enums\PartnershipStatusEnum;
use App\Enums\PartnershipTypeEnum;
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
        Schema::create('partnerships', function (Blueprint $table) {
            $table->id();
            $table->enum('type', PartnershipTypeEnum::getValues());
            $table->string('document_number');
            $table->string('title');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();


            $table->enum('status', PartnershipStatusEnum::getValues())->default(PartnershipStatusEnum::ACTIVE->value);
            $table->date('start_date');
            $table->date('end_date');

            $table->string('executor')->nullable();
            $table->unsignedBigInteger('faculty_id')->nullable();
            $table->unsignedBigInteger('study_program_id')->nullable();

            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
            $table->foreign('faculty_id')->references('id')->on('faculties')->nullOnDelete();
            $table->foreign('study_program_id')->references('id')->on('study_programs')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partnerships');
    }
};
