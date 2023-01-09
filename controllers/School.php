<?php
require_once('./controllers/Controller.php');
class School extends Controller{
  public static function  getAll()
    {
        $query = "SELECT school_id, school_name FROM school";
        $resp = parent::select($query);
        return $resp;
    }
}
?>
