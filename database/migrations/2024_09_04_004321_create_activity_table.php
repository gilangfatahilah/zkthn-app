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
        Schema::create('activity', function (Blueprint $table) {
            $table->id();
            $table->string('title', length: 50);
            $table->string('banner', length: 100);
            $table->integer('publised_by');
            $table->string('location', length: 30);
            $table->string('category');
            $table->dateTime('schedule');
            $table->dateTime('deadline');
            $table->longText('description');
            $table->integer('max');
            $table->longText('jobdesk');
            $table->longText('requirement');
            $table->string('domicile', length: 30);
            $table->longText('addtional_information');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity');
    }
};
