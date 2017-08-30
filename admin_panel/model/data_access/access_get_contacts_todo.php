<?php
require_once '../model/database/data.php';

class access_get_contacts_todo
{

    //=========== get get_contacts_todo


    public static function get_get_contacts_todo()
    {

        $data = data::selects("`get_contacts_todo`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_id($id)
    {

        $data = data::selects("`get_contacts_todo`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_deviceid($deviceid)
    {

        $data = data::selects("`get_contacts_todo`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_type($type)
    {

        $data = data::selects("`get_contacts_todo`", "`type` = '$type'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_reqid($reqid)
    {

        $data = data::selects("`get_contacts_todo`", "`reqid` = '$reqid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_createdby($createdby)
    {

        $data = data::selects("`get_contacts_todo`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_creationdate($creationdate)
    {

        $data = data::selects("`get_contacts_todo`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_name($name)
    {

        $data = data::selects("`get_contacts_todo`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_contactid($contactid)
    {

        $data = data::selects("`get_contacts_todo`", "`contactid` = '$contactid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_cid($cid)
    {

        $data = data::selects("`get_contacts_todo`", "`cid` = '$cid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_contacts_todo_by_number($number)
    {

        $data = data::selects("`get_contacts_todo`", "`number` = '$number'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit get_contacts_todo


    public static function edit_get_contacts_todo($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_by_id($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_by_deviceid($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`deviceid` = $deviceid");
    }

    public static function edit_get_contacts_todo_by_type($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`type` = $type");
    }

    public static function edit_get_contacts_todo_by_reqid($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`reqid` = $reqid");
    }

    public static function edit_get_contacts_todo_by_createdby($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`createdby` = $createdby");
    }

    public static function edit_get_contacts_todo_by_creationdate($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`creationdate` = $creationdate");
    }

    public static function edit_get_contacts_todo_by_name($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`name` = $name");
    }

    public static function edit_get_contacts_todo_by_contactid($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`contactid` = $contactid");
    }

    public static function edit_get_contacts_todo_by_cid($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`cid` = $cid");
    }

    public static function edit_get_contacts_todo_by_number($id, $deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid, $number)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `name`= '$name', `contactid`= '$contactid', `cid`= '$cid', `number`= '$number'", "`number` = $number");
    }

    public static function edit_get_contacts_todo_id_by_id($id, $id)
    {

        return data::update("`get_contacts_todo`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_deviceid_by_id($id, $deviceid)
    {

        return data::update("`get_contacts_todo`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_type_by_id($id, $type)
    {

        return data::update("`get_contacts_todo`", "`type`= '$type'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_reqid_by_id($id, $reqid)
    {

        return data::update("`get_contacts_todo`", "`reqid`= '$reqid'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_createdby_by_id($id, $createdby)
    {

        return data::update("`get_contacts_todo`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_creationdate_by_id($id, $creationdate)
    {

        return data::update("`get_contacts_todo`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_name_by_id($id, $name)
    {

        return data::update("`get_contacts_todo`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_contactid_by_id($id, $contactid)
    {

        return data::update("`get_contacts_todo`", "`contactid`= '$contactid'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_cid_by_id($id, $cid)
    {

        return data::update("`get_contacts_todo`", "`cid`= '$cid'", "`id` = $id");
    }

    public static function edit_get_contacts_todo_number_by_id($id, $number)
    {

        return data::update("`get_contacts_todo`", "`number`= '$number'", "`id` = $id");
    }

    //=========== delete get_contacts_todo


    public static function delete_get_contacts_todo_by_id($id)
    {

        return data::delete("`get_contacts_todo`", "`id` = $id");
    }


    //=========== set get_contacts_todo


    public static function set_get_contacts_todo($deviceid, $type, $reqid, $createdby, $creationdate, $name, $contactid, $cid)
    {

        return data::insertinto("`get_contacts_todo`", "deviceid, type, reqid, createdby, creationdate, name, contactid, cid", "'$deviceid', '$type', '$reqid', '$createdby', '$creationdate', '$name', '$contactid', '$cid'");
    }


}