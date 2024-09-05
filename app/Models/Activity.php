<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $table = 'activity';

    protected $fillable = [
        'title',
        'banner',
        'publised_by',
        'location',
        'category',
        'schedule',
        'deadline',
        'description',
        'max',
        'jobdesk',
        'domicile',
        'addtional_information'
    ];
}
