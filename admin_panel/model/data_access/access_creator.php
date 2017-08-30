<?php
/**
 * Created by PhpStorm.
 * User: peymanvalikhanli
 * Date: 7/25/17 AD
 * Time: 22:23
 */

require_once 'filing.php';
require_once '../database/data.php';
require_once 'file_payload.php';

echo "start<hr><br>";

$tables = data::get_tables();
$views = data::get_views();

for ($index_table = 0; $index_table < count($tables); $index_table++) {

    $table = data::get_structure_table($tables[$index_table]["table_name"]);

    print_r($table);

    $payload = file_payload::access_file($tables[$index_table]["table_name"], $table);
    echo "access :: " . $tables[$index_table]["table_name"];
    echo "<hr><br>";
    $file_name = "access_" . $tables[$index_table]["table_name"] . ".php";
    filing::remove_file($file_name);
    filing::create_file($file_name, $payload);

    //++++++++++++++++++++++++++++++++++++++++++

    data::insertinto("`access`", "`name`", "'get_" . $tables[$index_table]["table_name"] . "'");
    data::insertinto("`access`", "`name`", "'set_" . $tables[$index_table]["table_name"] . "'");
    data::insertinto("`access`", "`name`", "'delete_" . $tables[$index_table]["table_name"] . "'");
    data::insertinto("`access`", "`name`", "'edit_" . $tables[$index_table]["table_name"] . "'");
    data::insertinto("`access`", "`name`", "'print_" . $tables[$index_table]["table_name"] . "'");
    data::insertinto("`access`", "`name`", "'print_form_" . $tables[$index_table]["table_name"] . "'");

    //++++++++++++++++++++++++++++++++++++++++++

    $payload = file_payload::controller_file($tables[$index_table]["table_name"], $table);
    echo "controller ::" . $tables[$index_table]["table_name"];
    echo "<hr><br>";
    $file_name = "controller_" . $tables[$index_table]["table_name"] . ".php";
    filing::remove_file($file_name);
    filing::create_file($file_name, $payload);

    $payload = file_payload::js_connectin_file($tables[$index_table]["table_name"], $table);
    echo "js connection ::" . $tables[$index_table]["table_name"];
    echo "<hr><br>";
    $file_name = "connection_" . $tables[$index_table]["table_name"] . ".js";
    filing::remove_file($file_name);
    filing::create_file($file_name, $payload);


}

if ($views != false) {
    for ($index_table = 0; $index_table < count($views); $index_table++) {

        $table = data::get_structure_table($views[$index_table]["Tables_in_wpavalue_zarin_crystal"]);

        print_r($table);

        $payload = file_payload::access_file_view($views[$index_table]["Tables_in_wpavalue_zarin_crystal"], $table);
        echo "access :: " . $views[$index_table]["Tables_in_wpavalue_zarin_crystal"];
        echo "<hr><br>";
        $file_name = "access_" . $views[$index_table]["Tables_in_wpavalue_zarin_crystal"] . ".php";
        filing::remove_file($file_name);
        filing::create_file($file_name, $payload);

        //++++++++++++++++++++++++++++++++++++++++++

        $payload = file_payload::controller_file_view($views[$index_table]["Tables_in_wpavalue_zarin_crystal"], $table);
        echo "controller ::" . $views[$index_table]["Tables_in_wpavalue_zarin_crystal"];
        echo "<hr><br>";
        $file_name = "controller_" . $views[$index_table]["Tables_in_wpavalue_zarin_crystal"] . ".php";
        filing::remove_file($file_name);
        filing::create_file($file_name, $payload);

        //  $payload = file_payload::js_connectin_file_view($tables[$index_table]["table_name"], $table);
        $payload = file_payload::js_connectin_file_view($views[$index_table]["Tables_in_wpavalue_zarin_crystal"], $table);
        echo "js connection ::" . $views[$index_table]["Tables_in_wpavalue_zarin_crystal"];
        echo "<hr><br>";
        $file_name = "connection_" . $views[$index_table]["Tables_in_wpavalue_zarin_crystal"] . ".js";
        filing::remove_file($file_name);
        filing::create_file($file_name, $payload);


    }
}


//print_r($tables);

