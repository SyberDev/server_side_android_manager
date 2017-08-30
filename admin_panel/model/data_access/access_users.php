<?php
require_once '../model/database/data.php';

class access_users
{

    //=========== get users


    public static function get_users()
    {

        $data = data::selects("`users`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_id($id)
    {

        $data = data::selects("`users`", "`id` = '$id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_username($username)
    {

        $data = data::selects("`users`", "`username` = '$username'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_password($password)
    {

        $data = data::selects("`users`", "`password` = '$password'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_email($email)
    {

        $data = data::selects("`users`", "`email` = '$email'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_mobile($mobile)
    {

        $data = data::selects("`users`", "`mobile` = '$mobile'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_avatar($avatar)
    {

        $data = data::selects("`users`", "`avatar` = '$avatar'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_sex($sex)
    {

        $data = data::selects("`users`", "`sex` = '$sex'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_lastlogin($lastlogin)
    {

        $data = data::selects("`users`", "`lastlogin` = '$lastlogin'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_failedcount($failedcount)
    {

        $data = data::selects("`users`", "`failedcount` = '$failedcount'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_lastmodify($lastmodify)
    {

        $data = data::selects("`users`", "`lastmodify` = '$lastmodify'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_isDelete($isDelete)
    {

        $data = data::selects("`users`", "`isDelete` = '$isDelete'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_createby($createby)
    {

        $data = data::selects("`users`", "`createby` = '$createby'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_users_by_creationdate($creationdate)
    {

        $data = data::selects("`users`", "`creationdate` = '$creationdate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit users


    public static function edit_users($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_users_by_id($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`id` = $id");
    }

    public static function edit_users_by_username($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`username` = $username");
    }

    public static function edit_users_by_password($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`password` = $password");
    }

    public static function edit_users_by_email($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`email` = $email");
    }

    public static function edit_users_by_mobile($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`mobile` = $mobile");
    }

    public static function edit_users_by_avatar($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`avatar` = $avatar");
    }

    public static function edit_users_by_sex($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`sex` = $sex");
    }

    public static function edit_users_by_lastlogin($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`lastlogin` = $lastlogin");
    }

    public static function edit_users_by_failedcount($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`failedcount` = $failedcount");
    }

    public static function edit_users_by_lastmodify($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`lastmodify` = $lastmodify");
    }

    public static function edit_users_by_isDelete($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`isDelete` = $isDelete");
    }

    public static function edit_users_by_createby($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`createby` = $createby");
    }

    public static function edit_users_by_creationdate($id, $username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby, $creationdate)
    {

        return data::update("`users`", "`id`= '$id', `username`= '$username', `password`= '$password', `email`= '$email', `mobile`= '$mobile', `avatar`= '$avatar', `sex`= '$sex', `lastlogin`= '$lastlogin', `failedcount`= '$failedcount', `lastmodify`= '$lastmodify', `isDelete`= '$isDelete', `createby`= '$createby', `creationdate`= '$creationdate'", "`creationdate` = $creationdate");
    }

    public static function edit_users_id_by_id($id, $id)
    {

        return data::update("`users`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_users_username_by_id($id, $username)
    {

        return data::update("`users`", "`username`= '$username'", "`id` = $id");
    }

    public static function edit_users_password_by_id($id, $password)
    {

        return data::update("`users`", "`password`= '$password'", "`id` = $id");
    }

    public static function edit_users_email_by_id($id, $email)
    {

        return data::update("`users`", "`email`= '$email'", "`id` = $id");
    }

    public static function edit_users_mobile_by_id($id, $mobile)
    {

        return data::update("`users`", "`mobile`= '$mobile'", "`id` = $id");
    }

    public static function edit_users_avatar_by_id($id, $avatar)
    {

        return data::update("`users`", "`avatar`= '$avatar'", "`id` = $id");
    }

    public static function edit_users_sex_by_id($id, $sex)
    {

        return data::update("`users`", "`sex`= '$sex'", "`id` = $id");
    }

    public static function edit_users_lastlogin_by_id($id, $lastlogin)
    {

        return data::update("`users`", "`lastlogin`= '$lastlogin'", "`id` = $id");
    }

    public static function edit_users_failedcount_by_id($id, $failedcount)
    {

        return data::update("`users`", "`failedcount`= '$failedcount'", "`id` = $id");
    }

    public static function edit_users_lastmodify_by_id($id, $lastmodify)
    {

        return data::update("`users`", "`lastmodify`= '$lastmodify'", "`id` = $id");
    }

    public static function edit_users_isDelete_by_id($id, $isDelete)
    {

        return data::update("`users`", "`isDelete`= '$isDelete'", "`id` = $id");
    }

    public static function edit_users_createby_by_id($id, $createby)
    {

        return data::update("`users`", "`createby`= '$createby'", "`id` = $id");
    }

    public static function edit_users_creationdate_by_id($id, $creationdate)
    {

        return data::update("`users`", "`creationdate`= '$creationdate'", "`id` = $id");
    }

    //=========== delete users


    public static function delete_users_by_id($id)
    {

        return data::delete("`users`", "`id` = $id");
    }


    //=========== set users


    public static function set_users($username, $password, $email, $mobile, $avatar, $sex, $lastlogin, $failedcount, $lastmodify, $isDelete, $createby)
    {

        return data::insertinto("`users`", "username, password, email, mobile, avatar, sex, lastlogin, failedcount, lastmodify, isDelete, createby", "'$username', '$password', '$email', '$mobile', '$avatar', '$sex', '$lastlogin', '$failedcount', '$lastmodify', '$isDelete', '$createby'");
    }


}