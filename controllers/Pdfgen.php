<?php
require('./pdf/fpdf.php');
require_once('./controllers/Controller.php');

class PDF extends FPDF
{
// Page header
function Header()
{
    // Logo
    //$this->Image('./front-end/public/IPN-logo.png',10,6,20);
    $this->Image('./front-end/public/meritopol.jpg',0,5,210);
    

    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Move to the right
    $this->Cell(80);
    // Title
    //$this->Cell(30,10,'Title',1,0,'C');
    // Line break
    $this->Ln(20);
}

// Page footer
function Footer()
{
    $this->Image('./front-end/public/footer.jpg',15,265,180);
        // Position at 1.5 cm from bottom
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Page number
   // $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
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
        //echo $query;
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

        $person_id = $json[0]['person_id'];
        $person_name = $json[0]['person_name'];
        $person_surnamep = $json[0]['person_surnamep'];
        $person_surnamem = $json[0]['person_surnamem'];
        $school_name = $json[0]['school_name'];
        $presea_name = $json[0]['presea_name'];
        $person_disc = $json[0]['person_disc'];
        $fecha = "18 de enero del 2023";
        $hora = "13:30h";
        $dir = "mi casa";

        $pdf = new PDF();
        $pdf->SetFont('Arial','B',20);
        $pdf->AddPage();
        //$pdf->Cell(40,60, "Nombre:".$person_name." ".$person_surnamep." ".$person_surnamem);
        $pdf->Image('./front-end/public/galardonado.jpg',55,40,100);
        $pdf->Cell(40,100, "Nombre: ".$person_name." ".$person_surnamep." ".$person_surnamem. "");
        $pdf->Ln(1);
        $pdf->Cell(0,120, "ID: ". $person_id);
        $pdf->Ln(1);
        $pdf->Cell(0,140, "Escuela: ". $school_name);
        $pdf->Ln(1);
        $pdf->Cell(0,160, "Presea: ". $presea_name);
        $pdf->Ln(1);
        $pdf->Cell(0,180, "Fecha: ". $fecha);
        $pdf->Ln(1);
        $pdf->Cell(0,200, "Hora: ". $hora);
        $pdf->Ln(1);
        $pdf->Cell(0,220, "Direccion: ". $dir);
        //$save = $pdf->Output();
        $pdf->Output('D', 'boleto.pdf');
        //insertamos el doc generado en la database (en revision)
        //$insertQuery = "INSERT INTO person (person_ticket) VALUES ('$save') WHERE person_id = $person_id";
        //echo $insertQuery;
        //parent::insert($insertQuery);
        

    }   

}


?>
