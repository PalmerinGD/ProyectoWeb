<?php
class Login extends Controller {
    public static function verifyAuth($data) {
        $encrypted_password = parent::encrypt($data['user_password']);
        $user_name = $data['user_name'];
        $res = parent::select("SELECT * FROM user WHERE user_name='$user_name'");
        $json = array();
        if(count($res[0]) >= 5) {
            $json['user_id'] = $res[0][0];
            $json['user_name'] = $res[0][1];
            $json['user_password'] = $res[0][2];
            $json['user_email'] = $res[0][3];
            $json['user_rol_id'] = $res[0][4];
            $json['user_person_id'] = $res[0][5];
        }
        return $json;
    }
}
?>