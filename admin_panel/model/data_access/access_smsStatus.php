<?php
require_once '../model/database/data.php';

class access_smsStatus
{

    //=========== get smsStatus


    public static function get_smsStatus()
    {

        $data = data::selects("`smsStatus`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smsStatus_by_id($id)
    {

        $data = data::selects("`smsStatus`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smsStatus_by_name($name)
    {

        $data = data::selects("`smsStatus`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smsStatus_by_createdby($createdby)
    {

        $data = data::selects("`smsStatus`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smsStatus_by_creationdate($creationdate)
    {

        $data = data::selects("`smsStatus`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit smsStatus


    public static function edit_smsStatus($id, $name, $createdby, $creationdate)
    {

        return data::update("`smsStatus`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_smsStatus_by_id($id, $name, $createdby, $creationdate)
    {

        return data::update("`smsStatus`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_smsStatus_by_name($id, $name, $createdby, $creationdate)
    {

        return data::update("`smsStatus`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`name` = $name");
    }

    public static function edit_smsStatus_by_createdby($id, $name, $createdby, $creationdate)
    {

        return data::update("`smsStatus`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_smsStatus_by_creationdate($id, $name, $createdby, $creationdate)
    {

        return data::update("`smsStatus`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_smsStatus_id_by_id($id, $id)
    {

        return data::update("`smsStatus`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_smsStatus_name_by_id($id, $name)
    {

        return data::update("`smsStatus`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_smsStatus_createdby_by_id($id, $createdby)
    {

        return data::update("`smsStatus`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_smsStatus_creationdate_by_id($id, $creationdate)
    {

        return data::update("`smsStatus`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete smsStatus


    public static function delete_smsStatus_by_id($id)
    {

        return data::delete("`smsStatus`", "`id` = $id");
    }


    //=========== set smsStatus


    public static function set_smsStatus($name, $createdby)
    {

        return data::insertinto("`smsStatus`", "name, createdby", "'$name', '$createdby'");
    }


}