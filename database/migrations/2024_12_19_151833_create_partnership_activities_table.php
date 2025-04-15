<?php

use App\Enums\PartnershipActivityTypeEnum;
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
        Schema::create('partnership_activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('partnership_id');
            $table->unsignedBigInteger('field_activity_id');
            $table->string('document_path')->nullable();
            $table->timestamps();

            $table->foreign('partnership_id')->references('id')->on('partnerships')->onDelete('cascade');
            $table->foreign('field_activity_id')->references('id')->on('field_activities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partnership_activities');
    }
};
