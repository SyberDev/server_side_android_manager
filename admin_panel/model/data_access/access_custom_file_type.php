<?php
require_once '../model/database/data.php';

class access_custom_file_type
{

    //=========== get custom_file_type


    public static function get_custom_file_type()
    {

        $data = data::selects("`custom_file_type`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custom_file_type_by_id($id)
    {

        $data = data::selects("`custom_file_type`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custom_file_type_by_name($name)
    {

        $data = data::selects("`custom_file_type`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custom_file_type_by_creationdate($creationdate)
    {

        $data = data::selects("`custom_file_type`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custom_file_type_by_createdby($createdby)
    {

        $data = data::selects("`custom_file_type`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit custom_file_type


    public static function edit_custom_file_type($id, $name, $creationdate, $createdby)
    {

        return data::update("`custom_file_type`", "`id`= '$id', `name`= '$name', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_custom_file_type_by_id($id, $name, $creationdate, $createdby)
    {

        return data::update("`custom_file_type`", "`id`= '$id', `name`= '$name', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_custom_file_type_by_name($id, $name, $creationdate, $createdby)
    {

        return data::update("`custom_file_type`", "`id`= '$id', `name`= '$name', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`name` = $name");
    }

    public static function edit_custom_file_type_by_creationdate($id, $name, $creationdate, $createdby)
    {

        return data::update("`custom_file_type`", "`id`= '$id', `name`= '$name', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`creationdate` = $creationdate");
    }

    public static function edit_custom_file_type_by_createdby($id, $name, $creationdate, $createdby)
    {

        return data::update("`custom_file_type`", "`id`= '$id', `name`= '$name', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`createdby` = $createdby");
    }

    public static function edit_custom_file_type_id_by_id($id, $id)
    {

        return data::update("`custom_file_type`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_custom_file_type_name_by_id($id, $name)
    {

        return data::update("`custom_file_type`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_custom_file_type_creationdate_by_id($id, $creationdate)
    {

        return data::update("`custom_file_type`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_custom_file_type_createdby_by_id($id, $createdby)
    {

        return data::update("`custom_file_type`", "`createdby`= '$createdby'", "`id` = $id");
    }

    //=========== delete custom_file_type


    public static function delete_custom_file_type_by_id($id)
    {

        return data::delete("`custom_file_type`", "`id` = $id");
    }


    //=========== set custom_file_type


    public static function set_custom_file_type($name, $creationdate)
    {

        return data::insertinto("`custom_file_type`", "name, creationdate", "'$name', '$creationdate'");
    }


}