<?php

require_once '../model/data_access/access_get_contacts_todo.php';
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

        case 'get_contacts_todo_get':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo();
            controller_main_function::send_result($result);
            break;


        case 'get_contacts_todo_get_by_id':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_id($_REQUEST["id"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_deviceid':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("deviceid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_deviceid($_REQUEST["deviceid"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_type':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_type($_REQUEST["type"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_reqid':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("reqid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_reqid($_REQUEST["reqid"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_createdby':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_createdby($_REQUEST["createdby"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_creationdate':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_creationdate($_REQUEST["creationdate"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_name':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("name"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_name($_REQUEST["name"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_contactid':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("contactid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_contactid($_REQUEST["contactid"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_cid':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("cid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_cid($_REQUEST["cid"]);
            controller_main_function::send_result($result);
            break;

        case 'get_contacts_todo_get_by_number':
            if (!isset($userAccess["get_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::get_get_contacts_todo_by_number($_REQUEST["number"]);
            controller_main_function::send_result($result);
            break;
        //_____________update act

        case 'get_contacts_todo_edit':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_id($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_deviceid':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_deviceid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_type':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_type($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_reqid':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_reqid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_createdby':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_createdby($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_creationdate':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_creationdate($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_name':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_name($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_contactid':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_contactid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_cid':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_cid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_by_number':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_by_number($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_id_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_id_by_id($_REQUEST["id"], $_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_deviceid_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_deviceid_by_id($_REQUEST["id"], $_REQUEST["deviceid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_type_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_type_by_id($_REQUEST["id"], $_REQUEST["type"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_reqid_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "reqid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_reqid_by_id($_REQUEST["id"], $_REQUEST["reqid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_createdby_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_createdby_by_id($_REQUEST["id"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_creationdate_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_creationdate_by_id($_REQUEST["id"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_name_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "name"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_name_by_id($_REQUEST["id"], $_REQUEST["name"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_contactid_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "contactid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_contactid_by_id($_REQUEST["id"], $_REQUEST["contactid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_cid_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "cid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_cid_by_id($_REQUEST["id"], $_REQUEST["cid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_edit_number_by_id':
            if (!isset($userAccess["edit_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::edit_get_contacts_todo_number_by_id($_REQUEST["id"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_delete':
            if (!isset($userAccess["delete_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::delete_get_contacts_todo_by_id($_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_contacts_todo_set':
            if (!isset($userAccess["set_get_contacts_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("deviceid", "type", "reqid", "createdby", "creationdate", "name", "contactid", "cid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_contacts_todo::set_get_contacts_todo($_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["name"], $_REQUEST["contactid"], $_REQUEST["cid"]);
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