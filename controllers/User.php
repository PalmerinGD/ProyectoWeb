<?php
require_once('./controllers/Controller.php');
class User extends Controller{
    public static function isset($json) {
        return isset($json['username']) && isset($json['password']);
    }
}
?>