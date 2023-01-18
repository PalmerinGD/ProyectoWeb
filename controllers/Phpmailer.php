<?php

require_once('./controllers/Controller.php');
require_once('./controllers/Pdfgen.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmail/PHPMailer.php';
require 'phpmail/SMTP.php';
require 'phpmail/Exception.php';

class Phpmail extends Controller
{

    public static function sendTo($data)
    {
        $person_id = $data['person_id'];
        $query = "SELECT person.person_id,person.person_name, user.user_email FROM person INNER JOIN user ON person.person_id = user.user_person_id where person.person_id=$person_id";
        $resp = parent::select($query);
        
        $json = array();
        foreach($resp as $row) {
            $json[] = array(
                "person_id" => $row[0],
                "person_name" => $row[1],
                "mail" => $row[2]
            );
        }

        $person_id = $json[0]['person_id'];
        $mailtoName = $json[0]['person_name'];
        $mailto = $json[0]['mail'];
        echo 'person_id';

        Pdfgen::sendPdf($data);


        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
            $mail->isSMTP();                                         
            $mail->Host       = 'smtp.office365.com';                     
            $mail->SMTPAuth   = true;                                  
            $mail->Username   = 'pruebaweb69@outlook.com';                   
            $mail->Password   = 'Gragragra11.';                           
            $mail->SMTPSecure = 'STARTTLS';  
            $mail->Port       = 587;                                 

            //Recipients
            $mailfrom = 'pruebaweb69@outlook.com';
            $mail->setFrom($mailfrom, 'IPN');
            $mail->addAddress($mailto, $mailtoName);    

            //Attachments
            $mail->addAttachment('./tempDocs/doc'.$person_id.'.pdf', $mailtoName."Boleto.pdf");   

            //Content
            $mail->isHTML(true);                                  
            $mail->Subject = 'Boleto para asistir al evento';
            $mail->Body    = 'Se le adjunta el boleto para asistir a la premiación <b>¡Felicidades!</b>';

            $mail->send();
            echo 'El boleto ha sido enviado a su correo registrado.';
            unlink('./tempDocs/doc'.$person_id.'.pdf');
        } catch (Exception $e) {
            unlink('./tempDocs/doc'.$person_id.'.pdf');
            echo "Mensaje no enviado. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
?>