//practice for all operators loops and conditional statements and create simple calculator

let num1 = prompt("Enter the first Number: ");
console.log(num1);
let num2 = prompt("Enter the second Number: ");
console.log(num2);

let operator = prompt("Enter the oerator(+ , - , * , / ): ");

if(operator === "+"){
    let result = num1 + num2;
    alert("Result =  " + result);
    console.log(result);
}else if(operator === "-"){
    let result = num1 - num2;
    alert("Result =  " + result);
    console.log(result);
}else if(operator === "*"){
    let result = num1 * num2;
    alert("Result =  " + result);
    console.log(result);
}else if(operator === "/"){
    let result = num1 / num2;
    alert("Result =  " + result);
    console.log(result);
}else{
    alert("Invalid operator");
    
}
