<?php

require_once '../model/data_access/access_fileType.php';
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

        case 'fileType_get':
            if (!isset($userAccess["get_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $result = access_fileType::get_fileType();
            controller_main_function::send_result($result);
            break;


        case 'fileType_get_by_id':
            if (!isset($userAccess["get_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::get_fileType_by_id($_REQUEST["id"]);
            controller_main_function::send_result($result);
            break;

        case 'fileType_get_by_name':
            if (!isset($userAccess["get_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("name"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::get_fileType_by_name($_REQUEST["name"]);
            controller_main_function::send_result($result);
            break;

        case 'fileType_get_by_creationDate':
            if (!isset($userAccess["get_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::get_fileType_by_creationDate($_REQUEST["creationDate"]);
            controller_main_function::send_result($result);
            break;

        case 'fileType_get_by_createdBy':
            if (!isset($userAccess["get_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::get_fileType_by_createdBy($_REQUEST["createdBy"]);
            controller_main_function::send_result($result);
            break;
        //_____________update act

        case 'fileType_edit':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "creationDate", "createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["creationDate"], $_REQUEST["createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_by_id':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "creationDate", "createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_by_id($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["creationDate"], $_REQUEST["createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_by_name':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "creationDate", "createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_by_name($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["creationDate"], $_REQUEST["createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_by_creationDate':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "creationDate", "createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_by_creationDate($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["creationDate"], $_REQUEST["createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_by_createdBy':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name", "creationDate", "createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_by_createdBy($_REQUEST["id"], $_REQUEST["name"], $_REQUEST["creationDate"], $_REQUEST["createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_id_by_id':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_id_by_id($_REQUEST["id"], $_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_name_by_id':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_name_by_id($_REQUEST["id"], $_REQUEST["name"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_creationDate_by_id':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_creationDate_by_id($_REQUEST["id"], $_REQUEST["creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_edit_createdBy_by_id':
            if (!isset($userAccess["edit_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::edit_fileType_createdBy_by_id($_REQUEST["id"], $_REQUEST["createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_delete':
            if (!isset($userAccess["delete_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::delete_fileType_by_id($_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'fileType_set':
            if (!isset($userAccess["set_fileType"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("name", "creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_fileType::set_fileType($_REQUEST["name"], $_REQUEST["creationDate"]);
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