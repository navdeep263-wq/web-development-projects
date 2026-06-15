// Sign Up Function
function signupUser(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    let user = {
        name: name,
        email: email,
        password: password
    };


    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    window.location.href = "login.html";

    return false;
}


// Login Function
function loginUser(){

    let email = document.getElementById("loginEmail").value;

    let password =
    document.getElementById("loginPassword").value;


    let user =
    JSON.parse(localStorage.getItem("user"));


    if(user &&
       email === user.email &&
       password === user.password){

        alert("Login Successful!");

        window.location.href = "index.html";
    }

    else{

        alert("Invalid Email or Password!");

    }


    return false;
}