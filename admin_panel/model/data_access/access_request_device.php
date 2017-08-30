<?php
require_once '../model/database/data.php';

class access_request_device
{

    //=========== get request_device


    public static function get_request_device()
    {

        $data = data::selects("`request_device`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_request_device_by_id($id)
    {

        $data = data::selects("`request_device`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_request_device_by_deviceid($deviceid)
    {

        $data = data::selects("`request_device`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_request_device_by_type($type)
    {

        $data = data::selects("`request_device`", "`type` = '$type'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_request_device_by_reqid($reqid)
    {

        $data = data::selects("`request_device`", "`reqid` = '$reqid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_request_device_by_createdby($createdby)
    {

        $data = data::selects("`request_device`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_request_device_by_creationdate($creationdate)
    {

        $data = data::selects("`request_device`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit request_device


    public static function edit_request_device($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_request_device_by_id($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_request_device_by_deviceid($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`deviceid` = $deviceid");
    }

    public static function edit_request_device_by_type($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`type` = $type");
    }

    public static function edit_request_device_by_reqid($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`reqid` = $reqid");
    }

    public static function edit_request_device_by_createdby($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_request_device_by_creationdate($id, $deviceid, $type, $reqid, $createdby, $creationdate)
    {

        return data::update("`request_device`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_request_device_id_by_id($id, $id)
    {

        return data::update("`request_device`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_request_device_deviceid_by_id($id, $deviceid)
    {

        return data::update("`request_device`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_request_device_type_by_id($id, $type)
    {

        return data::update("`request_device`", "`type`= '$type'", "`id` = $id");
    }

    public static function edit_request_device_reqid_by_id($id, $reqid)
    {

        return data::update("`request_device`", "`reqid`= '$reqid'", "`id` = $id");
    }

    public static function edit_request_device_createdby_by_id($id, $createdby)
    {

        return data::update("`request_device`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_request_device_creationdate_by_id($id, $creationdate)
    {

        return data::update("`request_device`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete request_device


    public static function delete_request_device_by_id($id)
    {

        return data::delete("`request_device`", "`id` = $id");
    }


    //=========== set request_device


    public static function set_request_device($deviceid, $type, $reqid, $createdby)
    {

        return data::insertinto("`request_device`", "deviceid, type, reqid, createdby", "'$deviceid', '$type', '$reqid', '$createdby'");
    }


}