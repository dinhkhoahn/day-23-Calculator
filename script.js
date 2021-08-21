let calculationButton = document.querySelector(".calculation")
let resetButton = document.querySelector('.reset')
let allNumbers = document.querySelectorAll(".number")
let allOperators = document.querySelectorAll(".operator")
let numberOne = document.querySelector('.number-one')
let showOperator = document.querySelector('.show-operator')
let numberTwo = document.querySelector('.number-two')

let number1 = []
let number2 = []
let operator = ""

//Gán event để lấy number
for (let number of allNumbers) {
    number.addEventListener('click', collectNumber)
}


//Gán event để lấy operator
for (let operator of allOperators) {
    operator.addEventListener('click', collectOperator)
}

//Tính kết quả
calculationButton.addEventListener('click', calc)

//Reset
resetButton.addEventListener('click', reset)

function collectNumber() {
    if (!operator) {
        if (number1.includes(".") && this.id === ".") {
            alert("Number only has 1 dot")
        } else {
            number1.push(this.id)
        }
    } else {
        if (number2.includes(".") && this.id === ".") {
            alert("Number only has 1 dot")
        } else {
            number2.push(this.id)
        }
    }
    render()
}

function collectOperator() {
    operator = this.id
    render()
}

function render() {
    showOperator.textContent = operator;
    numberOne.textContent = number1.join("")
    numberTwo.textContent = number2.join("")
}

function calc() {
    if (number1 && number2 && operator) {
        let num1 = Number(number1.join(""))
        let num2 = Number(number2.join(""))
        let result = 0
        switch(operator) {
            case "+":
                result = num1 + num2
                break
            case "-":
                result = num1 - num2
                break
            case "*":
                result = num1 * num2
                break
            case "/":
                result = num1 / num2
                break    
        }
        showResult(result)
    } else {
        alert("Please import numbers and operator to calculate")
    }
}

function showResult(result) {
    numberTwo.textContent = result
    number1 = []
    number2 = []
    operator = ""
}

function reset() {
    number1 = []
    number2 = []
    operator = ""
    render()
}



