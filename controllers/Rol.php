<?php
require_once('./controllers/Controller.php');
class Rol extends Controller{
    public static function getAll() {
        $resp = parent::query("SELECT * FROM rol");
        return $resp;
    }
}
?>