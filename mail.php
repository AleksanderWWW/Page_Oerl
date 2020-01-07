<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$dropdown = $POST['dropdown'];
$message = $_POST['message'];
$formcontent="From: $name, $surname \n Message: $message";
$recipient = "emailaddress@here.com"; //generic address needed
$subject = "Contact Form $dropdown";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>