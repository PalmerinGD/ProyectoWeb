<?php
class Response {
    public static function sendError($res, $errorCode) {
        header('Content-type: application/json');
        echo json_encode(array('status'=>'error', 'result' => $res));
        http_response_code($errorCode);
    }

    public static function sendOk($res) {
        header('Content-type: application/json');
        echo json_encode(array('status'=>'ok', 'result' => $res));
        http_response_code(200);
    }

}
?>