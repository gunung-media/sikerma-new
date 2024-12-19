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
            $table->enum('activity_type', PartnershipActivityTypeEnum::getValues())
                ->default(PartnershipActivityTypeEnum::ASISTENSI_MENGAJAR_DI_SATUAN_PENDIDIKAN_KAMPUS_MERDEKA->value);
            $table->string('document_path');
            $table->timestamps();

            $table->foreign('partnership_id')->references('id')->on('partnerships')->onDelete('cascade');
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
