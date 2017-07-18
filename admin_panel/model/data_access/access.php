<?php

//try {
require_once '../model/database/data.php';

class access
{

    public static function set_role($role, $createBy)
    {
        return data::insertinto("`roles`", "`id`, `role`, `createby`, `creationdate`", "NULL, '$role', '$createBy', CURRENT_TIMESTAMP");
    }

    public static function get_role_by_id($id)
    {
        $data = data::selects("`roles`", "`id` = $id");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_all_role()
    {
        $data = data::selects("`roles`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function update_role($id, $role, $createBy)
    {
        return data::update("`roles`", "`role` = '$role', `createby` = '$createBy'", "`id` = $id");
    }

    public static function delete_role($id)
    {
        return data::delete("`roles`", "`id` = $id");
    }

    public static function set_user_role($userId, $roleId, $createBy)
    {
        return data::insertinto("`userroles`", "`userid`, `roleid`, `createby`, `creationdate`", "'$userId', '$roleId', '$createBy', CURRENT_TIMESTAMP");
    }

    public static function get_user_role_by_user_id($userId)
    {
        $data = data::selects("`userroles`", "`userid` = $userId");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_all_user_role()
    {
        $data = data::selects("`userroles`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function update_user_role($userId, $roleId, $createBy)
    {
        return data::update("`userroles`", "`userid` = '$userId', `roleid` = '$roleId', `createby` = '$createBy'", "`userid` = $userId");
    }

    public static function delete_user_role($id)
    {
        return data::delete("`userroles`", "`id` = $id");
    }

    public static function get_user_by_email_pass($email, $pass)
    {
        //
        $data = data::selects('`users`', "`email` = '$email' AND  `password` ='$pass'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function set_user($emial, $password, $avatar, $username)
    {
        return data::insertinto("`users`", "`ID`,`password`,`email`,`avatar`,`username`, `creationDate`", "NULL, '" . $password . "', '" . $emial . "', '" . $avatar . "', '" . $username . "', DATE_SUB( CURRENT_TIME(), INTERVAL 30 MINUTE)");
    }

    public static function edit_user($id, $username, $name, $sex, $address, $email, $cart, $sheba)
    {
        return data::update("`users`", "`username` = '$username'  , `name` = '$name' ,  `sex`= '$sex' ,  `address` = '$address' ,  `email` = '$email' ,  `cart` = '$cart' , `sheba` = '$sheba'", "`id`='$id'");
    }

    public static function set_user_login($id)
    {
        return data::update("`users`", "`last_login` = DATE_SUB( CURRENT_TIME(), INTERVAL 30 MINUTE)", "`id`='$id'");
    }

    public static function get_user_by_username_or_email($user)
    {
        //
        $data = data::selects('`users`', "`email` like '%$user%' OR  `username` like '%$user%'");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_all_sms()
    {
        $data = data::selects("`sms`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_by_type($type)
    {
        $data = data::selects("`sms`", "`type` = $type");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_requste()
    {
        $data = data::call('get_sms_requst_device');
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_requste_by_device($device)
    {
        $data = data::call('get_sms_requst_device_by_device_id', $device);
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function set_sms($number, $text, $reqnumber, $smsId, $registerDate, $status, $type, $deviceid, $createdby)
    {
        return data::insertinto("`sms`", "`id`, `number`, `text`, `reqnumber`,`smsId`, `registerDate` , `status`, `type`, `deviceid`, `createdby`, `creationdate`", "NULL,'$number', '$text', $reqnumber, $smsId , $registerDate , $status , $type , $deviceid , $createdby , CURRENT_TIMESTAMP");
    }

    public static function update_sms($id, $number, $text, $reqnumber, $status, $type, $deviceid, $createBy, $smsId = null)
    {
        if ($smsId == null) {
            return data::update("`sms`", "`number`= '$number',`text` = '$text', `reqnumber` = $reqnumber , `status` = $status, `type` = $type , `deviceid` = $deviceid , `createby` = '$createBy'", "`id` = $id");
        } else {
            return data::update("`sms`", "`number`= '$number',`text` = '$text', `reqnumber` = $reqnumber , `status` = $status, `type` = $type , `deviceid` = $deviceid , `createby` = '$createBy'", "`smsId` = $smsId");
        }
    }

    public static function get_sms_type_list()
    {

        $data = data::selects('`smstype`', "");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_sms_status_list()
    {

        $data = data::selects('`smsStatus`', "");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function update_sms_status($id, $status)
    {
        return data::update("`sms`", "`status` = $status", "`id` = $id");
    }

    public static function delete_sms($id)
    {
        return data::delete("`sms`", "`id` = $id");
    }

    public static function get_all_device()
    {
        $data = data::selects("`device`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_device_by_IMEI($IMEI)
    {
        //
        $data = data::selects('`device`', "`IMEI` like '$IMEI'");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function set_device($name, $IMEI, $createdby)
    {
        return data::insertinto("`device`", "`id`, `name`, `IMEI`, `createdby`, `creationdate`", "NULL,$name , $IMEI , $createdby , CURRENT_TIMESTAMP");
    }

    public static function update_device($id, $name, $IMEI, $createBy)
    {
        return data::update("`device`", "`name` =$name , `IMEI` =$IMEI , `createby` = '$createBy'", "`id` = $id");
    }

    public static function delete_device($id)
    {
        return data::delete("`device`", "`id` = $id");
    }

    //_____________ contact

    public static function get_contacts()
    {
        //
        $data = data::selects('`get_contacts`', "");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_number($number)
    {
        //
        $data = data::selects('`get_contacts`', "`number` LIKE '%$number%'");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_name($name)
    {
        $data = data::selects('`get_contacts`', "`name` LIKE '%$name%'");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_deviceId($id)
    {
        $data = data::selects('`get_contacts`', "`deviceid` = $id");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_contact_by_number_deviceId($number, $deviceId)
    {
        $data = data::selects('`get_contacts`', "`number` LIKE '%$number%'  and `deviceid` = $deviceId");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function set_contact($name, $deviceId, $contactid, $createdby)
    {
        //INSERT INTO `contact`(`id`, `name`, `contactid`, `deviceid`, `createdby`, `creationdate`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])
        return data::insertinto("`contact`", "`name`,`contactid`,`deviceid`, `createdby`, `creationdate`", "'$name' , '$contactid' , '$deviceId' , $createdby , CURRENT_TIMESTAMP");
    }

    public static function set_phone_number_by_contactId($number, $contactid, $createdby)
    {
        //INSERT INTO `PhoneNmuber`(`id`, `number`, `contactid`, `creationdate`, `createdby`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])
        return data::insertinto("`PhoneNmuber`", "`number`, `contactid`, `createdby`, `creationdate`", "'$number' , '$contactid' , $createdby , CURRENT_TIMESTAMP");
    }

    public static function get_contact_request_by_deviceId($deviceId)
    {

        $data = data::selects('`get_contacts_todo`', "`deviceid` = $deviceId");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function edit_contact_cid($id, $contactid)
    {
        return data::update("contact", "`contactid`= '$contactid'", "`id`= $id");
    }

    //file transfer

    public static function get_directory()
    {

        $data = data::selects('`directory`', "");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }

    }

    public static function get_directory_by_deviceId($deviceId)
    {

        $data = data::selects('`directory`', "`deviceid` = $deviceId");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_directory_by_deviceId_isDownload($deviceId, $isDownload)
    {

        $data = data::selects('`directory`', "`deviceid` = $deviceId and `isDownload` = $isDownload");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function edit_directory()
    {
        //TODO directory


    }

    public static function edit_directory_by_deviceId()
    {
        //TODO directory
    }

    public static function edit_directory_isDownload_by_deviceId($deviceId, $isdownload)
    {
        return data::update("`directory`", "`isDownload`=$isdownload,`downloadDate`=CURRENT_TIMESTAMP", "`deviceId`= '$deviceId'");
    }

    public static function edit_directory_isDownload_by_Id($id, $isdownload)
    {
        //`id`,`name`,`fileType`,`parent`,`deviceId`,`isDownload`,`downloadDate`,`creationDate`,`createdBy`
        return data::update("`directory`", "`isDownload`=$isdownload,`downloadDate`=CURRENT_TIMESTAMP", "`id`= $id");
    }

    public static function set_directory($name, $fileType, $parent, $deviceId)
    {
        //INSERT INTO `directory`(`id`, `name`, `fileType`, `parent`, `deviceId`, `isDownload`, `downloadDate`, `creationDate`, `createdBy`)
        return data::insertinto("`directory`", "`name`, `fileType`, `parent`, `deviceId`", "'$name' , '$fileType' , '$parent' ,'$deviceId'");
    }

    public static function delete_directory($id)
    {
        return data::delete("`directory`", "`id` = $id");
    }

    public static function delete_directory_by_deviceId($deviceId)
    {
        return data::delete("`directory`", "`deviceid` = $deviceId");
    }

    //GPS function

    public static function get_gps()
    {
        $data = data::selects('`gps`', "");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_id($id)
    {
        $data = data::selects('`gps`', "`id`= $id");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_gps_by_deviceId($deviceid)
    {
        $data = data::selects('`gps`', "`deviceid`= $deviceid");

        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function set_gps($lat, $long, $deviceid)
    {
        //INSERT INTO `gps`(`id`, `lat`, `long`, `deviceid`, `createdby`, `creationdate`) VALUES
        return data::insertinto("`gps`", "`lat`, `long`, `deviceid`", "''$lat', '$long', '$deviceid'");
    }

    public static function delete_gps_by_deviceId($deviceid)
    {
        return data::delete('`gps`', "`deviceid`= $deviceid");
    }

    public static function delete_gps_by_Id($id)
    {
        return data::delete('`gps`', "`id`= $id");
    }

}