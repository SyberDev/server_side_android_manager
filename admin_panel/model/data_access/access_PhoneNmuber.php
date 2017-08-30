<?php
require_once '../model/database/data.php';

class access_PhoneNmuber
{

    //=========== get PhoneNmuber


    public static function get_PhoneNmuber()
    {

        $data = data::selects("`PhoneNmuber`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_PhoneNmuber_by_id($id)
    {

        $data = data::selects("`PhoneNmuber`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_PhoneNmuber_by_number($number)
    {

        $data = data::selects("`PhoneNmuber`", "`number` = '$number'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_PhoneNmuber_by_contactid($contactid)
    {

        $data = data::selects("`PhoneNmuber`", "`contactid` = '$contactid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_PhoneNmuber_by_creationdate($creationdate)
    {

        $data = data::selects("`PhoneNmuber`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_PhoneNmuber_by_createdby($createdby)
    {

        $data = data::selects("`PhoneNmuber`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit PhoneNmuber


    public static function edit_PhoneNmuber($id, $number, $contactid, $creationdate, $createdby)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id', `number`= '$number', `contactid`= '$contactid', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_PhoneNmuber_by_id($id, $number, $contactid, $creationdate, $createdby)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id', `number`= '$number', `contactid`= '$contactid', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_PhoneNmuber_by_number($id, $number, $contactid, $creationdate, $createdby)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id', `number`= '$number', `contactid`= '$contactid', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`number` = $number");
    }

    public static function edit_PhoneNmuber_by_contactid($id, $number, $contactid, $creationdate, $createdby)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id', `number`= '$number', `contactid`= '$contactid', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`contactid` = $contactid");
    }

    public static function edit_PhoneNmuber_by_creationdate($id, $number, $contactid, $creationdate, $createdby)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id', `number`= '$number', `contactid`= '$contactid', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`creationdate` = $creationdate");
    }

    public static function edit_PhoneNmuber_by_createdby($id, $number, $contactid, $creationdate, $createdby)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id', `number`= '$number', `contactid`= '$contactid', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`createdby` = $createdby");
    }

    public static function edit_PhoneNmuber_id_by_id($id, $id)
    {

        return data::update("`PhoneNmuber`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_PhoneNmuber_number_by_id($id, $number)
    {

        return data::update("`PhoneNmuber`", "`number`= '$number'", "`id` = $id");
    }

    public static function edit_PhoneNmuber_contactid_by_id($id, $contactid)
    {

        return data::update("`PhoneNmuber`", "`contactid`= '$contactid'", "`id` = $id");
    }

    public static function edit_PhoneNmuber_creationdate_by_id($id, $creationdate)
    {

        return data::update("`PhoneNmuber`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_PhoneNmuber_createdby_by_id($id, $createdby)
    {

        return data::update("`PhoneNmuber`", "`createdby`= '$createdby'", "`id` = $id");
    }

    //=========== delete PhoneNmuber


    public static function delete_PhoneNmuber_by_id($id)
    {

        return data::delete("`PhoneNmuber`", "`id` = $id");
    }


    //=========== set PhoneNmuber


    public static function set_PhoneNmuber($number, $contactid, $creationdate)
    {

        return data::insertinto("`PhoneNmuber`", "number, contactid, creationdate", "'$number', '$contactid', '$creationdate'");
    }


}