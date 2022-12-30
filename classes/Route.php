<?php
class Route {

    public static $validRoutes = array();

    // Metodo para agregar las rutas validas.
    public static function set($route, $function) {
        // Agrega en la ultima posicion la ruta.
        self::$validRoutes[] = array(
            // Ruta que le corresponde.
            'expression' => $route,
            // Funcion a ejecutar.
            'function' => $function
        );
    }

    // Metodo para verificar la ruta que se esta pidiendo.
    public static function run() {
        // Obtine la ruta.
        $parse_url = parse_url($_GET['url']);
        $path = $parse_url['path'];

        // print_r($parse_url);

        $flag = false;

        foreach(self::$validRoutes as $route) {
            if($route['expression'] == $path) {
                $route['function']();
                $flag = true;
            }
        }
        if(!$flag) {
            // Si no se encontro ninguna ruta.

            Response::sendError('Route not found', 405);
        }
    }
}
?>