<?php
require_once '../model/database/data.php';

class access_fileType
{

    //=========== get fileType


    public static function get_fileType()
    {

        $data = data::selects("`fileType`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_fileType_by_id($id)
    {

        $data = data::selects("`fileType`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_fileType_by_name($name)
    {

        $data = data::selects("`fileType`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_fileType_by_creationDate($creationDate)
    {

        $data = data::selects("`fileType`", "`creationDate` = '$creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_fileType_by_createdBy($createdBy)
    {

        $data = data::selects("`fileType`", "`createdBy` = '$createdBy'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit fileType


    public static function edit_fileType($id, $name, $creationDate, $createdBy)
    {

        return data::update("`fileType`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`id` = $id");
    }

    public static function edit_fileType_by_id($id, $name, $creationDate, $createdBy)
    {

        return data::update("`fileType`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`id` = $id");
    }

    public static function edit_fileType_by_name($id, $name, $creationDate, $createdBy)
    {

        return data::update("`fileType`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`name` = $name");
    }

    public static function edit_fileType_by_creationDate($id, $name, $creationDate, $createdBy)
    {

        return data::update("`fileType`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`creationDate` = $creationDate");
    }

    public static function edit_fileType_by_createdBy($id, $name, $creationDate, $createdBy)
    {

        return data::update("`fileType`", "`id`= '$id', `name`= '$name', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`createdBy` = $createdBy");
    }

    public static function edit_fileType_id_by_id($id, $id)
    {

        return data::update("`fileType`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_fileType_name_by_id($id, $name)
    {

        return data::update("`fileType`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_fileType_creationDate_by_id($id, $creationDate)
    {

        return data::update("`fileType`", "`creationDate`= '$creationDate'", "`id` = $id");
    }

    public static function edit_fileType_createdBy_by_id($id, $createdBy)
    {

        return data::update("`fileType`", "`createdBy`= '$createdBy'", "`id` = $id");
    }

    //=========== delete fileType


    public static function delete_fileType_by_id($id)
    {

        return data::delete("`fileType`", "`id` = $id");
    }


    //=========== set fileType


    public static function set_fileType($name, $creationDate)
    {

        return data::insertinto("`fileType`", "name, creationDate", "'$name', '$creationDate'");
    }


}