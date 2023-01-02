<?php
class Database {
    static $server = 'localhost';
    static $user = 'root';
    static $password = '';
    static $database = 'proyecto_web';
    static $port = '3306';

    public static function select($query) {
        $mysqli = mysqli_connect(self::$server, self::$user, self::$password, self::$database, self::$port);
        if(!$mysqli) {
            die("Connection failed".mysqli_connect_error());
        }
        $result = mysqli_query($mysqli, $query);
        $aux = NULL;
        if($result) {
            if(mysqli_num_rows($result) > 0) {
                $aux = mysqli_fetch_assoc($result);
            }
            else {
                $aux = "0 results";
            }
        }

        mysqli_close($mysqli);
        return $aux;
    }

    public static function insert($query) {
        $mysqli = mysqli_connect(self::$server, self::$user, self::$password, self::$database, self::$port);
        if(!$mysqli) {
            die("Connection failed".mysqli_connect_error());
        }
        $result = mysqli_query($mysqli, $query);
        if($result) {
            return "Registro agregado.";
        }
        else {
            return -1;
        }
        mysqli_close($mysqli);
    }

    public static function encrypt($string) {
        return md5($string);
    }
}
?>