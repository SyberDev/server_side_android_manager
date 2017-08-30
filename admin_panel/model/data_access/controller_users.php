<?php

require_once '../model/data_access/access_users.php';
require_once '../model/data_access/lang.php';
require_once 'controller_main_function.php';

ob_start();
session_cache_expire();
session_start();


$userAccess = controller_main_function::get_access($_SESSION["user"]["ID"]);
$debugMode = true;

if (isset($_REQUEST['act']) && $_REQUEST['act'] != '' && $_REQUEST['act'] != null) {

    switch ($_REQUEST['act']) {

        //______________ get act

        case 'users_get':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $result = access_users::get_users();
            controller_main_function::send_result($result);
            break;


        case 'users_get_by_id':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_id($_REQUEST["id"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_username':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("username"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_username($_REQUEST["username"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_password':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("password"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_password($_REQUEST["password"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_email':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("email"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_email($_REQUEST["email"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_mobile':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("mobile"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_mobile($_REQUEST["mobile"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_avatar':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("avatar"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_avatar($_REQUEST["avatar"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_sex':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("sex"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_sex($_REQUEST["sex"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_lastlogin':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("lastlogin"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_lastlogin($_REQUEST["lastlogin"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_failedcount':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("failedcount"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_failedcount($_REQUEST["failedcount"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_lastmodify':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("lastmodify"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_lastmodify($_REQUEST["lastmodify"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_isDelete':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("isDelete"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_isDelete($_REQUEST["isDelete"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_createby':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("createby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_createby($_REQUEST["createby"]);
            controller_main_function::send_result($result);
            break;

        case 'users_get_by_creationdate':
            if (!isset($userAccess["get_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::get_users_by_creationdate($_REQUEST["creationdate"]);
            controller_main_function::send_result($result);
            break;
        //_____________update act

        case 'users_edit':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_id($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_username':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_username($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_password':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_password($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_email':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_email($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_mobile':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_mobile($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_avatar':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_avatar($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_sex':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_sex($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_lastlogin':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_lastlogin($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_failedcount':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_failedcount($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_lastmodify':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_lastmodify($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_isDelete':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_isDelete($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_createby':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_createby($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_by_creationdate':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_by_creationdate($_REQUEST["id"], $_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_id_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_id_by_id($_REQUEST["id"], $_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_username_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "username"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_username_by_id($_REQUEST["id"], $_REQUEST["username"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_password_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "password"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_password_by_id($_REQUEST["id"], $_REQUEST["password"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_email_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "email"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_email_by_id($_REQUEST["id"], $_REQUEST["email"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_mobile_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "mobile"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_mobile_by_id($_REQUEST["id"], $_REQUEST["mobile"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_avatar_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "avatar"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_avatar_by_id($_REQUEST["id"], $_REQUEST["avatar"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_sex_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "sex"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_sex_by_id($_REQUEST["id"], $_REQUEST["sex"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_lastlogin_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "lastlogin"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_lastlogin_by_id($_REQUEST["id"], $_REQUEST["lastlogin"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_failedcount_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "failedcount"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_failedcount_by_id($_REQUEST["id"], $_REQUEST["failedcount"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_lastmodify_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "lastmodify"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_lastmodify_by_id($_REQUEST["id"], $_REQUEST["lastmodify"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_isDelete_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "isDelete"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_isDelete_by_id($_REQUEST["id"], $_REQUEST["isDelete"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_createby_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "createby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_createby_by_id($_REQUEST["id"], $_REQUEST["createby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_edit_creationdate_by_id':
            if (!isset($userAccess["edit_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::edit_users_creationdate_by_id($_REQUEST["id"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_delete':
            if (!isset($userAccess["delete_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::delete_users_by_id($_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'users_set':
            if (!isset($userAccess["set_users"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("username", "password", "email", "mobile", "avatar", "sex", "lastlogin", "failedcount", "lastmodify", "isDelete", "createby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_users::set_users($_REQUEST["username"], $_REQUEST["password"], $_REQUEST["email"], $_REQUEST["mobile"], $_REQUEST["avatar"], $_REQUEST["sex"], $_REQUEST["lastlogin"], $_REQUEST["failedcount"], $_REQUEST["lastmodify"], $_REQUEST["isDelete"], $_REQUEST["createby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

    }
} else {
    //TODO: set page url when not set act
    header('Location: url');
}