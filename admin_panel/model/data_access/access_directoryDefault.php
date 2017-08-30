<?php
require_once '../model/database/data.php';

class access_directoryDefault
{

    //=========== get directoryDefault


    public static function get_directoryDefault()
    {

        $data = data::selects("`directoryDefault`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directoryDefault_by_id($id)
    {

        $data = data::selects("`directoryDefault`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directoryDefault_by_name($name)
    {

        $data = data::selects("`directoryDefault`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directoryDefault_by_creationDate($creationDate)
    {

        $data = data::selects("`directoryDefault`", "`creationDate` = '$creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directoryDefault_by_createdBy($createdBy)
    {

        $data = data::selects("`directoryDefault`", "`createdBy` = '$createdBy'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit directoryDefault


    public static function edit_directoryDefault($id, $name, $creationDate, $createdBy)
    {

        return data::update("`directoryDefault`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`id` = $id");
    }

    public static function edit_directoryDefault_by_id($id, $name, $creationDate, $createdBy)
    {

        return data::update("`directoryDefault`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`id` = $id");
    }

    public static function edit_directoryDefault_by_name($id, $name, $creationDate, $createdBy)
    {

        return data::update("`directoryDefault`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`name` = $name");
    }

    public static function edit_directoryDefault_by_creationDate($id, $name, $creationDate, $createdBy)
    {

        return data::update("`directoryDefault`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`creationDate` = $creationDate");
    }

    public static function edit_directoryDefault_by_createdBy($id, $name, $creationDate, $createdBy)
    {

        return data::update("`directoryDefault`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`createdBy` = $createdBy");
    }

    public static function edit_directoryDefault_id_by_id($id, $id)
    {

        return data::update("`directoryDefault`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_directoryDefault_name_by_id($id, $name)
    {

        return data::update("`directoryDefault`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_directoryDefault_creationDate_by_id($id, $creationDate)
    {

        return data::update("`directoryDefault`", "`creationDate`= '$creationDate'", "`id` = $id");
    }

    public static function edit_directoryDefault_createdBy_by_id($id, $createdBy)
    {

        return data::update("`directoryDefault`", "`createdBy`= '$createdBy'", "`id` = $id");
    }

    //=========== delete directoryDefault


    public static function delete_directoryDefault_by_id($id)
    {

        return data::delete("`directoryDefault`", "`id` = $id");
    }


    //=========== set directoryDefault


    public static function set_directoryDefault($name, $creationDate)
    {

        return data::insertinto("`directoryDefault`", "name, creationDate", "'$name', '$creationDate'");
    }


}