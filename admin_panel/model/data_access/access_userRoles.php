<?php
require_once '../model/database/data.php';

class access_userRoles
{

    //=========== get userRoles


    public static function get_userRoles()
    {

        $data = data::selects("`userRoles`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userRoles_by_userid($userid)
    {

        $data = data::selects("`userRoles`", "`userid` = '$userid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userRoles_by_roleid($roleid)
    {

        $data = data::selects("`userRoles`", "`roleid` = '$roleid'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userRoles_by_createby($createby)
    {

        $data = data::selects("`userRoles`", "`createby` = '$createby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userRoles_by_creationdate($creationdate)
    {

        $data = data::selects("`userRoles`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit userRoles


    public static function edit_userRoles($userid, $roleid, $createby, $creationdate)
    {

        return data::update("`userRoles`", "`userid`= '$userid', `roleid`= '$roleid', `createby`= '$createby', `creationdate`= '$creationdate'", "`userid` = $userid");
    }

    public static function edit_userRoles_by_userid($userid, $roleid, $createby, $creationdate)
    {

        return data::update("`userRoles`", "`userid`= '$userid', `roleid`= '$roleid', `createby`= '$createby', `creationdate`= '$creationdate'", "`userid` = $userid");
    }

    public static function edit_userRoles_by_roleid($userid, $roleid, $createby, $creationdate)
    {

        return data::update("`userRoles`", "`userid`= '$userid', `roleid`= '$roleid', `createby`= '$createby', `creationdate`= '$creationdate'", "`roleid` = $roleid");
    }

    public static function edit_userRoles_by_createby($userid, $roleid, $createby, $creationdate)
    {

        return data::update("`userRoles`", "`userid`= '$userid', `roleid`= '$roleid', `createby`= '$createby', `creationdate`= '$creationdate'", "`createby` = $createby");
    }

    public static function edit_userRoles_by_creationdate($userid, $roleid, $createby, $creationdate)
    {

        return data::update("`userRoles`", "`userid`= '$userid', `roleid`= '$roleid', `createby`= '$createby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_userRoles_userid_by_userid($userid, $userid)
    {

        return data::update("`userRoles`", "`userid`= '$userid'", "`userid` = $userid");
    }

    public static function edit_userRoles_roleid_by_userid($userid, $roleid)
    {

        return data::update("`userRoles`", "`roleid`= '$roleid'", "`userid` = $userid");
    }

    public static function edit_userRoles_createby_by_userid($userid, $createby)
    {

        return data::update("`userRoles`", "`createby`= '$createby'", "`userid` = $userid");
    }

    public static function edit_userRoles_creationdate_by_userid($userid, $creationdate)
    {

        return data::update("`userRoles`", "`creationdate`= '$creationdate'", "`userid` = $userid");
    }

    //=========== delete userRoles


    public static function delete_userRoles_by_userid($userid)
    {

        return data::delete("`userRoles`", "`userid` = $userid");
    }


    //=========== set userRoles


    public static function set_userRoles($roleid, $createby)
    {

        return data::insertinto("`userRoles`", "roleid, createby", "'$roleid', '$createby'");
    }


}