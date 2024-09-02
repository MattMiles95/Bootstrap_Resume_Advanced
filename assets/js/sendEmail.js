function sendMail(contactForm) {
    emailjs.send("service_28fl2yh", "cv_message", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thanks for getting in touch! I'll be in contact soon.");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Something went wrong... please try submitting your message again.");
        }
    );
    return false
}