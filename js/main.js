
var x = 0;
var y = 0;
var operationnotset = true;
var operation = function(x) { return x };


function writenum(This) {
    if (operationnotset) {
        x += This.value;
    }
    else 
    {
        y += This.value;
    }

    document.getElementById("screen").innerHTML += This.value
}


function sum() {
    document.getElementById("screen").innerHTML += "+"
    operationnotset = false;
    operation = function() {
        x = parseFloat(x)
        y = parseFloat(y)
        return x + y; //اجمع المتغيرين x ,y
    }
}

function sub() {
    document.getElementById("screen").innerHTML += "-"
    operationnotset = false;
    operation = function() {
        x = parseFloat(x)
        y = parseFloat(y)
        return x - y; //اطرح المتغيرين x ,y
    }
}

function mul() {
    document.getElementById("screen").innerHTML += "*"
    operationnotset = false;
    operation = function() {
        x = parseFloat(x)
        y = parseFloat(y)
        return x * y; //ضرب المتغيرين x ,y
    }
}

function div() {
    document.getElementById("screen").innerHTML += "/"
    operationnotset = false;
    operation = function() {
        x = parseFloat(x)
        y = parseFloat(y)
        return x / y; //قسمة المتغيرين x ,y
    }
}



function solve() {
    document.getElementById("screen").innerHTML = operation();
    x = operation();
    operationnotset = true;
    operation = function(x) { return x };
    y = 0;
}

function $rel() {
    document.getElementById("screen").innerHTML += "&"
    operationnotset = false;
}

function rel() {
    x = parseFloat(x)
    y = parseFloat(y)
    if (x > y)
    {
        alert(x + " is greater than" + y);

        console.log(x + " is greater than" + y);
    }
     else if (x < y)
     {
        alert(x + " is smaller than" + y);

        console.log(x + " is smaller than" + y);

    }
     else if (x === y) /* هل x تساوي من y*/ {
        alert(x + " is equal to" + y);

        console.log(x + " is equal to" + y);
    }
}







function del() 
{
    document.getElementById("screen").innerHTML = "";
    operationnotset = true;
    operation = function(x) { return x };
    x = 0;

    y = 0;
}