<?php
require_once dirname(__FILE__) . "\..\classes\Database.php";

class Controller extends Database {
    // Virtual functions
    public static function isset($data) {}
    public static function getAll() {}
    function getPage() {}
    function getId() {}
    function updateById($id) {}
    function removeById($id) {}
}
?>