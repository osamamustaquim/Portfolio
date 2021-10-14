<?php
//get data from form  
$name = $_POST['txtName'];
$email= $_POST['txtMail'];
$message= $_POST['message'];
$phone= $_POST['txtMobile'];



$to = "baahirkhan35@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message "\r\n phone=" .$phone;
$headers = "From: ehost771@gmail.com" . "\r\n" .
"BCC: abuosama838@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:succ.html");
?>