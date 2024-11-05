document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const nameRegex = /^[A-Za-z]+$/;
    if (!firstName.match(nameRegex) || firstName.length <= 2 || firstName.length >= 10) {
        alert("First name can only contain letters and must be greater than 2 characters and less than 10 letters.");
        return;
    }
    if (!lastName.match(nameRegex) || lastName.length <= 2 || lastName.length >= 10) {
        alert("Last name can only contain letters and must be greater than 2 characters and less than 10 letters.");
        return;
    }

    const emailRegex = /^[a-z][a-z0-9]*@gmail\.com$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address that starts with a lowercase letter and ends with '@gmail.com'.");
        return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // Check password criteria (at least 8 characters and one special character)
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters long and include at least one special character.");
        return;
    }

    // If all validations pass, submit the form
    this.submit();
});
