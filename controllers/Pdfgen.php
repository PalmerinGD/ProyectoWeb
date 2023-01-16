<?php
require('./pdf/fpdf.php');
require_once('./controllers/Controller.php');

class PDF extends FPDF
{
// Page header
function Header()
{
    // Logo
    $this->Image('./front-end/public/IPN-logo.png',10,6,20);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Move to the right
    $this->Cell(80);
    // Title
    $this->Cell(30,10,'Title',1,0,'C');
    // Line break
    $this->Ln(20);
}

// Page footer
function Footer()
{
    // Position at 1.5 cm from bottom
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Page number
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

class Pdfgen extends Controller
{

    public static function genPDF($data)
    {
        $person_id = $data['person_id'];
        //$query = "SELECT person.person_name, person.person_surnamep, person.person_surnamem, presea.presea_name, school.school_name, person.person_discapatacy FROM ((((person INNER JOIN person_presea ON person_presea.person_id = person.person_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on person.person_id = person_school.person_id) INNER JOIN presea on presea.presea_id = person_presea.presea_id )WHERE person.person_id = $person_id";
        $query = "SELECT person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name FROM ((((person INNER JOIN person_presea ON person_presea.person_id = person.person_id)
INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) where person.person_id=$person_id";
        $resp = parent::select($query);
        
        $json = array();
        //print_r($resp);
        foreach($resp as $row) {
            $json[] = array(
                "person_id" => $row[0],
                "person_name" => $row[1],
                "person_surnamep" => $row[2],
                "person_surnamem" => $row[3],
                "person_disc" => $row[4],
                "presea_name" => $row[5],
                "school_name" => $row[6],
            );
        }

        $person_name = $json[0]['person_name'];
        $person_surnamep = $json[0]['person_surnamep'];
        $person_surnamem = $json[0]['person_surnamem'];
        $person_school = $json[0]['school_name'];
        $person_presea = $json[0]['presea_name'];
        $person_disc = $json[0]['person_disc'];

        $pdf = new PDF();
        $pdf->AddPage();
        $pdf->Cell(40,60, "Nombre:".$person_name." ".$person_surnamep." ".$person_surnamem);
        //$save = $pdf->Output();
        $save = $pdf->Output('archivo.pdf', 'I');
        //insertamos el doc generado en la database (en revision)
        $insertQuery = "INSERT INTO person (person_ticket) VALUES ('$save') WHERE person_id = $person_id";
        //echo $insertQuery;
        parent::insert($insertQuery);
        

        


    }   

}


?>