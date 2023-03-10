<?php
require_once('./classes/Route.php');
require_once('./classes/Response.php');
require_once('./controllers/Rol.php');
require_once('./controllers/Login.php');
require_once('./controllers/Persons.php');
require_once('./controllers/User.php');
require_once('./controllers/School.php');
require_once('./controllers/Pdfgen.php');
require_once('./controllers/Phpmailer.php');

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
        $data = array (
            "person_name" => $_GET['nombre'],
            "person_surnamep" => $_GET['surnamep'],
            "person_surnamem" => $_GET['surnamem'],
            "school_id" => $_GET['school_id'],
            "rol_id" => $_GET['rol_id']
        );
        if($data['school_id'] == 0) {
                if($data['person_name'] == '' && $data['person_surnamep'] == '' && $data['person_surnamem'] == '') {
                    $res = Rol::getAllUsers();
                }
                else $res = Rol::getAllUsersLike($data);
        }
        else {
            if($data['rol_id'] == 0) {

                if($data['person_name'] == '' && $data['person_surnamep'] == '' && $data['person_surnamem'] == '') {
                    $res = Rol::getAllUsersFromSchool($data);
                }
                else {

                    $res = Rol::getAllUsersFromSchoolLike($data);
                }
            }
            else {
                if($data['person_name'] == '' && $data['person_surnamep'] == '' && $data['person_surnamem'] == '') {
                    $res = Rol::getUsersFromSchool($data);
                }
                else {
                    $res = Rol::getUsersFromSchoolLike($data);
                }
            }
        }
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
        //verificamos si el par??metro se encuentra en la url 
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
        if(isset($_GET['user_id'])) {
            $res = School::getByUserId($_GET);
        }
        else $res = School::getAll();
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

        Person::updatePersonById($data);
        /*
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
        */

        //Response::sendOk($resp);
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
    else if($request_method == 'DELETE') {
        $data = array (
            "user_id" => $_GET['user_id']
        );
        User::deleteById($data);
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

        //?count=total
        $data = array(
            "school_id" => $_GET["school_id"],
            "presea_id" => $_GET["presea_id"],
            "rol_id" => $_GET["rol_id"]
        );

        

        if($data['school_id'] == 0) {
            if($data['rol_id'] == 0) {
                if($data['presea_id'] == 0) {
                    // Cuando se quiere seleccionar todas las escuelas, roles y preseas
                    $res = Person::totalPersons();
                }
                else {
                    // Cuando se quiere seleccionar todas las escuelas y roles de una presea.
                    $res = Person::totalPersonsPresea($data);
                }
            }
            else {
                if($data['presea_id'] == 0) {
                    // Cuando se quiere seleccionar todas las escuelas, y preseas de un rol
                    $res = Person::totalPersonsRol($data);
                }
                else {
                    // Cuando se quiere seleccionar todas las escuelas de un rol y de una presea
                    $res = Person::totalPersonsRolPresea($data);
                }
            }
        }
        else {
            if($data['rol_id'] == 0) {
                if($data['presea_id'] == 0) {
                    $res = Person::totalPersonsSchool($data);
                }
            }
        }

        Response::sendOk($res);

        //Persons::totalPersons();

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
        //verificamos si el par??metro se encuentra en la url 
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

Route::set('generatePDF', function(){

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
       //verificamos si el par??metro se encuentra en la url 
       if(!isset($_GET["person_id"]))
       {
           Response::sendError('Bad request', 400);
           return;
       }

       Pdfgen::genPDF($_GET);
       //Pdfgen::ppdf();
    }

});

Route::set('sendTicket', function(){

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
       //verificamos si el par??metro se encuentra en la url 
       if(!isset($_GET["person_id"]))
       {
           Response::sendError('Bad request', 400);
           return;
       }

       Phpmail::sendTo($_GET);
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
