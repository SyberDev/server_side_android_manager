<?php
require_once '../model/database/data.php';

class access_RequestType
{

    //=========== get RequestType


    public static function get_RequestType()
    {

        $data = data::selects("`RequestType`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_RequestType_by_id($id)
    {

        $data = data::selects("`RequestType`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_RequestType_by_name($name)
    {

        $data = data::selects("`RequestType`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit RequestType


    public static function edit_RequestType($id, $name)
    {

        return data::update("`RequestType`", "`id`= '$id', `name`= '$name'", "`id` = $id");
    }

    public static function edit_RequestType_by_id($id, $name)
    {

        return data::update("`RequestType`", "`id`= '$id', `name`= '$name'", "`id` = $id");
    }

    public static function edit_RequestType_by_name($id, $name)
    {

        return data::update("`RequestType`", "`id`= '$id', `name`= '$name'", "`name` = $name");
    }

    public static function edit_RequestType_id_by_id($id, $id)
    {

        return data::update("`RequestType`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_RequestType_name_by_id($id, $name)
    {

        return data::update("`RequestType`", "`name`= '$name'", "`id` = $id");
    }

    //=========== delete RequestType


    public static function delete_RequestType_by_id($id)
    {

        return data::delete("`RequestType`", "`id` = $id");
    }


    //=========== set RequestType


    public static function set_RequestType($name)
    {

        return data::insertinto("`RequestType`", "name", "'$name'");
    }


}