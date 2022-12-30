<?php
require_once('./classes/Route.php');
require_once('./classes/Response.php');
require_once('./controllers/Rol.php');
require_once('./controllers/Login.php');

// Establece las rutas que vamos a ocupar.

function verifyAuth() {
    return isset($_COOKIE['user_name']) && isset($_COOKIE['user_password']);
}

Route::set('rol', function() {
    // Verificamos que si esten las cookies.
    echo $_GET['url'];
    if(!verifyAuth()) {
        Response::sendError('Not login', 401);
    }
    else {
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
    }


});

Route::set('rol/user', function(){
    echo 'ok';
});


Route::set('users', function() {
    $request_method = $_SERVER['REQUEST_METHOD'];
    if($request_method == 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        if(User::isset($data['user']) && Person::isset($data['person']) && School::isset($data['school'])) {

        }

    }
});

Route::set('persons', function() {
});

Route::set('schools', function(){
});

Route::set('login', function() {

    $request_method = $_SERVER['REQUEST_METHOD'];

    if($request_method == 'POST') {

        // Obtiene los datos que son mandados en el body.
        $data = json_decode(file_get_contents('php://input'), true);

        if(isset($data['user_name']) && isset($data['user_password'])) {

            // Checamos si el user_name y password son correctas.
            $ans = Login::verifyAuth($data);
            if($ans == -1) {
                // Si no se encontro nada en la base de datos.
                Response::sendError('Username/Password incorrect', 401);
            }
            else {

                // Las cookies tienen una duracion de 1 dia.

                setcookie('user_name', $ans['user_name'],  time() + (86400 * 30));

                setcookie('user_password', $ans['user_password'], + time() + (86400 * 30));

                Response::sendOk($ans);
            }

        }

    }

});
?>