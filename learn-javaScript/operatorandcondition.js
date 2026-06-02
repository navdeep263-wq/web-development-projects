/* Get user to input a number using prompt("enter the number").
check if the number is a multiple of 5 or not */

let num = prompt("Enter the number: ");

if(num % 5 === 0){
    console.log( num , "is a multiple of 5");
}else{
    console.log(num , "is not a multiple of 5");
}

