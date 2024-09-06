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
        'requirement',
        'domicile',
        'addtional_information'
    ];

    public function activityJoin($id = null)
    {
        $query = $this->join('users', 'users.id', '=', 'activity.publised_by')
            ->select('activity.*', 'users.name as publised_name');

        if ($id) {
            $query->where('activity.id', $id);
        }

        return $query->get();
    }

    public function activityPublised($id)
    {
        $query = $this->join('users', 'users.id', '=', 'activity.publised_by')
            ->select('activity.*', 'users.name as publised_name')
            ->where('publised_by', $id)
            ->get();

        return $query;
    }
}
