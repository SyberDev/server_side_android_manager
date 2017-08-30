<?php
require_once '../model/database/data.php';

class access_contact
{

    //=========== get contact


    public static function get_contact()
    {

        $data = data::selects("`contact`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_id($id)
    {

        $data = data::selects("`contact`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_name($name)
    {

        $data = data::selects("`contact`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_contactid($contactid)
    {

        $data = data::selects("`contact`", "`contactid` = '$contactid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_deviceid($deviceid)
    {

        $data = data::selects("`contact`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_createdby($createdby)
    {

        $data = data::selects("`contact`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_creationdate($creationdate)
    {

        $data = data::selects("`contact`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit contact


    public static function edit_contact($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_contact_by_id($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_contact_by_name($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`name` = $name");
    }

    public static function edit_contact_by_contactid($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`contactid` = $contactid");
    }

    public static function edit_contact_by_deviceid($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`deviceid` = $deviceid");
    }

    public static function edit_contact_by_createdby($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_contact_by_creationdate($id, $name, $contactid, $deviceid, $createdby, $creationdate)
    {

        return data::update("`contact`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_contact_id_by_id($id, $id)
    {

        return data::update("`contact`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_contact_name_by_id($id, $name)
    {

        return data::update("`contact`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_contact_contactid_by_id($id, $contactid)
    {

        return data::update("`contact`", "`contactid`= '$contactid'", "`id` = $id");
    }

    public static function edit_contact_deviceid_by_id($id, $deviceid)
    {

        return data::update("`contact`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_contact_createdby_by_id($id, $createdby)
    {

        return data::update("`contact`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_contact_creationdate_by_id($id, $creationdate)
    {

        return data::update("`contact`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete contact


    public static function delete_contact_by_id($id)
    {

        return data::delete("`contact`", "`id` = $id");
    }


    //=========== set contact


    public static function set_contact($name, $contactid, $deviceid, $createdby)
    {

        return data::insertinto("`contact`", "name, contactid, deviceid, createdby", "'$name', '$contactid', '$deviceid', '$createdby'");
    }


}