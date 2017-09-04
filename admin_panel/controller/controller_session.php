<?php
/**
 * Created by PhpStorm.
 * User: peymanvalikhanli
 * Date: 9/4/17 AD
 * Time: 11:13
 */

require_once 'controller_main_function.php';

ob_start();
session_cache_expire();
session_start();

define("UI_key",    "'PSCO_UI_cache'");


if (isset($_REQUEST['act']) && $_REQUEST['act'] != '' && $_REQUEST['act'] != null) {

    switch ($_REQUEST['act']) {
        case 'get_all_data':
            $result = $_SESSION[UI_key];
            send_result($result);
            break;

        case 'get_data_by_field':
            $valid_data = check_validation(array("field"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                send_msg(lang::$invalid_data, lang::$error);
                exit;
            }
            $result = $_SESSION[UI_key][$_REQUEST['field']];
            send_result($result);
            break;

        case 'clear':
            $_SESSION[UI_key];
            $result = true;
            send_result($result);
            break;

        case 'set_data':
            $valid_data = check_validation(array("data"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                send_msg(lang::$invalid_data, lang::$error);
                exit;
            }
            $_SESSION[UI_key] = $_REQUEST['data'];
            $result = true;
            send_result($result);
            break;

        case 'set_data_by_field':
            $valid_data = check_validation(array("field","data"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                send_msg(lang::$invalid_data, lang::$error);
                exit;
            }
            $_SESSION[UI_key][$_REQUEST['field']] = $_REQUEST['data'];
            $result = true;
            send_result($result);
            break;

        default:
            $result =  "invalid act!!!";
            send_result($result);
    }
} else {
        //TODO: set page url when not set act
        header('Location: url');
    }