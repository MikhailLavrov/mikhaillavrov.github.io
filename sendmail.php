<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php'
	require 'phpmailer/src/PHPMailer.php'

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	// От кого
	$mail->setForm('misha.yuzh@mail.ru', 'Инкогнито');
	// Кому отправить
	$mail->addAddress('lavrov.fd@gmail.com');
	// Тема письма
	$mail->Subject - 'Тема, это тема письма';

	$body = 'ТЕЛО письма';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}

	$mail->Body = $body;

	// Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка!';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
