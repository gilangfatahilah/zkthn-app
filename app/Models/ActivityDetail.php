<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityDetail extends Model
{
    use HasFactory;

    protected $table = 'activity_detail';

    protected $fillable = [
        'activity_id',
        'user_id',
        'status',
    ];

    public function getRegistrants($id)
    {
        $query = $this->join('users', 'users.id', '=', 'activity_detail.user_id')
            ->select('users.*', 'activity_detail.*')
            ->where('activity_id', $id)
            ->get();

        return $query;
    }
}
