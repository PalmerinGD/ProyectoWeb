<?php
require_once('./controllers/Controller.php');
class Rol extends Controller{
    public static function getRange($data){

        $start = $data["start"];
        $limit = $data["limit"];
        $user_rol = $data["rol"];

        //si es admin: nombre completo, email, boleto, escuela, status
        //checar los users que tengan el rol indicado
        $query = "SELECT person.person_name, person.person_surnamep, person.person_surnamem, user.user_email, person_presea.presea_id, user.user_id FROM ((person INNER JOIN user ON user.user_person_id = person.person_id) INNER JOIN person_presea ON person_presea.person_id = person.person_id) WHERE user.user_rol_id = $user_rol LIMIT $start, $limit";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "person_name" => $row[0],
                "person_surnamep" => $row[1],
                "person_surnamem" => $row[2],
                "user_email" => $row[3],
                "presea_id" => $row[4],
                "user_id" => $row[5]
            );
        }
        return $json;
    }

    public static function getAllUsers(){

        $query = "SELECT person.person_name, person.person_surnamep, person.person_surnamem, user.user_email, person_presea.presea_id, user.user_id FROM ((person INNER JOIN user ON user.user_person_id = person.person_id) INNER JOIN person_presea ON person_presea.person_id = person.person_id)";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "person_name" => $row[0],
                "person_surnamep" => $row[1],
                "person_surnamem" => $row[2],
                "user_email" => $row[3],
                "presea_id" => $row[4],
                "user_id" => $row[5]
            );
        }
        return $json;
    }

    public static function getAll() {
        $query = "SELECT * FROM rol";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "rol_id" => $row[0],
                "rol_name" => $row[1]
            );
        }
        return $json;
    }
}
?>
