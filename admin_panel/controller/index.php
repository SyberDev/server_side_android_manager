<?php


//include "API.php";

require_once '../model/data_access/access.php';
require_once '../model/data_access/lang.php';

session_start();
if (!isset($_REQUEST["act"])) {
    exit;
}
switch ($_REQUEST["act"]) {

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
            send_result(array('Result' => 'index.html', 'act' => 'location'));
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
        $res['act']='get_user_by_username';
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
        if(is_numeric($res)){
            send_msg(lang::$success, lang::$error);
        }else{
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
        if(is_numeric($res)){
            send_msg(lang::$success, lang::$error);
        }else{
            send_msg(lang::$last_registered_data, lang::$error);
        }
        break;
    case 'delete_role':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::delete_role($_REQUEST['id'])){
            send_msg(lang::$success, lang::$message);
        }else{
            send_msg(lang::$invalid_data, lang::$failed);
        }
        break;
    case 'delete_userrole':
        $valid_data = check_validation(array("id"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::delete_user_role($_REQUEST['id'])){
            send_msg(lang::$success, lang::$message);
        }else{
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
        if(access::update_articles($_REQUEST['id'], $_REQUEST['pageid'], $_REQUEST['priority'], $_REQUEST['content'], $_REQUEST['metadata'], $_REQUEST['createby'])){
            send_msg(lang::$success, lang::$message);
        }else{
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
        $arr = array("IMEI" , "number", "text" , "smsId" , "registerDate");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id  = access::get_device_by_IMEI($_REQUEST["IMEI"]);

      //  echo $device_id[0]["id"];
        if(isset($device_id[0]["id"])){
            $result =  access::set_sms($_REQUEST["number"] , $_REQUEST["text"], 0 ,$_REQUEST['smsId'],$_REQUEST['registerDate'], 0 , 1 , $device_id[0]["id"] , 1 ) ;
            if($result > 0 && isset($result)){
                send_msg(lang::$success, lang::$error);
            }else{
                send_msg(lang::$failed , lang::$error);
            }
        }else{
                send_msg(lang::$invalid_device, lang::$error);
        }

        break;
    case 'sendSms':
        $arr = array("deviceId","number","text");

        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id  = $_REQUEST["deviceId"];
      //  echo $device_id[0]["id"];
        if(isset($device_id[0]["id"])){
            $result =  access::set_sms($_REQUEST["number"] , $_REQUEST["text"], 0 ,0,null, 0 , 2 , $device_id , 1 ) ;
            if($result > 0 && isset($result)){
                send_msg(lang::$success, lang::$error);
            }else{
                send_msg(lang::$failed , lang::$error);
            }
        }else{
                send_msg(lang::$invalid_device, lang::$error);
        }

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
        if (access::delete_sms($_REQUEST['id'])){
            send_msg(lang::$success, lang::$message);
        }else{
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
        $valid_data = check_validation(array("id","status"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if (access::update_sms_status($_REQUEST['id'],$_REQUEST['status'])){
            send_msg(lang::$success, lang::$message);
        }else{
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
        $result= access::set_device($_REQUEST['name'], $_REQUEST['IMEI'], 1);
        send_msg(lang::$success, lang::$message);
        break;
    case 'edit_device':
        $arr = array("id","name", "IMEI");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result= access::update_device($_REQUEST['id'],$_REQUEST['name'], $_REQUEST['IMEI'], 1);
        send_msg(lang::$success, lang::$message);
        break;
    case 'delete_device':
        $arr = array("id");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result= access::delete_device($_REQUEST['id']);
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
        $valid_data = check_validation(array("deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_contact_by_deviceId($_REQUEST['deviceId']);
        send_result($result);
        break;

    case 'get_contact_by_number_deviceId':
        $valid_data = check_validation(array("number","deviceId"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $result = access::get_contact_by_number_deviceId($_REQUEST['number'],$_REQUEST['deviceId']);
        send_result($result);
        break;
    case 'set_contact':
        $valid_data = check_validation(array("name","number"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        if(isset($_REQUEST["IMEI"]) && $_REQUEST["IMEI"] != "") {
            $device_id = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        }else if(isset($_REQUEST["deviceId"]) && $_REQUEST["deviceId"]!=""){
            $device_id = $_REQUEST["deviceId"];
        }else{
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }

        if(isset($_REQUEST["contactID"])&& $_REQUEST["contactID"] != ''){
            $contactID_device = $_REQUEST["contactID"];
        }else{
            $contactID_device = 0 ;
        }

        $contactID = access::set_contact($_REQUEST["name"],$device_id,$contactID_device, 1);

        if(strpos($contactID, 'error') == false){
            $number = explode("||",$_REQUEST["number"]);
            for($number_index = 0 ; $number_index < count($number) ; $number_index ++) {
                access::set_phone_number_by_contactId($number[$number_index], $contactID, "1");
            }
        }
        //send_result($result);
        send_msg(lang::$success, lang::$message,"success");
        break;
    case 'is_set_contact':
        $valid_data = check_validation(array("cid","contactid"));
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        access::edit_contact_cid($_REQUEST["cid"],$_REQUEST["contactid"]);
        send_msg(lang::$success, lang::$message,"success");
        break;

    //_____________ get all request for device
    case 'todo':
        $arr = array("IMEI");
        $valid_data = check_validation($arr);
        if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
            send_msg(lang::$invalid_data, lang::$error);
            exit;
        }
        $device_id  = access::get_device_by_IMEI($_REQUEST["IMEI"]);
        if(isset($device_id[0]['id'])) {
            $sms = access::get_sms_requste_by_device($device_id[0]['id']);
            $contact = access::get_contact_request_by_deviceId($device_id[0]['id']);
            $result = array();
            for($index = 0 ; $index < count($sms) ; $index++ ){
                $result[]= $sms[$index];
            }
            for($index = 0 ; $index < count($contact) ; $index++ ){
                $result[]= $contact[$index];
            }
            send_result($result);
            exit;
        }else{
            send_msg(lang::$invalid_device, lang::$error);
            exit;
        }
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

function send_msg($msg, $title,$type = "error", $btn = "")
{
    send_result(array('msg' => $msg, 'title' => $title, 'type'=>$type , 'btn'=>$btn ,  'act' => 'message' ));
}

function send_result($res)
{
    echo json_encode($res);
}