<?php
class Login extends Controller {
    public static function verifyAuth($json) {
        $encrypted_password = parent::encrypt($json['user_password']);
        $user_name = $json['user_name'];
        $res = parent::query("SELECT * FROM user WHERE user_name='$user_name'");
        if($res == '0 results') {
            $res = -1;
        }
        else if($res['user_password'] != $json['user_password']) {
            $res = -1;
        }
        return $res;
    }
}
?>