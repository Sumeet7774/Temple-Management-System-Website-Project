document.getElementById("submitBtn").addEventListener("click", function(event) 
{
    email = document.getElementById("email").value.trim();
    password = document.getElementById("password").value.trim();

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return;
    }

    var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters long and include at least one special character.");
        return;
    }

    if (!email || !password) 
    {
        alert("Please fill out all fields.");
        return;
    }

    alert("Login successfull!");
});
