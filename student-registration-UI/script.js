function register() {
    let name = prompt("Enter your name");
    let age = prompt("Enter your Age");

    if(name === null || name === ""){
        alert("Name is required");
    }else if(age < 18){
        alert("You are not eligible");
    }else{
        alert("Registration Successful");
    }
    
}

