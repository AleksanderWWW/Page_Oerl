<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$dropdown = $POST['dropdown'];
$message = $_POST['message'];
<<<<<<< HEAD
$formcontent="From: $name, $surname \n Message: $message";
$recipient = "emailaddress@here.com"; //generic address needed
$subject = "Contact Form $dropdown";
=======
$formcontent="From: $name, $surname, $dropdown \n Message: $message";
$recipient = "emailaddress@here.com"; //generic address needed
$subject = "Contact Form";
>>>>>>> 8be46c075ff7da65900504b9ea2528bd8f87672a
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>