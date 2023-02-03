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
let hasBothValues = false
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

            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('0')
            break;
        case 'one':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('1')
            break
        case 'two':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('2')
            break
        case 'three':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('3')
            break
        case 'four':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('4')
            break;
        case 'five':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('5')
            break
        case 'six':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('6')
            break
        case 'seven':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('7')
            break
        case 'eight':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('8')
            break;
        case 'nine':
            if(hasBothValues){
                storeFirstValue()
            }
            populateDisplay('9')
            break
        case 'ac':
            clearAC()
            break
        case 'add':
            if(hasBothValues){
                operate(firstValue, displayValue, operator)
            }else{
            hasBothValues = true
            }
            operator = 'add'
            break
        case 'subtract':
            if(hasBothValues){
                operate(firstValue, displayValue, operator)
            }else{
            hasBothValues = true
            }
            operator = 'subtract'
            break
        case 'multiply':
            if(hasBothValues){
                operate(firstValue, displayValue, operator)
            }else{
            hasBothValues = true
            }
            operator = 'multiply'
            break
        case 'divide':
            if(hasBothValues){
                operate(firstValue, displayValue, operator)
            }else{
            hasBothValues = true
            }
            operator = 'divide'
            break   
        case 'equals':
            if(hasBothValues){
                operate(firstValue, displayValue, operator)
            }
            hasBothValues = false
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
    hasBothValues = false
}

function storeFirstValue(){
    firstValue = displayValue
    display.innerText = null
    displayValue = null
}

