<?php

require_once '../model/data_access/access_smstype.php';
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

        case 'smstype_get':
            if (!isset($userAccess["get_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $result = access_smstype::get_smstype();
            controller_main_function::send_result($result);
            break;


        case 'smstype_get_by_id':
            if (!isset($userAccess["get_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::get_smstype_by_id($_REQUEST["id"]);
            controller_main_function::send_result($result);
            break;

        case 'smstype_get_by_name':
            if (!isset($userAccess["get_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("name"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::get_smstype_by_name($_REQUEST["name"]);
            controller_main_function::send_result($result);
            break;

        case 'smstype_get_by_createdby':
            if (!isset($userAccess["get_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::get_smstype_by_createdby($_REQUEST["createdby"]);
            controller_main_function::send_result($result);
            break;

        case 'smstype_get_by_creationdate':
            if (!isset($userAccess["get_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::get_smstype_by_creationdate($_REQUEST["creationdate"]);
            controller_main_function::send_result($result);
            break;
        //_____________update act

        case 'smstype_edit':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "createdby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["createdby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_by_id':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "createdby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_by_id($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["createdby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_by_name':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "createdby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_by_name($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["createdby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_by_createdby':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "createdby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_by_createdby($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["createdby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_by_creationdate':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "createdby", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_by_creationdate($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["createdby"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_id_by_id':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_id_by_id($_REQUEST["id"], $_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_name_by_id':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_name_by_id($_REQUEST["id"], $_REQUEST["name"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_createdby_by_id':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_createdby_by_id($_REQUEST["id"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_edit_creationdate_by_id':
            if (!isset($userAccess["edit_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::edit_smstype_creationdate_by_id($_REQUEST["id"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_delete':
            if (!isset($userAccess["delete_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::delete_smstype_by_id($_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'smstype_set':
            if (!isset($userAccess["set_smstype"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("name", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_smstype::set_smstype($_REQUEST["name"], $_REQUEST["createdby"]);
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