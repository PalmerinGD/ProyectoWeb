<?php
class Database {
    static $server = 'localhost';
    static $user = 'root';
    static $password = '';
    static $database = 'proyecto_web';
    static $port = '3306';

    public static function query($query) {
        $mysqli = mysqli_connect(self::$server, self::$user, self::$password, self::$database, self::$port);
        if(!$mysqli) {
            die("Connection failed".mysqli_connect_error());
        }
        $result = mysqli_query($mysqli, $query);
        if(mysqli_num_rows($result) > 0) {
            $aux = mysqli_fetch_assoc($result);
            return $aux;
        }
        else {
            return "0 results";
        }
        mysqli_close($mysqli);
    }

    public static function encriptar($string) {
        return md5($string);
    }
}
?>