function add(a, b) {
	return +a + +b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {
	return a / b;
}

function multiply(a, b) {
	return a * b;
}

function operate(a, b, operator) {
	switch (operator) {
		case "add":
			result = Math.round(add(a, b) * 100) / 100;
			populateDisplay(result, true);
			break;
		case "subtract":
			result = Math.round(subtract(a, b) * 100) / 100;
			populateDisplay(result, true);
			break;
		case "multiply":
			result = Math.round(multiply(a, b) * 100) / 100;
			populateDisplay(result, true);
			break;
		case "divide":
			result = Math.round(divide(a, b) * 100) / 100;
			populateDisplay(result, true);
			break;
	}
	shouldClearDisplay = true;
	allowToCalc = false;
}
let result;
let allowToCalc = false;
let shouldClearDisplay = false;
let displayValue = 0;
let firstValue = 0;
let operator = "";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

for (let a of buttons) {
	a.addEventListener("click", onClick);
}

function onClick() {
	switch (this.classList.value) {
		case "zero":
			populateDisplay("0");
			break;
		case "one":
			populateDisplay("1");
			break;
		case "two":
			populateDisplay("2");
			break;
		case "three":
			populateDisplay("3");
			break;
		case "four":
			populateDisplay("4");
			break;
		case "five":
			populateDisplay("5");
			break;
		case "six":
			populateDisplay("6");
			break;
		case "seven":
			populateDisplay("7");
			break;
		case "eight":
			populateDisplay("8");
			break;
		case "nine":
			populateDisplay("9");
			break;
		case "ac":
			clearAC();
			break;
		case "add":
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();

			operator = "add";
			break;
		case "subtract":
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();
			operator = "subtract";
			break;
		case "multiply":
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();
			operator = "multiply";
			break;
		case "divide":
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();
			operator = "divide";
			break;
		case "equals":
			operate(firstValue, displayValue, operator);
			operator = "";
			break;
		case "point":
			addPoint();
			break;
		case "backspace":
			deleteLast();
			break;
		case "plusminus":
			toggleToNegative();
			break;
	}


}

function populateDisplay(number, testLength = false) {
	if (shouldClearDisplay) {
		display.innerText = null;
		displayValue = null;
		shouldClearDisplay = false;
	}
	allowToCalc = true;
	if (!testLength) {
		if (display.innerText.length < 9) {
			display.innerText += number;
			displayValue = display.innerText;
		}
	} else {
		if (result == Infinity || result == NaN) {
			console.log("a");
			display.innerText = "wtf";
		} else {
			display.innerText = number;
			displayValue = display.innerText;
		}
	}
	if(number.toString().length > 10){
		display.innerText = "ERR: Too Big";
	}
}

function clearAC() {
	display.innerText = null;
	displayValue = "";
	firstValue = null;
	result = null;
	allowToCalc = false;
	shouldClearDisplay = false;
	operator = "";
	for (let a of buttons) {
		if (a.classList.value == "percent") {
			a.innerText = "";
		}
	}
}

function storeFirstValue() {
	firstValue = displayValue;
	shouldClearDisplay = true;
}

function addPoint() {
	if (display.innerText != "" && display.innerText != "-") {
		let hasDot = display.innerText.includes(".");
		if (!hasDot) {
			display.innerText += ".";
		}
	}
}

function deleteLast() {
	display.innerText = display.innerText.slice(0, -1);
	displayValue = display.innerText;
}

function toggleToNegative() {
	if (shouldClearDisplay) {
		display.innerText = null;
		displayValue = null;
		shouldClearDisplay = false;
	}




	let hasMinus = display.innerText.includes("-");
	if (hasMinus) {
		display.innerText = display.innerText.slice(0, 0);
	} else {
		display.innerText = "-" + display.innerText;
	}
	displayValue = display.innerText;
}


window.addEventListener('keydown', e => {
	console.log(e.key)
	switch(e.key){
		case '0':
			populateDisplay('0')
			break
		case '1':
			populateDisplay('1')
			break
		case '2':
			populateDisplay('2')
			break
		case '3':
			populateDisplay('3')
			break
		case '4':
			populateDisplay('4')
			break
		case '5':
			populateDisplay('5')
			break
		case '6':
			populateDisplay('6')
			break
		case '7':
			populateDisplay('7')
			break
		case '8':
			populateDisplay('8')
			break
		case '9':
			populateDisplay('9')
			break
		case '/':
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();
			operator = "divide";
			break;
		case '*':
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();
			operator = "multiply";
			break;
		case '-':
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();
			operator = "subtract";
			break;
		case '+':
			if (allowToCalc) {
				operate(firstValue, displayValue, operator);
			}
			storeFirstValue();

			operator = "add";
			break;
		case 'Enter':
			operate(firstValue, displayValue, operator);
			operator = "";
			break;
		case '=':
			operate(firstValue, displayValue, operator);
			operator = "";
			break;
		case 'Backspace':
			deleteLast();
			break;
		case ".":
			addPoint();
			break;
	}
})

