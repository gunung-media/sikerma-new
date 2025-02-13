<?php

use App\Enums\AgencyTypeEnum;
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
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('partnership_id');
            $table->enum('agency_type', AgencyTypeEnum::getValues())->default(AgencyTypeEnum::COLAGE->value);
            $table->text('agency_name');
            $table->text('agency_address');
            $table->text('signatory_name');
            $table->text('signatory_position');
            $table->text('responsible_name')->nullable();
            $table->text('responsible_position')->nullable();
            $table->timestamps();

            $table->foreign('partnership_id')->references('id')->on('partnerships')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};
