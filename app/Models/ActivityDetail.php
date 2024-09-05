<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityDetail extends Model
{
    use HasFactory;

    protected $table = 'activity';

    protected $fillable = [
        'activity_id',
        'user_id',
        'status',
    ];
}
