document.getElementById("submitBtn").addEventListener("click", function(event) 
{
    name = document.getElementById("name").value.trim();
    email = document.getElementById("email").value.trim();
    subject = document.getElementById("subject").value.trim();
    message = document.getElementById("message").value.trim();

    var nameRegex = /^[A-Za-z]+$/;
    if (!name.match(nameRegex) || name.length <= 2) {
        alert("First name can only contain letters and must be greater than 2 characters.");
        return;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return;
    }

    if(!name || !email || !subject || !message) 
    {
        alert("Please fill out all fields.");
        return;
    }

    alert("Message sent successfully!");
});
