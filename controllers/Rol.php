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

        //$query = "SELECT person.person_name, person.person_surnamep, person.person_surnamem, user.user_email, person_presea.presea_id, user.user_id FROM ((person INNER JOIN user ON user.user_person_id = person.person_id) INNER JOIN person_presea ON person_presea.person_id = person.person_id)";
        $query = "SELECT user.user_id, user.user_email, person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, user.user_rol_id FROM (((((person INNER JOIN user ON user_person_id = person_id)INNER JOIN person_presea ON person_presea.person_id = person.person_id)
INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id)";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "user_id" => $row[0],
                "user_email" => $row[1],
                "person_id" => $row[2],
                "person_name" => $row[3],
                "person_surnamep" => $row[4],
                "person_surnamem" => $row[5],
                "person_discapacity" => $row[6],
                "presea_name" => $row[7],
                "school_name" => $row[8],
                "user_rol_id" => $row[9]
            );
        }
        return $json;
    }

    public static function getAllUsersLike($data){

        $person_name = $data['person_name'];
        $person_surnamep = $data['person_surnamep'];
        $person_surnamem = $data['person_surnamem'];
        $query = "SELECT user.user_id, user.user_email, person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, user.user_rol_id FROM (((((person INNER JOIN user ON user_person_id = person_id)INNER JOIN person_presea ON person_presea.person_id = person.person_id)
INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) WHERE person.person_name LIKE '$person_name%' AND person.person_surnamep LIKE '$person_surnamep%' AND person.person_surnamem LIKE '$person_surnamem%'";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "user_id" => $row[0],
                "user_email" => $row[1],
                "person_id" => $row[2],
                "person_name" => $row[3],
                "person_surnamep" => $row[4],
                "person_surnamem" => $row[5],
                "person_discapacity" => $row[6],
                "presea_name" => $row[7],
                "school_name" => $row[8],
                "user_rol_id" => $row[9]
            );
        }
        return $json;
    }
    public static function getAllUsersFromSchool($data) {
        $school_id = $data['school_id'];
        $query = "SELECT user.user_id, user.user_email, person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, user.user_rol_id FROM (((((person INNER JOIN user ON user_person_id = person_id)INNER JOIN person_presea ON person_presea.person_id = person.person_id) INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) WHERE school.school_id = $school_id";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "user_id" => $row[0],
                "user_email" => $row[1],
                "person_id" => $row[2],
                "person_name" => $row[3],
                "person_surnamep" => $row[4],
                "person_surnamem" => $row[5],
                "person_discapacity" => $row[6],
                "presea_name" => $row[7],
                "school_name" => $row[8],
                "user_rol_id" => $row[9]
            );
        }
        return $json;
    }

    public static function getUsersFromSchool($data) {
        $school_id = $data['school_id'];
        $rol_id = $data['rol_id'];
        $query = "SELECT user.user_id, user.user_email, person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, user.user_rol_id FROM (((((person INNER JOIN user ON user_person_id = person_id)INNER JOIN person_presea ON person_presea.person_id = person.person_id) INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) WHERE school.school_id = $school_id AND user.rol_id = $rol_id";
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "user_id" => $row[0],
                "user_email" => $row[1],
                "person_id" => $row[2],
                "person_name" => $row[3],
                "person_surnamep" => $row[4],
                "person_surnamem" => $row[5],
                "person_discapacity" => $row[6],
                "presea_name" => $row[7],
                "school_name" => $row[8],
                "user_rol_id" => $row[9]
            );
        }
        return $json;
    }

    public static function getAllUsersFromSchoolLike($data) {
        $school_id = $data['school_id'];
        $person_name = $data['person_name'];
        $person_surnamep = $data['person_surnamep'];
        $person_surnamem = $data['person_surnamem'];
        $query = "SELECT user.user_id, user.user_email, person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, user.user_rol_id FROM (((((person INNER JOIN user ON user_person_id = person_id)INNER JOIN person_presea ON person_presea.person_id = person.person_id) INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) WHERE school.school_id = $school_id AND person.person_name LIKE '$person_name%' AND person.person_surnamep LIKE '$person_surnamep%' AND person.person_surnamem LIKE '$person_surnamem%'";
        //echo $query;
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "user_id" => $row[0],
                "user_email" => $row[1],
                "person_id" => $row[2],
                "person_name" => $row[3],
                "person_surnamep" => $row[4],
                "person_surnamem" => $row[5],
                "person_discapacity" => $row[6],
                "presea_name" => $row[7],
                "school_name" => $row[8],
                "user_rol_id" => $row[9]
            );
        }
        return $json;
    }

    public static function getUsersFromSchoolLike($data) {
        $school_id = $data['school_id'];
        $rol_id = $data['rol_id'];
        $person_name = $data['person_name'];
        $person_surnamep = $data['person_surnamep'];
        $person_surnamem = $data['person_surnamem'];
        $query = "SELECT user.user_id, user.user_email, person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, user.user_rol_id FROM (((((person INNER JOIN user ON user_person_id = person_id)INNER JOIN person_presea ON person_presea.person_id = person.person_id) INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) WHERE school.school_id = $school_id AND user.rol_id = $rol_id AND person.person_name LIKE '$person_name%' AND person.person_surnamep LIKE '$person_surnamep%' AND person.person_surnamem LIKE '$person_surnamem%'";
        //echo $query;
        $resp = parent::select($query);
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "user_id" => $row[0],
                "user_email" => $row[1],
                "person_id" => $row[2],
                "person_name" => $row[3],
                "person_surnamep" => $row[4],
                "person_surnamem" => $row[5],
                "person_discapacity" => $row[6],
                "presea_name" => $row[7],
                "school_name" => $row[8],
                "user_rol_id" => $row[9]
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
