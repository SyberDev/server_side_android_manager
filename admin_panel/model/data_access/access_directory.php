<?php
require_once '../model/database/data.php';

class access_directory
{

    //=========== get directory


    public static function get_directory()
    {

        $data = data::selects("`directory`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_id($id)
    {

        $data = data::selects("`directory`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_name($name)
    {

        $data = data::selects("`directory`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_fileType($fileType)
    {

        $data = data::selects("`directory`", "`fileType` = '$fileType'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_parent($parent)
    {

        $data = data::selects("`directory`", "`parent` = '$parent'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_deviceId($deviceId)
    {

        $data = data::selects("`directory`", "`deviceId` = '$deviceId'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_isDownload($isDownload)
    {

        $data = data::selects("`directory`", "`isDownload` = '$isDownload'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_downloadDate($downloadDate)
    {

        $data = data::selects("`directory`", "`downloadDate` = '$downloadDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_creationDate($creationDate)
    {

        $data = data::selects("`directory`", "`creationDate` = '$creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_createdBy($createdBy)
    {

        $data = data::selects("`directory`", "`createdBy` = '$createdBy'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit directory


    public static function edit_directory($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`id` = $id");
    }

    public static function edit_directory_by_id($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`id` = $id");
    }

    public static function edit_directory_by_name($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`name` = $name");
    }

    public static function edit_directory_by_fileType($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`fileType` = $fileType");
    }

    public static function edit_directory_by_parent($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`parent` = $parent");
    }

    public static function edit_directory_by_deviceId($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`deviceId` = $deviceId");
    }

    public static function edit_directory_by_isDownload($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`isDownload` = $isDownload");
    }

    public static function edit_directory_by_downloadDate($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`downloadDate` = $downloadDate");
    }

    public static function edit_directory_by_creationDate($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`creationDate` = $creationDate");
    }

    public static function edit_directory_by_createdBy($id, $name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate, $createdBy)
    {

        return data::update("`directory`", "`id`= '$id', `name`= '$name', `fileType`= '$fileType', `parent`= '$parent', `deviceId`= '$deviceId', `isDownload`= '$isDownload', `downloadDate`= '$downloadDate', `creationDate`= '$creationDate', `createdBy`= '$createdBy'", "`createdBy` = $createdBy");
    }

    public static function edit_directory_id_by_id($id, $id)
    {

        return data::update("`directory`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_directory_name_by_id($id, $name)
    {

        return data::update("`directory`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_directory_fileType_by_id($id, $fileType)
    {

        return data::update("`directory`", "`fileType`= '$fileType'", "`id` = $id");
    }

    public static function edit_directory_parent_by_id($id, $parent)
    {

        return data::update("`directory`", "`parent`= '$parent'", "`id` = $id");
    }

    public static function edit_directory_deviceId_by_id($id, $deviceId)
    {

        return data::update("`directory`", "`deviceId`= '$deviceId'", "`id` = $id");
    }

    public static function edit_directory_isDownload_by_id($id, $isDownload)
    {

        return data::update("`directory`", "`isDownload`= '$isDownload'", "`id` = $id");
    }

    public static function edit_directory_downloadDate_by_id($id, $downloadDate)
    {

        return data::update("`directory`", "`downloadDate`= '$downloadDate'", "`id` = $id");
    }

    public static function edit_directory_creationDate_by_id($id, $creationDate)
    {

        return data::update("`directory`", "`creationDate`= '$creationDate'", "`id` = $id");
    }

    public static function edit_directory_createdBy_by_id($id, $createdBy)
    {

        return data::update("`directory`", "`createdBy`= '$createdBy'", "`id` = $id");
    }

    //=========== delete directory


    public static function delete_directory_by_id($id)
    {

        return data::delete("`directory`", "`id` = $id");
    }


    //=========== set directory


    public static function set_directory($name, $fileType, $parent, $deviceId, $isDownload, $downloadDate, $creationDate)
    {

        return data::insertinto("`directory`", "name, fileType, parent, deviceId, isDownload, downloadDate, creationDate", "'$name', '$fileType', '$parent', '$deviceId', '$isDownload', '$downloadDate', '$creationDate'");
    }


}