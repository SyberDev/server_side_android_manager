<?php
require_once '../model/database/data.php';

class access_get_sms_todo
{

    //=========== get get_sms_todo


    public static function get_get_sms_todo()
    {

        $data = data::selects("`get_sms_todo`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_id($id)
    {

        $data = data::selects("`get_sms_todo`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_deviceid($deviceid)
    {

        $data = data::selects("`get_sms_todo`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_type($type)
    {

        $data = data::selects("`get_sms_todo`", "`type` = '$type'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_reqid($reqid)
    {

        $data = data::selects("`get_sms_todo`", "`reqid` = '$reqid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_createdby($createdby)
    {

        $data = data::selects("`get_sms_todo`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_creationdate($creationdate)
    {

        $data = data::selects("`get_sms_todo`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_sms_id($sms_id)
    {

        $data = data::selects("`get_sms_todo`", "`sms_id` = '$sms_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_number($number)
    {

        $data = data::selects("`get_sms_todo`", "`number` = '$number'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_text($text)
    {

        $data = data::selects("`get_sms_todo`", "`text` = '$text'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_smsId($smsId)
    {

        $data = data::selects("`get_sms_todo`", "`smsId` = '$smsId'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_registerDate($registerDate)
    {

        $data = data::selects("`get_sms_todo`", "`registerDate` = '$registerDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_status($status)
    {

        $data = data::selects("`get_sms_todo`", "`status` = '$status'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_sms_type($sms_type)
    {

        $data = data::selects("`get_sms_todo`", "`sms_type` = '$sms_type'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_device_id($device_id)
    {

        $data = data::selects("`get_sms_todo`", "`device_id` = '$device_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_reqnumber($reqnumber)
    {

        $data = data::selects("`get_sms_todo`", "`reqnumber` = '$reqnumber'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_sms_createdBy($sms_createdBy)
    {

        $data = data::selects("`get_sms_todo`", "`sms_createdBy` = '$sms_createdBy'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_get_sms_todo_by_sms_creationDate($sms_creationDate)
    {

        $data = data::selects("`get_sms_todo`", "`sms_creationDate` = '$sms_creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit get_sms_todo


    public static function edit_get_sms_todo($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`id` = $id");
    }

    public static function edit_get_sms_todo_by_id($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`id` = $id");
    }

    public static function edit_get_sms_todo_by_deviceid($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`deviceid` = $deviceid");
    }

    public static function edit_get_sms_todo_by_type($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`type` = $type");
    }

    public static function edit_get_sms_todo_by_reqid($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`reqid` = $reqid");
    }

    public static function edit_get_sms_todo_by_createdby($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`createdby` = $createdby");
    }

    public static function edit_get_sms_todo_by_creationdate($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`creationdate` = $creationdate");
    }

    public static function edit_get_sms_todo_by_sms_id($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`sms_id` = $sms_id");
    }

    public static function edit_get_sms_todo_by_number($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`number` = $number");
    }

    public static function edit_get_sms_todo_by_text($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`text` = $text");
    }

    public static function edit_get_sms_todo_by_smsId($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`smsId` = $smsId");
    }

    public static function edit_get_sms_todo_by_registerDate($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`registerDate` = $registerDate");
    }

    public static function edit_get_sms_todo_by_status($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`status` = $status");
    }

    public static function edit_get_sms_todo_by_sms_type($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`sms_type` = $sms_type");
    }

    public static function edit_get_sms_todo_by_device_id($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`device_id` = $device_id");
    }

    public static function edit_get_sms_todo_by_reqnumber($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`reqnumber` = $reqnumber");
    }

    public static function edit_get_sms_todo_by_sms_createdBy($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`sms_createdBy` = $sms_createdBy");
    }

    public static function edit_get_sms_todo_by_sms_creationDate($id, $deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`id`= '$id', `deviceid`= '$deviceid', `type`= '$type', `reqid`= '$reqid', `createdby`= '$createdby', `creationdate`= '$creationdate', `sms_id`= '$sms_id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `sms_type`= '$sms_type', `device_id`= '$device_id', `reqnumber`= '$reqnumber', `sms_createdBy`= '$sms_createdBy', `sms_creationDate`= '$sms_creationDate'", "`sms_creationDate` = $sms_creationDate");
    }

    public static function edit_get_sms_todo_id_by_id($id, $id)
    {

        return data::update("`get_sms_todo`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_get_sms_todo_deviceid_by_id($id, $deviceid)
    {

        return data::update("`get_sms_todo`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_get_sms_todo_type_by_id($id, $type)
    {

        return data::update("`get_sms_todo`", "`type`= '$type'", "`id` = $id");
    }

    public static function edit_get_sms_todo_reqid_by_id($id, $reqid)
    {

        return data::update("`get_sms_todo`", "`reqid`= '$reqid'", "`id` = $id");
    }

    public static function edit_get_sms_todo_createdby_by_id($id, $createdby)
    {

        return data::update("`get_sms_todo`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_get_sms_todo_creationdate_by_id($id, $creationdate)
    {

        return data::update("`get_sms_todo`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_get_sms_todo_sms_id_by_id($id, $sms_id)
    {

        return data::update("`get_sms_todo`", "`sms_id`= '$sms_id'", "`id` = $id");
    }

    public static function edit_get_sms_todo_number_by_id($id, $number)
    {

        return data::update("`get_sms_todo`", "`number`= '$number'", "`id` = $id");
    }

    public static function edit_get_sms_todo_text_by_id($id, $text)
    {

        return data::update("`get_sms_todo`", "`text`= '$text'", "`id` = $id");
    }

    public static function edit_get_sms_todo_smsId_by_id($id, $smsId)
    {

        return data::update("`get_sms_todo`", "`smsId`= '$smsId'", "`id` = $id");
    }

    public static function edit_get_sms_todo_registerDate_by_id($id, $registerDate)
    {

        return data::update("`get_sms_todo`", "`registerDate`= '$registerDate'", "`id` = $id");
    }

    public static function edit_get_sms_todo_status_by_id($id, $status)
    {

        return data::update("`get_sms_todo`", "`status`= '$status'", "`id` = $id");
    }

    public static function edit_get_sms_todo_sms_type_by_id($id, $sms_type)
    {

        return data::update("`get_sms_todo`", "`sms_type`= '$sms_type'", "`id` = $id");
    }

    public static function edit_get_sms_todo_device_id_by_id($id, $device_id)
    {

        return data::update("`get_sms_todo`", "`device_id`= '$device_id'", "`id` = $id");
    }

    public static function edit_get_sms_todo_reqnumber_by_id($id, $reqnumber)
    {

        return data::update("`get_sms_todo`", "`reqnumber`= '$reqnumber'", "`id` = $id");
    }

    public static function edit_get_sms_todo_sms_createdBy_by_id($id, $sms_createdBy)
    {

        return data::update("`get_sms_todo`", "`sms_createdBy`= '$sms_createdBy'", "`id` = $id");
    }

    public static function edit_get_sms_todo_sms_creationDate_by_id($id, $sms_creationDate)
    {

        return data::update("`get_sms_todo`", "`sms_creationDate`= '$sms_creationDate'", "`id` = $id");
    }

    //=========== delete get_sms_todo


    public static function delete_get_sms_todo_by_id($id)
    {

        return data::delete("`get_sms_todo`", "`id` = $id");
    }


    //=========== set get_sms_todo


    public static function set_get_sms_todo($deviceid, $type, $reqid, $createdby, $creationdate, $sms_id, $number, $text, $smsId, $registerDate, $status, $sms_type, $device_id, $reqnumber, $sms_createdBy)
    {

        return data::insertinto("`get_sms_todo`", "deviceid, type, reqid, createdby, creationdate, sms_id, number, text, smsId, registerDate, status, sms_type, device_id, reqnumber, sms_createdBy", "'$deviceid', '$type', '$reqid', '$createdby', '$creationdate', '$sms_id', '$number', '$text', '$smsId', '$registerDate', '$status', '$sms_type', '$device_id', '$reqnumber', '$sms_createdBy'");
    }


}