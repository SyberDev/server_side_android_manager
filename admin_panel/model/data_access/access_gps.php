<?php
require_once '../model/database/data.php';

class access_gps
{

    //=========== get gps


    public static function get_gps()
    {

        $data = data::selects("`gps`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_id($id)
    {

        $data = data::selects("`gps`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_lat($lat)
    {

        $data = data::selects("`gps`", "`lat` = '$lat'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_long($long)
    {

        $data = data::selects("`gps`", "`long` = '$long'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_deviceid($deviceid)
    {

        $data = data::selects("`gps`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_createdby($createdby)
    {

        $data = data::selects("`gps`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_creationdate($creationdate)
    {

        $data = data::selects("`gps`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit gps


    public static function edit_gps($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_gps_by_id($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_gps_by_lat($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`lat` = $lat");
    }

    public static function edit_gps_by_long($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`long` = $long");
    }

    public static function edit_gps_by_deviceid($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`deviceid` = $deviceid");
    }

    public static function edit_gps_by_createdby($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`createdby` = $createdby");
    }

    public static function edit_gps_by_creationdate($id, $lat, $long, $deviceid, $createdby, $creationdate)
    {

        return data::update("`gps`", "`id`= '$id', `lat`= '$lat', `long`= '$long', `deviceid`= '$deviceid', `createdby`= '$createdby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_gps_id_by_id($id, $id)
    {

        return data::update("`gps`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_gps_lat_by_id($id, $lat)
    {

        return data::update("`gps`", "`lat`= '$lat'", "`id` = $id");
    }

    public static function edit_gps_long_by_id($id, $long)
    {

        return data::update("`gps`", "`long`= '$long'", "`id` = $id");
    }

    public static function edit_gps_deviceid_by_id($id, $deviceid)
    {

        return data::update("`gps`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_gps_createdby_by_id($id, $createdby)
    {

        return data::update("`gps`", "`createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_gps_creationdate_by_id($id, $creationdate)
    {

        return data::update("`gps`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete gps


    public static function delete_gps_by_id($id)
    {

        return data::delete("`gps`", "`id` = $id");
    }


    //=========== set gps


    public static function set_gps($lat, $long, $deviceid, $createdby)
    {

        return data::insertinto("`gps`", "lat, long, deviceid, createdby", "'$lat', '$long', '$deviceid', '$createdby'");
    }


}