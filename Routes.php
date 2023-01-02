<?php
require_once('./classes/Route.php');
require_once('./classes/Response.php');
require_once('./controllers/Rol.php');
require_once('./controllers/Login.php');
require_once('./controllers/Persons.php');
require_once('./controllers/User.php');

// Establece las rutas que vamos a ocupar.

function verifyAuth() {
    return isset($_COOKIE['user_name']) && isset($_COOKIE['user_password']);
}

Route::set('rol', function() {
    // Verificamos que si esten las cookies.
    if(!verifyAuth()) {
        Response::sendError('Not login', 401);
        return;
    }
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

Route::set('rol/user', function(){
    echo 'ok';
});


Route::set('user', function() {
    if(!verifyAuth()) {
        Response::sendError('Not login', 401);
        return;
    }
    $request_method = $_SERVER['REQUEST_METHOD'];
    if($request_method == 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        // Para poder registrar un usuario se necesita
        // username, password, email, Nombre, Apellido paterno, Apellido materno,
        // Escuela, rol

        if(!isset($data['user_name']) || !isset($data['user_password']) || !isset($data['user_email']) ||
           !isset($data['person_name']) || !isset($data['person_surnamep']) || !isset($data['person_surnamem']) || !isset($data['school_id']) || !isset($data['rol_id'])) {
                Response::sendError('Bad request', 400);
                return;
           }
        
        $resp = Person::add($data);
        if($resp == -1) {
            // Si hubo un error en agregar a la persona
            Response::sendError('Method not allowed', 405);
            return;
        }

        // Seleccionamos el id de la persona que apenas agregamos.
        $last_id = Person::selectId($data);

        if(!isset($last_id['person_id'])) {
            Response::sendError('Method not allowed', 405);
            return;
        }

        $data['person_id'] = (int) $last_id['person_id'];
        User::add($data);
        Person::addId_School($data);

        Response::sendOk($resp);
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