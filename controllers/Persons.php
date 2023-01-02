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
}
?>