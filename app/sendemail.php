<?php
//header('Access-Control-Allow-Origin: https://localhost');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$email_to = "contacto@gowebchile.cl";
//$cc = "jorgellancafil@gmail.com";
$email_subject = "Contacto GOWEB";
$from = 'contacto@gowebchile.cl'; //email desde es cual se envían los correos, esta cuante debe existir en el servidor

function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
}

$json = file_get_contents('php://input');
$obj = json_decode($json);

$email_message = "\n\n";
$email_message .= "Nombre: ".clean_string($obj->name)."<br>";
$email_message .= " Email: ".clean_string($obj->email)."<br>";
$email_message .= " Telefono: ".clean_string($obj->phone)."<br>";
//$email_message .= "Teléfono: ".clean_string($telephone)."\n";
//if($obj->plan == ""){
  //$obj->plan == "Sin dato";
//}
$email_message .= "Plan: ".clean_string($obj->plan)."<br>";
$email_message .= " Mensaje: ".clean_string($obj->message)."";

$headers = 'From: '.$email_to . "\r\n" .
     'Reply-To: '.$email_to . "\r\n" .
     'X-Mailer: PHP/' . phpversion().'\r\n'.
     'CC: '.$cc.'\r\n'.
     'MIME-Version: 1.0' . "\r\n".
     'Content-Type: text/html';

$email_result =  mail($email_to, $email_subject, $email_message, $headers,"-f$from");

// return all our data to an AJAX call
//echo json_encode('ok');
?>
