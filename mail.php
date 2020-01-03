<?php
$name = $_POST['name'];
$surname = $_POST['surname']
$email = $_POST['email'];
$recipient = "emailaddress@here.com"; //generic mail of the company here
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $mailheader) or die("Error!");
echo "Thank You!";
?>