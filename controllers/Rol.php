<?php
require_once('./controllers/Controller.php');
class Rol extends Controller{
    public static function getRange($data){

        $start = $data["start"];
        $limit = $data["limit"];
        $user_rol = $data["rol"];

        //si es admin: nombre completo, email, boleto, escuela, status
        //checar los users que tengan el rol indicado
        $query = "SELECT person.person_name, person.person_surnamep, person.person_surnamem, user.user_email, , person_presea.presea_id FROM ((person INNER JOIN user ON user.user_person_id = person.person_id) INNER JOIN person_presea ON person_presea.person_id = person.person_id) WHERE user.user_rol_id = 1 LIMIT $start, $limit";
        //echo $query;
        $resp = parent::select($query);
        return $resp;
    
}
}
?>
