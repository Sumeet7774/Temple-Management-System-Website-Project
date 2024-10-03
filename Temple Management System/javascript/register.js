document.getElementById("submitBtn").addEventListener("click", function(event) 
{
    firstName = document.getElementById("firstname").value.trim();
    lastName = document.getElementById("lastname").value.trim();
    email = document.getElementById("email").value.trim();
    password = document.getElementById("password").value.trim();
    phone = document.getElementById("phone").value.trim();

    var nameRegex = /^[A-Za-z]+$/;
    if (!firstName.match(nameRegex) || firstName.length <= 2) {
        alert("First name can only contain letters and must be greater than 2 characters.");
        return;
    }
    if (!lastName.match(nameRegex) || lastName.length <= 2) {
        alert("Last name can only contain letters and must be greater than 2 characters.");
        return;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return;
    }

    var phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters long and include at least one special character.");
        return;
    }

    if (!firstName || !lastName || !email || !password || !phone) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Registration successful!");
});
