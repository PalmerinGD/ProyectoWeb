<?php
require('./pdf/fpdf.php');
require_once('./controllers/Controller.php');


class PDF extends FPDF
{
// Page header
function Header()
{
    $this->Image('./front-end/public/meritopol.jpg',0,5,210);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Move to the right
    $this->Cell(80);

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
}
}

class Pdfgen extends Controller
{

    public static function genPDF($data)
    {
        $person_id = $data['person_id'];
        $query = "SELECT person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, person.person_acompanante FROM ((((person INNER JOIN person_presea ON person_presea.person_id = person.person_id)
INNER JOIN presea on person_presea.presea_id = presea.presea_id) INNER JOIN person_school ON person_school.person_id = person.person_id) INNER JOIN school on school.school_id = person_school.school_id) where person.person_id=$person_id";
        $resp = parent::select($query);
        
        $json = array();

        foreach($resp as $row) {
            $json[] = array(
                "person_id" => $row[0],
                "person_name" => $row[1],
                "person_surnamep" => $row[2],
                "person_surnamem" => $row[3],
                "person_disc" => $row[4],
                "presea_name" => $row[5],
                "school_name" => $row[6],
                "acompan" => $row[7]

            );
        }

        $person_id = $json[0]['person_id'];
        $person_name = $json[0]['person_name'];
        $person_name = utf8_decode($person_name);
        $person_surnamep = $json[0]['person_surnamep'];
        $person_surnamep = utf8_decode($person_surnamep);
        $person_surnamem = $json[0]['person_surnamem'];
        $person_surnamem = utf8_decode($person_surnamem);
        $person_school = $json[0]['school_name'];
        $presea_name = $json[0]['presea_name'];
        $person_disc = $json[0]['person_disc'];
        $person_acom = $json[0]['acompan'];
        $d = utf8_decode('Dirección: ');

        if($person_disc == 1){
            $disc = "SI";
        }else{
            $disc = "NO";
        }

        $fecha = "18 de enero del 2023";
        $hora = "13:30h";
        $dir = "Auditorio A Alejo Peralta del Centro Cultural";
        $dir1 = "Jaime Torres Boded. Av Luis Enrique Erro s/n,";
        $dir2 = "Unidad Profesional Zacatenco. ";

        $pdf = new PDF();
        $pdf->SetFont('Arial','B',70);
        $pdf->AddPage();
        $pdf->Image('./front-end/public/galardonado.jpg',55,40,100);
        $pdf->Ln(50);
        $pdf->Cell(0,10, "ID: ". $person_id, 0,1, "C");
        $pdf->Ln(20);
        $pdf->SetFont('Arial','B',20);
        $pdf->MultiCell(0,15, "Nombre: ".$person_name." ".$person_surnamep." ".$person_surnamem, 0, 1);
        $pdf->Ln(5);
        $pdf->Cell(0,1, "Presea: ". $presea_name, 0, 1);
        $pdf->Ln(10);
        $pdf->Cell(0,1, "Fecha: ". $fecha, 0, 1);
        $pdf->Ln(10);
        $pdf->Cell(0,2, "Hora: ". $hora, 0, 1);
        $pdf->Ln(5);
        $pdf->MultiCell(0,10, "Discapacidad: ".$disc);
        $pdf->Ln(1);
        $pdf->MultiCell(0,10, $d.$dir. " ". $dir1. " ". $dir2);



        if($person_acom == 1)
        {
            $pdf->AddPage();
            $pdf->SetFont('Arial','B',70);
            $pdf->Image('./front-end/public/acompañante.jpg',55,40,100);
            $pdf->Ln(50);
            $pdf->Cell(0,10, "ID: ". $person_id, 0,1, "C");
            $pdf->Ln(20);
            $pdf->SetFont('Arial','B',20);
            $pdf->MultiCell(0,15, "Nombre: ".$person_name." ".$person_surnamep." ".$person_surnamem, 0, 1);
            $pdf->Ln(5);
            $pdf->Cell(0,1, "Presea: ". $presea_name, 0, 1);
            $pdf->Ln(10);
            $pdf->Cell(0,1, "Fecha: ". $fecha, 0, 1);
            $pdf->Ln(10);
            $pdf->Cell(0,2, "Hora: ". $hora, 0, 1);
            $pdf->Ln(5);
            $pdf->MultiCell(0,10, "Discapacidad: ".$disc);
            $pdf->Ln(1);  
            $pdf->MultiCell(0,10, "Dirección: ".$dir. " ". $dir1. " ". $dir2);  
        }
        
        $pdf->Output('D', 'boleto.pdf');

    }  
    
    public static function sendPDF($data)
    {
        $person_id = $data['person_id'];
        $query = "SELECT person.person_id,person.person_name, person.person_surnamep, person.person_surnamem, person.person_discapacity,  presea.presea_name, school.school_name, person.person_acompanante FROM ((((person INNER JOIN person_presea ON person_presea.person_id = person.person_id)
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
                "acompan" => $row[7]

            );
        }

        $person_id = $json[0]['person_id'];
        $person_name = $json[0]['person_name'];
        $person_name = utf8_decode($person_name);
        $person_surnamep = $json[0]['person_surnamep'];
        $person_surnamep = utf8_decode($person_surnamep);
        $person_surnamem = $json[0]['person_surnamem'];
        $person_surnamem = utf8_decode($person_surnamem);
        $person_school = $json[0]['school_name'];
        $presea_name = $json[0]['presea_name'];
        $person_disc = $json[0]['person_disc'];
        $person_acom = $json[0]['acompan'];
        $d = utf8_decode('Dirección: ');

        if($person_disc == 1){
            $disc = "SI";
        }else{
            $disc = "NO";
        }

        $fecha = "18 de enero del 2023";
        $hora = "13:30h";
        $dir = "Auditorio A Alejo Peralta del Centro Cultural";
        $dir1 = "Jaime Torres Boded. Av Luis Enrique Erro s/n,";
        $dir2 = "Unidad Profesional Zacatenco. ";

        $pdf = new PDF();
        $pdf->SetFont('Arial','B',70);
        $pdf->AddPage();
        $pdf->Image('./front-end/public/galardonado.jpg',55,40,100);
        $pdf->Ln(50);
        $pdf->Cell(0,10, "ID: ". $person_id, 0,1, "C");
        $pdf->Ln(20);
        $pdf->SetFont('Arial','B',20);
        $pdf->MultiCell(0,15, "Nombre: ".$person_name." ".$person_surnamep." ".$person_surnamem, 0, 1);
        $pdf->Ln(5);
        $pdf->Cell(0,1, "Presea: ". $presea_name, 0, 1);
        $pdf->Ln(10);
        $pdf->Cell(0,1, "Fecha: ". $fecha, 0, 1);
        $pdf->Ln(10);
        $pdf->Cell(0,2, "Hora: ". $hora, 0, 1);
        $pdf->Ln(5);
        $pdf->MultiCell(0,10, "Discapacidad: ".$disc);
        $pdf->Ln(1);
        $pdf->MultiCell(0,10, $d.$dir. " ". $dir1. " ". $dir2);



        if($person_acom == 0)
        {
            $pdf->AddPage();
            $pdf->SetFont('Arial','B',70);
            $pdf->Image('./front-end/public/acompañante.jpg',55,40,100);
            $pdf->Ln(50);
            $pdf->Cell(0,10, "ID: ". $person_id, 0,1, "C");
            $pdf->Ln(20);
            $pdf->SetFont('Arial','B',20);
            $pdf->MultiCell(0,15, "Nombre: ".$person_name." ".$person_surnamep." ".$person_surnamem, 0, 1);
            $pdf->Ln(5);
            $pdf->Cell(0,1, "Presea: ". $presea_name, 0, 1);
            $pdf->Ln(10);
            $pdf->Cell(0,1, "Fecha: ". $fecha, 0, 1);
            $pdf->Ln(10);
            $pdf->Cell(0,2, "Hora: ". $hora, 0, 1);
            $pdf->Ln(5);
            $pdf->MultiCell(0,10, "Discapacidad: ".$disc);
            $pdf->Ln(1);    
            $pdf->MultiCell(0,10, "Dirección: ".$dir. " ". $dir1. " ". $dir2);
        }
        
        $pdf->Output('./tempDocs/doc'.$person_id.'.pdf', 'F');
    }

}


?>