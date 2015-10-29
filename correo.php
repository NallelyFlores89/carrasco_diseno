<?php
require 'PHPMailer-master/PHPMailerAutoload.php';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$mensaje = $_POST['mensaje'];

$mensajeTexto = "<b>".strtoupper($nombre)."</b> le ha enviado un mensaje:<br><br><br>".
"<b>email:</b> ".$email."<br><br>".
"<b>telefono:</b> ".$tel."<br><br>".
"<b>mensaje:</b> ". $mensaje."<br><br>";

//Create a new PHPMailer instance
$mail = new PHPMailer();
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom($email, $nombre);
//Set an alternative reply-to address
$mail->addReplyTo($mail, $nombre);
//Set who the message is to be sent to
$mail->addAddress('cristian-carrasco@hotmail.com', 'CSD Carrasco Diseño');
//Set the subject line
$mail->Subject = 'Contacto Pagina CSD';

$mail->msgHTML($mensajeTexto);


//send the message, check for errors
if (!$mail->send()) {
    echo "Mensaje no pudo ser enviado" . $mail->ErrorInfo;
} else {
    echo "<script>
    	alert('Mensaje enviado!');
    	window.location.assign('http://csdcarrasco.com.mx/')
    </script>";
}
?>
<?php
require 'PHPMailer-master/PHPMailerAutoload.php';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tel = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$mensajeTexto = "<b>".strtoupper($nombre)."</b> le ha enviado un mensaje:<br><br><br>".
"<b>email:</b> ".$email."<br><br>".
"<b>telefono:</b> ".$tel."<br><br>".
"<b>mensaje:</b> ". $mensaje."<br><br>";

//Create a new PHPMailer instance
$mail = new PHPMailer();
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom($email, $nombre);
//Set an alternative reply-to address
$mail->addReplyTo($mail, $nombre);
//Set who the message is to be sent to
$mail->addAddress('TEXTILESTREJOSADECV@PRODIGY.NET.MX', 'Textiles Trejo');
//Set the subject line
$mail->Subject = 'Contacto Pagina Web Textiles Trejo';

$mail->msgHTML($mensajeTexto);


//send the message, check for errors
if (!$mail->send()) {
    echo "Mensaje no pudo ser enviado" . $mail->ErrorInfo;
} else {
    echo "<script>
    	alert('Mensaje enviado!');
    	window.location.assign('http://textilestrejo.com.mx/')
    </script>";
}
?>
