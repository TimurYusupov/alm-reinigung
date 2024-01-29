<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Wird überprüft, ob alle erforderlichen Felder ausgefüllt sind
    if (isset($_POST["clientName"]) && isset($_POST["clientEmail"])  && isset($_POST["clientMessage"]) && !empty($_POST["subject"])) {
        $clientName = $_POST["clientName"];
        $clientEmail = $_POST["clientEmail"];
        $subject = $_POST["subject"];
        $clientMessage = $_POST["clientMessage"];

        $headers = "From: $clientEmail\r\n";
        $headers .= "Reply-To: $clientEmail\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

        $to = "gmbh@alm-reinigung.com";
        $mailSent = mail($to, $subject, $clientMessage, $headers);

        if ($mailSent) {
            header("Location: success.html");
            exit();
        } else {
            echo "Fehler beim Versenden der E-Mail. Bitte versuchen Sie es erneut.";
        }
    } else {
        // Anzeige einer Fehlermeldung, wenn nicht alle Felder ausgefüllt sind
        echo "Fehler beim Versenden der E-Mail. Bitte versuchen Sie es erneut.";
    }
}