<?php
require_once '../model/database/data.php';

class access_sms
{

    //=========== get sms


    public static function get_sms()
    {

        $data = data::selects("`sms`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_id($id)
    {

        $data = data::selects("`sms`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_number($number)
    {

        $data = data::selects("`sms`", "`number` = '$number'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_text($text)
    {

        $data = data::selects("`sms`", "`text` = '$text'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_smsId($smsId)
    {

        $data = data::selects("`sms`", "`smsId` = '$smsId'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_registerDate($registerDate)
    {

        $data = data::selects("`sms`", "`registerDate` = '$registerDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_status($status)
    {

        $data = data::selects("`sms`", "`status` = '$status'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_type($type,$deviceid)
    {

        $data = data::selects("`sms`", "`type` = '$type' and `deviceid`=$deviceid ORDER BY `sms`.`id` DESC");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_deviceid($deviceid)
    {

        $data = data::selects("`sms`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_reqnumber($reqnumber)
    {

        $data = data::selects("`sms`", "`reqnumber` = '$reqnumber'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_createdby($createdby)
    {

        $data = data::selects("`sms`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_creationdate($creationdate)
    {

        $data = data::selects("`sms`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit sms


    public static function edit_sms($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_sms_by_id($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_sms_by_number($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`number` = $number");
    }

    public static function edit_sms_by_text($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`text` = $text");
    }

    public static function edit_sms_by_smsId($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`smsId` = $smsId");
    }

    public static function edit_sms_by_registerDate($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`registerDate` = $registerDate");
    }

    public static function edit_sms_by_status($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`status` = $status");
    }

    public static function edit_sms_by_type($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`type` = $type");
    }

    public static function edit_sms_by_deviceid($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`deviceid` = $deviceid");
    }

    public static function edit_sms_by_reqnumber($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`reqnumber` = $reqnumber");
    }

    public static function edit_sms_by_createdby($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_sms_by_creationdate($id, $number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby, $creationdate)
    {

        return data::update("`sms`", "`id`= '$id', `number`= '$number', `text`= '$text', `smsId`= '$smsId', `registerDate`= '$registerDate', `status`= '$status', `type`= '$type', `deviceid`= '$deviceid', `reqnumber`= '$reqnumber', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_sms_id_by_id($id, $id)
    {

        return data::update("`sms`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_sms_number_by_id($id, $number)
    {

        return data::update("`sms`", "`number`= '$number'", "`id` = $id");
    }

    public static function edit_sms_text_by_id($id, $text)
    {

        return data::update("`sms`", "`text`= '$text'", "`id` = $id");
    }

    public static function edit_sms_smsId_by_id($id, $smsId)
    {

        return data::update("`sms`", "`smsId`= '$smsId'", "`id` = $id");
    }

    public static function edit_sms_registerDate_by_id($id, $registerDate)
    {

        return data::update("`sms`", "`registerDate`= '$registerDate'", "`id` = $id");
    }

    public static function edit_sms_status_by_id($id, $status)
    {

        return data::update("`sms`", "`status`= '$status'", "`id` = $id");
    }

    public static function edit_sms_type_by_id($id, $type)
    {

        return data::update("`sms`", "`type`= '$type'", "`id` = $id");
    }

    public static function edit_sms_deviceid_by_id($id, $deviceid)
    {

        return data::update("`sms`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_sms_reqnumber_by_id($id, $reqnumber)
    {

        return data::update("`sms`", "`reqnumber`= '$reqnumber'", "`id` = $id");
    }

    public static function edit_sms_createdby_by_id($id, $createdby)
    {

        return data::update("`sms`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_sms_creationdate_by_id($id, $creationdate)
    {

        return data::update("`sms`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete sms


    public static function delete_sms_by_id($id)
    {

        return data::delete("`sms`", "`id` = $id");
    }


    //=========== set sms


    public static function set_sms($number, $text, $smsId, $registerDate, $status, $type, $deviceid, $reqnumber, $createdby)
    {

        return data::insertinto("`sms`", "number, text, smsId, registerDate, status, type, deviceid, reqnumber, createdby", "'$number', '$text', '$smsId', '$registerDate', '$status', '$type', '$deviceid', '$reqnumber', '$createdby'");
    }


}