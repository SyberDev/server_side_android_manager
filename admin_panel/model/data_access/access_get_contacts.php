<?php
require_once '../model/database/data.php';

class access_get_contacts
{

    //=========== get get_contacts


    public static function get_get_contacts()
    {

        $data = data::selects("`get_contacts`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_id($id)
    {

        $data = data::selects("`get_contacts`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_name($name)
    {

        $data = data::selects("`get_contacts`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_contactid($contactid)
    {

        $data = data::selects("`get_contacts`", "`contactid` = '$contactid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_deviceid($deviceid)
    {

        $data = data::selects("`get_contacts`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_cid($cid)
    {

        $data = data::selects("`get_contacts`", "`cid` = '$cid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_number($number)
    {

        $data = data::selects("`get_contacts`", "`number` = '$number'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_createdby($createdby)
    {

        $data = data::selects("`get_contacts`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_by_creationdate($creationdate)
    {

        $data = data::selects("`get_contacts`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit get_contacts


    public static function edit_get_contacts($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_get_contacts_by_id($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_get_contacts_by_name($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`name` = $name");
    }

    public static function edit_get_contacts_by_contactid($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`contactid` = $contactid");
    }

    public static function edit_get_contacts_by_deviceid($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`deviceid` = $deviceid");
    }

    public static function edit_get_contacts_by_cid($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`cid` = $cid");
    }

    public static function edit_get_contacts_by_number($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`number` = $number");
    }

    public static function edit_get_contacts_by_createdby($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_get_contacts_by_creationdate($id, $name, $contactid, $deviceid, $cid, $number, $createdby, $creationdate)
    {

        return data::update("`get_contacts`", "`id`= '$id', `name`= '$name', `contactid`= '$contactid', `deviceid`= '$deviceid', `cid`= '$cid', `number`= '$number', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_get_contacts_id_by_id($id, $id)
    {

        return data::update("`get_contacts`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_get_contacts_name_by_id($id, $name)
    {

        return data::update("`get_contacts`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_get_contacts_contactid_by_id($id, $contactid)
    {

        return data::update("`get_contacts`", "`contactid`= '$contactid'", "`id` = $id");
    }

    public static function edit_get_contacts_deviceid_by_id($id, $deviceid)
    {

        return data::update("`get_contacts`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_get_contacts_cid_by_id($id, $cid)
    {

        return data::update("`get_contacts`", "`cid`= '$cid'", "`id` = $id");
    }

    public static function edit_get_contacts_number_by_id($id, $number)
    {

        return data::update("`get_contacts`", "`number`= '$number'", "`id` = $id");
    }

    public static function edit_get_contacts_createdby_by_id($id, $createdby)
    {

        return data::update("`get_contacts`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_get_contacts_creationdate_by_id($id, $creationdate)
    {

        return data::update("`get_contacts`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete get_contacts


    public static function delete_get_contacts_by_id($id)
    {

        return data::delete("`get_contacts`", "`id` = $id");
    }


    //=========== set get_contacts


    public static function set_get_contacts($name, $contactid, $deviceid, $cid, $number, $createdby)
    {

        return data::insertinto("`get_contacts`", "name, contactid, deviceid, cid, number, createdby", "'$name', '$contactid', '$deviceid', '$cid', '$number', '$createdby'");
    }


}