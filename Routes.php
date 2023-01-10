<?php
require_once('./classes/Route.php');
require_once('./classes/Response.php');
require_once('./controllers/Rol.php');
require_once('./controllers/Login.php');
require_once('./controllers/Persons.php');
require_once('./controllers/User.php');
require_once('./controllers/School.php');

// Establece las rutas que vamos a ocupar.

function verifyAuth() {
    return isset($_COOKIE['user_name']) && isset($_COOKIE['user_id']);
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
    
    //verifica los datos de las cookies
    if(!verifyAuth())
    {
        Response::sendError('Not login', 401);
        return;
    }

    //saca el metodo de la url
    $request_method = $_SERVER['REQUEST_METHOD'];

    //generar lo cookie del rol (login)

    //verifica si el metodo es "GET"
    if($request_method == 'GET')
    {
        //
        if(!isset($_GET["start"]) || !isset($_GET["limit"]) || !isset($_GET["rol"]))
        {
            Response::sendError('Bad request', 400);
            return;
        }

        $data = array(
            "start"=>$_GET["start"],
            "limit"=>$_GET["limit"],
            "rol"=>$_GET["rol"]
        );

        $res = Rol::getRange($data);
        Response::sendOk($res);
    }


});

//buscar con respecto a escuela
Route::set('schools/users', function(){

     //verifica los datos de las cookies
     if(!verifyAuth())
     {
         Response::sendError('Not login', 401);
         return;
     }
 
     //saca el metodo de la url
     $request_method = $_SERVER['REQUEST_METHOD'];
 
     //generar lo cookie del rol (login)
 
     //verifica si el metodo es "GET"
     if($request_method == 'GET')
     {
        //verificamos si el parámetro se encuentra en la url 
        if(!isset($_GET["school"]))
        {
            Response::sendError('Bad request', 400);
            return;
        }

        $data = array(
            "school"=>$_GET["school"]
        );
     }

});

//regresa todas las escuelas con su id
Route::set('schools', function(){
    //verifica los datos de las cookies
    if(!verifyAuth())
    {
        Response::sendError('Not login', 401);
        return;
    }

    //saca el metodo de la url
    $request_method = $_SERVER['REQUEST_METHOD'];

    //verifica si el metodo es "GET"
    if($request_method == 'GET') {
        $res = School::getAll();
        Response::sendOk($res);
    }
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
    else if($request_method == 'GET') {
        if(!isset($_GET['user_id'])) {
            Response::sendError('Bad request', 400);
            return;
        }
        $data = array (
            "user_id" => $_GET['user_id']
        );
        User::getById($data);
    }
    else if($request_method == 'PUT') {
        $data = json_decode(file_get_contents('php://input'), true);
        Person::updatePersonById($data);
        User::addEmail($data);
    }
});

Route::set('persons', function() {
    
    //verifica los datos de las cookies
    if(!verifyAuth())
    {
        Response::sendError('Not login', 401);
        return;
    }

    //saca el metodo de la url
    $request_method = $_SERVER['REQUEST_METHOD'];

    //verifica si el metodo es "GET"
    if($request_method == 'GET')
    {
        if(isset($_GET['user_id'])) {
            $data = array (
                "user_id" => $_GET['user_id']
            );
            $ans = Person::getByUserId($data);
            Response::sendOk($ans);
        }
        //?name=person_name
        else if(isset($_GET["name"]))
        {
            $data = array(
                "name"=>$_GET["name"],
            );

            Person::searchPerson($data);
        }

        else {
            Response::sendError('Bad request', 400);
            return;
        }

    }
});

//regresa total de personas 
Route::set('total/persons', function(){

    //verifica los datos de las cookies
    if(!verifyAuth())
    {
        Response::sendError('Not login', 401);
        return;
    }

    //saca el metodo de la url
    $request_method = $_SERVER['REQUEST_METHOD'];

    //verifica si el metodo es "GET"
    if($request_method == 'GET')
    {
        //
        if(!isset($_GET["count"]))
        {
            Response::sendError('Bad request', 400);
            return;
        }

        //?count=total
        $data = array(
            "count"=>$_GET["count"]
        );

        $type = $data["count"];

        Persons::totalPersons();

    }
});


//buscar con respecto a escuela
Route::set('schools/users', function(){

     //verifica los datos de las cookies
     if(!verifyAuth())
     {
         Response::sendError('Not login', 401);
         return;
     }
 
     //saca el metodo de la url
     $request_method = $_SERVER['REQUEST_METHOD'];
 
     //verifica si el metodo es "GET"
     if($request_method == 'GET')
     {
        //verificamos si el parámetro se encuentra en la url 
        if(!isset($_GET["schoolPersons"]))
        {
            Response::sendError('Bad request', 400);
            return;
        }

        $data = array(
            "schoolPersons"=>$_GET["schoolPersons"],
        );

        Persons::totalPersonsSchool($data);
     }

});


Route::set('login', function() {

    $request_method = $_SERVER['REQUEST_METHOD'];

    if($request_method == 'POST') {

        // Obtiene los datos que son mandados en el body.
        $data = json_decode(file_get_contents('php://input'), true);

        if(isset($data['user_name']) && isset($data['user_password'])) {
            // Obtenemos el user_name y password.
            $ans = Login::verifyAuth($data);
            if(count($ans) == 0 || (count($ans) >= 5 && $ans['user_password'] != $data['user_password'])) {
                // Si no se encontro nada en la base de datos.
                //echo $ans['user_password'];
                //echo $data['user_password'];
                Response::sendError('Username/Password incorrect', 401);
            }
            else {

                // Las cookies tienen una duracion de 1 dia.
                setcookie('user_name', $ans['user_name'],  time() + (86400 * 30));
                setcookie('user_id', $ans['user_id'], + time() + (86400 * 30));
                setcookie('user_rol', $ans['user_rol_id'], + time() + (86400 * 30));

                Response::sendOk($ans);
            }
        }
    }
});
?>
