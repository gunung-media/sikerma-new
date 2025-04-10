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
            $table->dropForeign(['partner_criteria_id']);

            $table->foreign('partner_criteria_id')->references('id')->on('partner_criterias')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('partnerships', function (Blueprint $table) {
            $table->dropForeign(['partner_criteria_id']);

            $table->foreign('partner_criteria_id')->references('id')->on('partner_criterias');
        });
    }
};
