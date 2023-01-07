<?php
require_once('./controllers/Controller.php');
class School extends Controller{
  public static function  getAll($data)
    {
        $schools = $data["schools"];

        $query = "SELECT school_name, school_id FROM school";
        $resp = parent::select($query);
        return $resp;
    }
}
?>
