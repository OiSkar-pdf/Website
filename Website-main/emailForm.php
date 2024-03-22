<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);

        $recipient = "oiwaniuk1116@gmail.com";
        $subject = "New contact from $name";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone: $phone\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            echo "<script>alert('Message sent successfully.');</script>";
        } else {
            echo "<script>alert('Oops! Something went wrong and we couldn't send your message.');</script>";
        }
    }
?>
