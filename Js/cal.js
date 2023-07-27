let displayValue=document.getElementById("textField");
let total="";

function display(num){
    if(num=='+' || num=='-' || num=='*' || num=='/'){
        displayValue.value="";
        total+=num;
        
    }else{
        document.getElementById("textField").value += num;
        total+=num;
    }
    
}


function clearvalues(){
    //document.getElementById("textField").value = "";
    displayValue.value="";
}

function backspace(){
    let text=displayValue.value.split("");
    amount="";
    for(let i=0; i<text.length-1;i++){
        amount+=text[i];
    }
    displayValue.value=amount;
    tot=amount;
}
let result="";

function equal(){
    console.log("equal");
    console.log(total);
    result = eval(total);
    console.log(result);
    displayValue.value = result;
    total="";
}