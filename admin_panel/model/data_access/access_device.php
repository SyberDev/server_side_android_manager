<?php
require_once '../model/database/data.php';

class access_device
{

    //=========== get device


    public static function get_device()
    {

        $data = data::selects("`device`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_device_by_id($id)
    {

        $data = data::selects("`device`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_device_by_name($name)
    {

        $data = data::selects("`device`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_device_by_IMEI($IMEI)
    {

        $data = data::selects("`device`", "`IMEI` = '$IMEI'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_device_by_createdby($createdby)
    {

        $data = data::selects("`device`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_device_by_creationdate($creationdate)
    {

        $data = data::selects("`device`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit device


    public static function edit_device($id, $name, $IMEI, $createdby, $creationdate)
    {

        return data::update("`device`", "`id`= '$id', `name`= '$name', `IMEI`= '$IMEI', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_device_by_id($id, $name, $IMEI, $createdby, $creationdate)
    {

        return data::update("`device`", "`id`= '$id', `name`= '$name', `IMEI`= '$IMEI', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_device_by_name($id, $name, $IMEI, $createdby, $creationdate)
    {

        return data::update("`device`", "`id`= '$id', `name`= '$name', `IMEI`= '$IMEI', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`name` = $name");
    }

    public static function edit_device_by_IMEI($id, $name, $IMEI, $createdby, $creationdate)
    {

        return data::update("`device`", "`id`= '$id', `name`= '$name', `IMEI`= '$IMEI', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`IMEI` = $IMEI");
    }

    public static function edit_device_by_createdby($id, $name, $IMEI, $createdby, $creationdate)
    {

        return data::update("`device`", "`id`= '$id', `name`= '$name', `IMEI`= '$IMEI', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_device_by_creationdate($id, $name, $IMEI, $createdby, $creationdate)
    {

        return data::update("`device`", "`id`= '$id', `name`= '$name', `IMEI`= '$IMEI', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_device_id_by_id($id, $id)
    {

        return data::update("`device`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_device_name_by_id($id, $name)
    {

        return data::update("`device`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_device_IMEI_by_id($id, $IMEI)
    {

        return data::update("`device`", "`IMEI`= '$IMEI'", "`id` = $id");
    }

    public static function edit_device_createdby_by_id($id, $createdby)
    {

        return data::update("`device`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_device_creationdate_by_id($id, $creationdate)
    {

        return data::update("`device`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete device


    public static function delete_device_by_id($id)
    {

        return data::delete("`device`", "`id` = $id");
    }


    //=========== set device


    public static function set_device($name, $IMEI, $createdby)
    {

        return data::insertinto("`device`", "name, IMEI, createdby", "'$name', '$IMEI', '$createdby'");
    }


}