// display
function display(num){
    output.value +=num;    //id(result id).value=to get value
}

// clear AC

function clearAll(){
    output.value=''
}

function evaluateExp(){
    // eval----it is a predefined
    output.value=eval(output.value)
}

// remove last item

function removeLast(){
    // store the result in another variable
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}