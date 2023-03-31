
// TO SHOW CONTENT IN CALCULATOR DISPLAY
function display(content) {
    result.value += content

}

// TO CLEAR CALCULATOR DISPLAY
function allClear() {
    result.value = ''
}

function calculate() {

    try {
        result.value = eval(result.value)
    }
    catch {
        alert('invalid expression')
    }
}

function removeLast(){
    result.value=result.value.slice(0,-1);
}