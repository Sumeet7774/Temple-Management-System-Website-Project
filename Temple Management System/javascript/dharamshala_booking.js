document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); 

    firstName = document.getElementById("firstname").value.trim();
    lastName = document.getElementById("lastname").value.trim();
    phone = document.getElementById("phone").value.trim();

    nameRegex = /^[A-Za-z]+$/;
    if (!firstName.match(nameRegex) || firstName.length <= 2) {
        alert("First name can only contain letters and must be greater than 2 characters.");
        return;
    }
    if (!lastName.match(nameRegex) || firstName.length <= 2) {
        alert("Last name can only contain letters and must be greater than 2 characters.");
        return;
    }

    phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    if (!firstName || !lastName || !phone) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Bhojnalay Booking successful!");
});
