var firstNumber;
var secondNumber;
var ret = "";
var operation;
var operations = ["*", "/", "+", "-", "SYNTAX ERROR", "undefined"];

function clickedNumber(num){
    if (operations.indexOf(ret) >= 0) {
        clearScreen();
    }


    ret += num;
    updateScreen();
}

function clickedOperation(oper){
    if (operations.indexOf(ret) >= 0) {
        ret = "SYNTAX ERROR";
        updateScreen();
        return; 
    }else{
        firstNumber = ret;
        
    }
    if(oper == "*"){
        operation = "*";
    }else if(oper == "/"){
        operation = "/";
    }else if(oper == "-"){
        operation = "-";
    }else{
        operation = "+";
    }

    ret = operation
    updateScreen();
}

function format(operation){

}

function findAnswer(){
    secondNumber = ret;

    ret = "";

    if(operation == "*"){
        answer = parseInt(firstNumber) * parseInt(secondNumber);
    }else if(operation == "/"){
        answer = parseInt(firstNumber) / parseInt(secondNumber);
    }else if(operation == "-"){
        answer = parseInt(firstNumber) - parseInt(secondNumber);
    }else{
        answer = parseInt(firstNumber) + parseInt(secondNumber);
    }

    ret += answer; 

    updateScreen();
}

function clearScreen(){
    ret = "";
    document.getElementById("hi").innerHTML = "";
}

function emptyScreen(){
    firstNumber = "";
    secondNumber = "";
    operation = "";
    ret = "";
    document.getElementById("hi").innerHTML = "";
}

function updateScreen(){
    document.getElementById("hi").innerHTML = ret;
}