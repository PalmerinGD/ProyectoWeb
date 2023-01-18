<?php
require_once('./controllers/Controller.php');
class School extends Controller{
  public static function  getAll()
    {
        $query = "SELECT school_id, school_name FROM school";
        $resp = parent::select($query);
        $json = array();

        foreach($resp as $row) {
          $json[] = array(
            "school_id" => (int)$row[0],
            "school_name" => $row[1],
          );
        }
        return $json;
    }

    public static function getByUserId($data) {
      $user_id = $data['user_id'];
      $query = "SELECT school.school_id, school.school_name FROM (((user INNER JOIN person ON user.user_id = person.person_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school ON school.school_id = person_school.school_id) where user.user_id = $user_id";
      $resp = parent::select($query);
      $json = array();
      foreach($resp as $row) {
        $json[] = array(
          "school_id" => (int)$row[0],
          "school_name" => $row[1]
        );
      }
      return $json;
    }
}
?>
