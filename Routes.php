<?php
require_once('./classes/Route.php');
require_once('./classes/Response.php');
require_once('./controllers/Rol.php');

// Establece las rutas que vamos a ocupar.

Route::set('rol', function() {
    // Obtenemos el http method de la request.
    $request_method = $_SERVER['REQUEST_METHOD'];

    if($request_method == 'GET') {
        $res = Rol::getAll();
        Response::sendOk($res);

    }

    else if($request_method == 'POST') {

    }
    else if($request_method == 'DELETE') {

    }
    else if($request_method == 'PUT') {

    }


});


Route::set('users', function() {
});

Route::set('persons', function() {
});

Route::set('schools', function(){
});

?>