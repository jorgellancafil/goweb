<?php
//header('Access-Control-Allow-Origin: https://localhost');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$email_to = "contacto@gowebchile.cl";
$cc = "jorgellancafil@gmail.com";
$email_subject = "Nuevo contacto GOWEB";
$from = 'contacto@gowebchile.cl'; //email desde es cual se envían los correos, esta cuante debe existir en el servidor

$email_message ="AngularJs TEST OK!";

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
