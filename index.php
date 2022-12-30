<?php
// Se define primero la base de datos
require_once('./classes/Database.php');
// Se definen primero las rutas
require_once('./Routes.php');

// Se crea las rutas
Route::run();
?>