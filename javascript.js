function add(a, b){
    return +a + +b
}

function subtract(a, b){
    return a - b
}

function divide(a, b){
    return a / b
}

function multiply(a, b){
    return a * b
}



function operate(a, b){
    switch(operator){
        case 'add':
            result = add(a, b)
            break
        case 'subtract':
            result = subtract(a, b)
            break
        case 'multiply':
            result = Math.round(multiply(a, b) * 100) / 100;
            break
        case 'divide':
            result = Math.round(divide(a, b) * 100) / 100;
            break
    }


}
let result
let hasDot = false
let hasBothValues = false
let displayValue
let firstValue = null
let usedOperatorTwice = false
let operator = ''
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
let shouldDeleteDisplay = false

for(let a of buttons){
    a.addEventListener('click', onClick)
}

function onClick(){


    switch(this.classList.value){
        case 'zero':
            populateDisplay('0')
            break;
        case 'one':
            populateDisplay('1')
            break
        case 'two':
            populateDisplay('2')
            break
        case 'three':
            populateDisplay('3')
            break
        case 'four':
            populateDisplay('4')
            break;
        case 'five':
            populateDisplay('5')
            break
        case 'six':
            populateDisplay('6')
            break
        case 'seven':
            populateDisplay('7')
            break
        case 'eight':
            populateDisplay('8')
            break;
        case 'nine':
            populateDisplay('9')
            break
        case 'ac':
            clearAC()
            break
        case 'add':
            operator = 'add'
            doCalculations()
            break
        case 'subtract':
            operator = 'subtract'
            doCalculations()
            break
        case 'multiply':
            operator = 'multiply'
            doCalculations()
            break
        case 'divide':
            operator = 'divide'
            doCalculations()
            break   
        case 'equals':
            break;   
            
        case 'point':
            break;   

    }
}

function doCalculations(){
    if(firstValue && !shouldDeleteDisplay){
        operate(firstValue, display.innerText)


        firstValue = null
        display.innerText = ''
        populateDisplay(result)
        shouldDeleteDisplay = true
    }else{
        setFirstValue()
    }
}

function populateDisplay(number){
    if(shouldDeleteDisplay){
        display.innerText = ''
        shouldDeleteDisplay = false
    }

    if(display.innerText.length < 9){
        display.innerText += number
    }
}

function clearAC(){
    firstValue = null
    shouldDeleteDisplay = false
    display.innerText = ''
}
function setFirstValue(){
    firstValue = display.innerText
    shouldDeleteDisplay = true
}

