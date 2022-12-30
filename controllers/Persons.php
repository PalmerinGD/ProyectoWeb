<?php
require_once('./controllers/Controller.php');
class Persons extends Controller{
    public static function isset($json) {
        return isset($json['person_name']) && isset($json['person_surnamep']) && isset($json['person_surnamem']);
    }
}
?>