// დავალება 1 

const { act } = require("react");

function squared (Number){
  console.log(Number * Number);
};

squared(5)

// დავალება 2 

function cal(calsius){
    console.log((calsius*(9/5)) + 32);
};

cal(1)

//დავალება 3 

function num (number, fnumber, lnumber){
    if(fnumber <= number && lnumber >= number){
        console.log(":)");
    }
    else{
       console.log(":(");
    }
}

num(1, 1, 1);


// დავალება 4 

function nak(nak){
    if(nak*4 === 0){
        console.log("ნაკიანი წელია");
    }else{
        console.log("არარის ნაკიანი წელი");
    }
}

nak(2025);

//დავალება 5

let num = Number(prompt("შიყვანეთ პირველი რიცხვი"));
let Num2 = Number(prompt("შიყვანეთ მეორე რიცხვი"));
let action = prompt("დააჭირე ღილაკს");

function cal(num, Num2, action){
    if(action!=="+" && action!== "-" && action!== "*" && action!=="/"){
        console.log("ERROR");
    }
    else if(action === "+"){
        console.log(num + num2);
    }

    else if(action === "-"){
        console.log(num - num2);
    }

    else if(action === "/"){
        console.log(num / num2);
    }

    else if(action === "*"){
        console.log(num * num2);
    }
}

cal();