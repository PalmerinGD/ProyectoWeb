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
}
?>
