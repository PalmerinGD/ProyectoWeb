<?php
require_once('./controllers/Controller.php');
class User extends Controller{
    public static function isset($json) {
        return isset($json['user_name']) && isset($json['user_password']);
    }

    public static function getById($data) {
        $user_id = $data['user_id'];
        $query = "SELECT * FROM user WHERE user_id = $user_id";
        $resp = parent::select($query);
    }

    public static function add($data) {
        $user_name = $data['user_name'];
        $user_password = $data['user_password'];
        $user_email = $data['user_email'];
        $person_id = $data['person_id'];
        $rol_id = $data['rol_id'];
        $query = "INSERT INTO user (user_name, user_password, user_email, user_rol_id, user_person_id) VALUES ('$user_name', '$user_password', '$user_email', $rol_id, $person_id)";
        $resp = parent::insert($query);
    }

    public static function addEmail($data) {
        $user_id = $data['user_id'];
        $user_email = $data['user_email'];
        $query = "UPDATE user SET user_email = '$user_email' WHERE user_id = $user_id";
        $resp = parent::update($query);
        echo $resp;
    }

    public static function deleteById($data) {
        $user_id = $data['user_id'];
        $query = "";
    }
}
?>