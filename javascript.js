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



function operate(a, b, operator){
    let result
    switch(operator){
        case 'add':
            result = add(a, b)
            populateDisplay(result, true)
            break
        case 'subtract':
            result = subtract(a, b)
            populateDisplay(result, true)
            break
        case 'multiply':
            result = Math.round(multiply(a, b) * 100) / 100;
            populateDisplay(result, true)
            break
        case 'divide':
            result = Math.round(divide(a, b) * 100) / 100;
            populateDisplay(result, true)
            break
    }


}
let temp = 0
let hasFirstValue = false
let displayValue = 0
let firstValue = 0
let operator = ''
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

for(let a of buttons){
    a.addEventListener('click', onClick)
}

function onClick(){


    switch(this.classList.value){
        case 'zero':

            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('0')
            break;
        case 'one':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('1')
            break
        case 'two':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('2')
            break
        case 'three':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('3')
            break
        case 'four':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('4')
            break;
        case 'five':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('5')
            break
        case 'six':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('6')
            break
        case 'seven':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('7')
            break
        case 'eight':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('8')
            break;
        case 'nine':
            if(hasFirstValue){
                storeFirstValue()
            }
            populateDisplay('9')
            break
        case 'ac':
            clearAC()
            break
        case 'add':
            if(hasFirstValue){
                operate(firstValue, displayValue, operator)
                hasFirstValue = false
            }else{
            hasFirstValue = true
            }
            operator = 'add'
            break
        case 'subtract':
            if(hasFirstValue){
                operate(firstValue, displayValue, operator)
                hasFirstValue = false
            }else{
            hasFirstValue = true
            }
            operator = 'subtract'
            break
        case 'multiply':
            if(hasFirstValue){
                operate(firstValue, displayValue, operator)
                hasFirstValue = false
            }else{
            hasFirstValue = true
            }
            operator = 'multiply'
            break
        case 'divide':
            if(hasFirstValue){
                operate(firstValue, displayValue, operator)
                hasFirstValue = false
            }else{
            hasFirstValue = true
            }
            operator = 'divide'
            break   
        case 'equals':
            if(hasFirstValue){
                operate(firstValue, displayValue, operator)
            }
            hasFirstValue = false
            
            break;      

    }
}


function populateDisplay(number, testLength = false){
        if(!testLength){
            if(display.innerText.length < 9){

                display.innerText += number
                displayValue = display.innerText
            }
        }else{
            display.innerText = number
            displayValue = display.innerText
        }
}

function clearAC(){
    display.innerText = null
    displayValue = null
    firstValue = null
    hasFirstValue = false
}

function storeFirstValue(){
    firstValue = displayValue
    display.innerText = null
    displayValue = null
}

