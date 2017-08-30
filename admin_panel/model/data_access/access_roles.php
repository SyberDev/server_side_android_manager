<?php
require_once '../model/database/data.php';

class access_roles
{

    //=========== get roles


    public static function get_roles()
    {

        $data = data::selects("`roles`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_roles_by_id($id)
    {

        $data = data::selects("`roles`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_roles_by_role($role)
    {

        $data = data::selects("`roles`", "`role` = '$role'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_roles_by_createby($createby)
    {

        $data = data::selects("`roles`", "`createby` = '$createby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_roles_by_creationdate($creationdate)
    {

        $data = data::selects("`roles`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit roles


    public static function edit_roles($id, $role, $createby, $creationdate)
    {

        return data::update("`roles`", "`id`= '$id', `role`= '$role', `createby`= '$createby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_roles_by_id($id, $role, $createby, $creationdate)
    {

        return data::update("`roles`", "`id`= '$id', `role`= '$role', `createby`= '$createby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_roles_by_role($id, $role, $createby, $creationdate)
    {

        return data::update("`roles`", "`id`= '$id', `role`= '$role', `createby`= '$createby', `creationdate`= '$creationdate'", "`role` = $role");
    }

    public static function edit_roles_by_createby($id, $role, $createby, $creationdate)
    {

        return data::update("`roles`", "`id`= '$id', `role`= '$role', `createby`= '$createby', `creationdate`= '$creationdate'", "`createby` = $createby");
    }

    public static function edit_roles_by_creationdate($id, $role, $createby, $creationdate)
    {

        return data::update("`roles`", "`id`= '$id', `role`= '$role', `createby`= '$createby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_roles_id_by_id($id, $id)
    {

        return data::update("`roles`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_roles_role_by_id($id, $role)
    {

        return data::update("`roles`", "`role`= '$role'", "`id` = $id");
    }

    public static function edit_roles_createby_by_id($id, $createby)
    {

        return data::update("`roles`", "`createby`= '$createby'", "`id` = $id");
    }

    public static function edit_roles_creationdate_by_id($id, $creationdate)
    {

        return data::update("`roles`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete roles


    public static function delete_roles_by_id($id)
    {

        return data::delete("`roles`", "`id` = $id");
    }


    //=========== set roles


    public static function set_roles($role, $createby)
    {

        return data::insertinto("`roles`", "role, createby", "'$role', '$createby'");
    }


}