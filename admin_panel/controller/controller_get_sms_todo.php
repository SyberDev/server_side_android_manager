<?php

require_once '../model/data_access/access_get_sms_todo.php';
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

        case 'get_sms_todo_get':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo();
            controller_main_function::send_result($result);
            break;


        case 'get_sms_todo_get_by_id':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_id($_REQUEST["id"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_deviceid':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("deviceid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_deviceid($_REQUEST["deviceid"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_type':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_type($_REQUEST["type"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_reqid':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("reqid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_reqid($_REQUEST["reqid"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_createdby':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_createdby($_REQUEST["createdby"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_creationdate':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_creationdate($_REQUEST["creationdate"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_sms_id':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("sms_id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_sms_id($_REQUEST["sms_id"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_number':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_number($_REQUEST["number"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_text':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("text"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_text($_REQUEST["text"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_smsId':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("smsId"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_smsId($_REQUEST["smsId"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_registerDate':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("registerDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_registerDate($_REQUEST["registerDate"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_status':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("status"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_status($_REQUEST["status"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_sms_type':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("sms_type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_sms_type($_REQUEST["sms_type"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_device_id':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("device_id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_device_id($_REQUEST["device_id"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_reqnumber':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("reqnumber"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_reqnumber($_REQUEST["reqnumber"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_sms_createdBy':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("sms_createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_sms_createdBy($_REQUEST["sms_createdBy"]);
            controller_main_function::send_result($result);
            break;

        case 'get_sms_todo_get_by_sms_creationDate':
            if (!isset($userAccess["get_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::get_get_sms_todo_by_sms_creationDate($_REQUEST["sms_creationDate"]);
            controller_main_function::send_result($result);
            break;
        //_____________update act

        case 'get_sms_todo_edit':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_id($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_deviceid':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_deviceid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_type':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_type($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_reqid':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_reqid($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_createdby':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_createdby($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_creationdate':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_creationdate($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_sms_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_sms_id($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_number':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_number($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_text':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_text($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_smsId':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_smsId($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_registerDate':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_registerDate($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_status':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_status($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_sms_type':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_sms_type($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_device_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_device_id($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_reqnumber':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_reqnumber($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_sms_createdBy':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_sms_createdBy($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_by_sms_creationDate':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_by_sms_creationDate($_REQUEST["id"], $_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_id_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_id_by_id($_REQUEST["id"], $_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_deviceid_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "deviceid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_deviceid_by_id($_REQUEST["id"], $_REQUEST["deviceid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_type_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_type_by_id($_REQUEST["id"], $_REQUEST["type"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_reqid_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "reqid"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_reqid_by_id($_REQUEST["id"], $_REQUEST["reqid"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_createdby_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "createdby"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_createdby_by_id($_REQUEST["id"], $_REQUEST["createdby"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_creationdate_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "creationdate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_creationdate_by_id($_REQUEST["id"], $_REQUEST["creationdate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_sms_id_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "sms_id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_sms_id_by_id($_REQUEST["id"], $_REQUEST["sms_id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_number_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "number"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_number_by_id($_REQUEST["id"], $_REQUEST["number"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_text_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "text"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_text_by_id($_REQUEST["id"], $_REQUEST["text"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_smsId_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "smsId"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_smsId_by_id($_REQUEST["id"], $_REQUEST["smsId"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_registerDate_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "registerDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_registerDate_by_id($_REQUEST["id"], $_REQUEST["registerDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_status_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "status"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_status_by_id($_REQUEST["id"], $_REQUEST["status"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_sms_type_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "sms_type"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_sms_type_by_id($_REQUEST["id"], $_REQUEST["sms_type"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_device_id_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "device_id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_device_id_by_id($_REQUEST["id"], $_REQUEST["device_id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_reqnumber_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "reqnumber"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_reqnumber_by_id($_REQUEST["id"], $_REQUEST["reqnumber"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_sms_createdBy_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "sms_createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_sms_createdBy_by_id($_REQUEST["id"], $_REQUEST["sms_createdBy"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_edit_sms_creationDate_by_id':
            if (!isset($userAccess["edit_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id", "sms_creationDate"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::edit_get_sms_todo_sms_creationDate_by_id($_REQUEST["id"], $_REQUEST["sms_creationDate"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_delete':
            if (!isset($userAccess["delete_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::delete_get_sms_todo_by_id($_REQUEST["id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'get_sms_todo_set':
            if (!isset($userAccess["set_get_sms_todo"]) && !$debugMode) {
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("deviceid", "type", "reqid", "createdby", "creationdate", "sms_id", "number", "text", "smsId", "registerDate", "status", "sms_type", "device_id", "reqnumber", "sms_createdBy"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_get_sms_todo::set_get_sms_todo($_REQUEST["deviceid"], $_REQUEST["type"], $_REQUEST["reqid"], $_REQUEST["createdby"], $_REQUEST["creationdate"], $_REQUEST["sms_id"], $_REQUEST["number"], $_REQUEST["text"], $_REQUEST["smsId"], $_REQUEST["registerDate"], $_REQUEST["status"], $_REQUEST["sms_type"], $_REQUEST["device_id"], $_REQUEST["reqnumber"], $_REQUEST["sms_createdBy"]);
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