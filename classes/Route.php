<?php
class Route {

    //public static $validRoutes = array();

    public static function set($route, $function, ...$values) {
        // Agrega en la ultima posicion la ruta
        //self::$validRoutes[] = $route;

        // Ejecuta el callback
        if($_GET['url'] == $route) 
            $function->__invoke();
    }
}
?>