<?php
require_once '../model/database/data.php';

class access_smstype
{

    //=========== get smstype


    public static function get_smstype()
    {

        $data = data::selects("`smstype`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smstype_by_id($id)
    {

        $data = data::selects("`smstype`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smstype_by_name($name)
    {

        $data = data::selects("`smstype`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smstype_by_createdby($createdby)
    {

        $data = data::selects("`smstype`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_smstype_by_creationdate($creationdate)
    {

        $data = data::selects("`smstype`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit smstype


    public static function edit_smstype($id, $name, $createdby, $creationdate)
    {

        return data::update("`smstype`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_smstype_by_id($id, $name, $createdby, $creationdate)
    {

        return data::update("`smstype`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_smstype_by_name($id, $name, $createdby, $creationdate)
    {

        return data::update("`smstype`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`name` = $name");
    }

    public static function edit_smstype_by_createdby($id, $name, $createdby, $creationdate)
    {

        return data::update("`smstype`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_smstype_by_creationdate($id, $name, $createdby, $creationdate)
    {

        return data::update("`smstype`", "`id`= '$id', `name`= '$name', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_smstype_id_by_id($id, $id)
    {

        return data::update("`smstype`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_smstype_name_by_id($id, $name)
    {

        return data::update("`smstype`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_smstype_createdby_by_id($id, $createdby)
    {

        return data::update("`smstype`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_smstype_creationdate_by_id($id, $creationdate)
    {

        return data::update("`smstype`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete smstype


    public static function delete_smstype_by_id($id)
    {

        return data::delete("`smstype`", "`id` = $id");
    }


    //=========== set smstype


    public static function set_smstype($name, $createdby)
    {

        return data::insertinto("`smstype`", "name, createdby", "'$name', '$createdby'");
    }


}