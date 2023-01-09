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
        $aux = array();
        if($result) {
            // Obtiene todos los registros que se obtienen con la query
            while($row = mysqli_fetch_row($result)) {
                $aux[] = $row;
            }
            mysqli_free_result($result);
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