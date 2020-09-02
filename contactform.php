<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

    $from = $_POST['mail'];
    $to = "admin@rohanwhitt.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "Thankyou for getting in contact.";
?>
