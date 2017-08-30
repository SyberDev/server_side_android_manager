<?php
require_once '../model/database/data.php';

class access_custome_file_list
{

    //=========== get custome_file_list


    public static function get_custome_file_list()
    {

        $data = data::selects("`custome_file_list`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_id($id)
    {

        $data = data::selects("`custome_file_list`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_deviceid($deviceid)
    {

        $data = data::selects("`custome_file_list`", "`deviceid` = '$deviceid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_filename($filename)
    {

        $data = data::selects("`custome_file_list`", "`filename` = '$filename'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_path($path)
    {

        $data = data::selects("`custome_file_list`", "`path` = '$path'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_time($time)
    {

        $data = data::selects("`custome_file_list`", "`time` = '$time'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_type($type)
    {

        $data = data::selects("`custome_file_list`", "`type` = '$type'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_creationdate($creationdate)
    {

        $data = data::selects("`custome_file_list`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_custome_file_list_by_createdby($createdby)
    {

        $data = data::selects("`custome_file_list`", "`createdby` = '$createdby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit custome_file_list


    public static function edit_custome_file_list($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_custome_file_list_by_id($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`id` = $id");
    }

    public static function edit_custome_file_list_by_deviceid($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`deviceid` = $deviceid");
    }

    public static function edit_custome_file_list_by_filename($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`filename` = $filename");
    }

    public static function edit_custome_file_list_by_path($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`path` = $path");
    }

    public static function edit_custome_file_list_by_time($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`time` = $time");
    }

    public static function edit_custome_file_list_by_type($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`type` = $type");
    }

    public static function edit_custome_file_list_by_creationdate($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`creationdate` = $creationdate");
    }

    public static function edit_custome_file_list_by_createdby($id, $deviceid, $filename, $path, $time, $type, $creationdate, $createdby)
    {

        return data::update("`custome_file_list`", "`id`= '$id', `deviceid`= '$deviceid', `filename`= '$filename', `path`= '$path', `time`= '$time', `type`= '$type', `creationdate`= '$creationdate', `createdby`= '$createdby'", "`createdby` = $createdby");
    }

    public static function edit_custome_file_list_id_by_id($id, $id)
    {

        return data::update("`custome_file_list`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_custome_file_list_deviceid_by_id($id, $deviceid)
    {

        return data::update("`custome_file_list`", "`deviceid`= '$deviceid'", "`id` = $id");
    }

    public static function edit_custome_file_list_filename_by_id($id, $filename)
    {

        return data::update("`custome_file_list`", "`filename`= '$filename'", "`id` = $id");
    }

    public static function edit_custome_file_list_path_by_id($id, $path)
    {

        return data::update("`custome_file_list`", "`path`= '$path'", "`id` = $id");
    }

    public static function edit_custome_file_list_time_by_id($id, $time)
    {

        return data::update("`custome_file_list`", "`time`= '$time'", "`id` = $id");
    }

    public static function edit_custome_file_list_type_by_id($id, $type)
    {

        return data::update("`custome_file_list`", "`type`= '$type'", "`id` = $id");
    }

    public static function edit_custome_file_list_creationdate_by_id($id, $creationdate)
    {

        return data::update("`custome_file_list`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_custome_file_list_createdby_by_id($id, $createdby)
    {

        return data::update("`custome_file_list`", "`createdby`= '$createdby'", "`id` = $id");
    }

    //=========== delete custome_file_list


    public static function delete_custome_file_list_by_id($id)
    {

        return data::delete("`custome_file_list`", "`id` = $id");
    }


    //=========== set custome_file_list


    public static function set_custome_file_list($deviceid, $filename, $path, $time, $type, $creationdate)
    {

        return data::insertinto("`custome_file_list`", "deviceid, filename, path, time, type, creationdate", "'$deviceid', '$filename', '$path', '$time', '$type', '$creationdate'");
    }


}