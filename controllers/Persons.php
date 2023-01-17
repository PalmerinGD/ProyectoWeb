<?php
require_once('./controllers/Controller.php');
class Person extends Controller{
    public static function isset($json) {
        return isset($json['person_name']) && isset($json['person_surnamep']) && isset($json['person_surnamem']);
    }

    public static function addId_School($data) {
        $person_id = $data['person_id'];
        $school_id = $data['school_id'];
        $query = "INSERT INTO person_school (person_id, school_id) VALUES ($person_id, $school_id)";
        echo $query;
        $resp = parent::insert($query);
    }

    public static function selectId($data) {
        $person_name = $data['person_name'];
        $person_surnamep = $data['person_surnamep'];
        $person_surnamem = $data['person_surnamem'];
        $resp = parent::select("SELECT person_id FROM person WHERE person_name='$person_name' AND person_surnamep='$person_surnamep' AND person_surnamem='$person_surnamem'");
        return $resp;
    }

    public static function add($data) {
        $person_name = $data['person_name'];
        $person_surnamep = $data['person_surnamep'];
        $person_surnamem = $data['person_surnamem'];
        $resp = parent::insert("INSERT INTO person (person_name, person_surnamep, person_surnamem) VALUES ('$person_name', '$person_surnamep', '$person_surnamem')");
        return $resp;
    }
    
    //devuelve el total de personas en todas las escuelas
    public static function totalPersons()
    {
        $query = "SELECT count(*) FROM person INNER JOIN user ON person.person_id = user.user_person_id WHERE user.user_rol_id = 1";
        $resp = parent::select($query);
        return $resp;
    }
    
    //devuelve el total de personas en una escuela en específico
    public static function totalPersonsSchool($data)
    {
        $school = $data["school"];
        $query = "SELECT count(*) FROM((person INNER JOIN user ON person.person_id = user.user_person_id) INNER JOIN person_school ON person_school.person_id = person.person_id ) WHERE user.user_rol_id = 1 && person_school.school_id = $school";
        $resp = parent::select($query);
        return $resp;
    }
    
    public static function searchPerson($data)
    {
        $name = $data["name"];
        $query = "SELECT person.person_name, person.person_surnamep, person.person_surnamem, person_school.school_id, person_presea.presea_id FROM(( `person` INNER JOIN person_school ON person.person_id = person_school.person_id) INNER JOIN person_presea ON person.person_id = person_presea.person_id) WHERE person_name = ".$name."|| person_surnamep = ".$name."|| person_surnampem = ".$name.";";
    }

    public static function getByUserId($data) {
        $user_id = $data['user_id'];
        $query = "SELECT person_name, person_surnamep, person_surnamem,person_id,user_email  FROM (person INNER JOIN user ON person_id = user_person_id) WHERE user_id = $user_id";
        $res = parent::select($query);
        $json = array(
            "person_name" => $res[0][0],
            "person_surnamep" => $res[0][1],
            "person_surnamem" => $res[0][2],
            "person_id" => $res[0][3],
            "user_email" => $res[0][4]
        );
        return $json;
    }

    public static function updatePersonById($data) {
        $person_id = $data['person_id'];
        $person_name = $data['person_name'];
        $person_surnamep = $data['person_surnamep'];
        $person_surnamem = $data['person_surnamem'];
        $person_discapacity = (int)$data['person_discapacity'];
        $person_numero_invitados = (int)$data['person_numero_invitados'];

        $query = "UPDATE person SET person_name = '$person_name', person_surnamep = '$person_surnamep', person_surnamem = '$person_surnamem', person_discapacity = $person_discapacity, person_numero_invitados = $person_numero_invitados WHERE person_id = $person_id";

        echo $query;
        //$res = parent::update($query);
        //echo $res;
    }

}
?>
