<?php

$errorMSG = "";



// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
if (empty($_POST["object"])) {
    $errorMSG .= "Object is required ";
} else {
    $object= $_POST["object"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "hooluxluxury@gmail.com";
$Subject = $object;

// prepare email body text
$Body = "";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Object: ";
$Body .= $object;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "error";
}

?>