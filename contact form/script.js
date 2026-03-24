document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let msg = document.getElementById("msg").value.trim();

    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");
    let phoneErr = document.getElementById("phoneErr");
    let msgErr = document.getElementById("msgErr");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    phoneErr.innerHTML = "";
    msgErr.innerHTML = "";

    let valid = true;

    // Name validation (only alphabets)
    let nameCheck = /^[A-Za-z ]+$/;
    if (name == "") {
        nameErr.innerHTML = "Enter name";
        valid = false;
    } else if (!nameCheck.test(name)) {
        nameErr.innerHTML = "Only letters allowed";
        valid = false;
    }

    // Email validation
    let emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email == "") {
        emailErr.innerHTML = "Enter email";
        valid = false;
    } else if (!emailCheck.test(email)) {
        emailErr.innerHTML = "Invalid email";
        valid = false;
    }

    // Phone validation (only numbers)
    let phoneCheck = /^[0-9]{10}$/;
    if (phone == "") {
        phoneErr.innerHTML = "Enter phone";
        valid = false;
    } else if (!phoneCheck.test(phone)) {
        phoneErr.innerHTML = "Only 10 digit number";
        valid = false;
    }

    // Message validation
    if (msg == "") {
        msgErr.innerHTML = "Enter message";
        valid = false;
    }

    if (valid) {
        alert("Form Submitted Successfully!");
        document.getElementById("form").reset();
    } else {
        alert("Please fill all fields correctly!");
    }
});