<?php

require_once '../model/data_access/access_custome_file_list.php';
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

        case 'custome_file_list_get':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list();
            controller_main_function::send_result($result);
            break;


        case 'custome_file_list_get_by_id':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_id($_REQUEST["id"]);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_deviceid':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("deviceid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_deviceid($_REQUEST["deviceid"]);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_filename':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("filename"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_filename($_REQUEST["filename"]);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_path':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("path"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_path($_REQUEST["path"]);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_time':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("time"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_time($_REQUEST["time"]);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_type':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $device_id = $_SESSION["device"]["id"];
            $result = access_custome_file_list::get_custome_file_list_by_type($_REQUEST["type"],$device_id);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_creationdate':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_creationdate($_REQUEST["creationdate"]);
            controller_main_function::send_result($result);
            break;

        case 'custome_file_list_get_by_createdby':
            if (!isset($userAccess["get_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::get_custome_file_list_by_createdby($_REQUEST["createdby"]);
            controller_main_function::send_result($result);
            break;
        //_____________update act

        case 'custome_file_list_edit':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_id($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_deviceid':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_deviceid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_filename':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_filename($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_path':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_path($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_time':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_time($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_type':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_type($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_creationdate':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_creationdate($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_by_createdby':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "filename", "path", "time", "type", "creationdate", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_by_createdby($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_id_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_id_by_id($_REQUEST["id"], $_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_deviceid_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_deviceid_by_id($_REQUEST["id"], $_REQUEST["deviceid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_filename_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "filename"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_filename_by_id($_REQUEST["id"], $_REQUEST["filename"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_path_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "path"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_path_by_id($_REQUEST["id"], $_REQUEST["path"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_time_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "time"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_time_by_id($_REQUEST["id"], $_REQUEST["time"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_type_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_type_by_id($_REQUEST["id"], $_REQUEST["type"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_creationdate_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_creationdate_by_id($_REQUEST["id"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_edit_createdby_by_id':
            if (!isset($userAccess["edit_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::edit_custome_file_list_createdby_by_id($_REQUEST["id"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_delete':
            if (!isset($userAccess["delete_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::delete_custome_file_list_by_id($_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'custome_file_list_set':
            if (!isset($userAccess["set_custome_file_list"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("deviceid", "filename", "path", "time", "type", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_custome_file_list::set_custome_file_list($_REQUEST["deviceid"], $_REQUEST["filename"], $_REQUEST["path"], $_REQUEST["time"], $_REQUEST["type"], $_REQUEST["creationdate"]);
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