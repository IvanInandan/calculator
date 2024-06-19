const btn = document.querySelectorAll("button");
const input = document.querySelector(".input");
const memory = document.querySelector(".memory");
let firstVal = undefined;
let secondVal = undefined;
let operator = undefined;
let operatorFlag = false;
let secondEqualFlag = false;

function calculate(valOne, valTwo, operand) {
    switch (operand) {
        case "+":
            return valOne + valTwo;
            break;
        case "-":
            return valOne - valTwo;
            break;
        case "*":
            return valOne * valTwo;
            break;
        case "÷":
            return valOne / valTwo;
            break;
    }
}

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let val = button.getAttribute("class");

        if (val.includes("delete")) {
            if (input.textContent) {
                input.innerText = input.innerText.slice(0, -1);
            }

            else alert("Input is already empty!");
        }

        else if (val.includes("clear")) {
            firstVal = undefined;
            secondVal = undefined;
            operator = undefined;
            operatorFlag = false;
            secondEqualFlag = false;
            memory.textContent = "";
            input.textContent = "";
        }

        else if (val.includes("equal")) {
            secondVal = Number(input.textContent);
            memory.textContent += (" " + input.textContent);
            input.textContent = calculate(firstVal, secondVal, operator);
            operatorFlag = false;
            secondEqualFlag = false;
        }

        else if (val.includes("operator")) {
            if (secondEqualFlag == true) {
                secondVal = Number(input.textContent);
                memory.textContent += (" " + input.textContent + " " + button.textContent);
                input.textContent = firstVal = calculate(firstVal, secondVal, operator);
                operator = button.textContent;
                operatorFlag = true;
                secondEqualFlag = false;
            }

            else {
                firstVal = Number(input.textContent);
                operator = button.textContent;
                memory.textContent += (" " + input.textContent + " " + button.textContent);
                operatorFlag = true;
                secondEqualFlag = true;
            }
        }

        else if (val.includes("number")) {
            if (operatorFlag == false) {
                input.textContent += button.textContent;
            }

            else {
                input.textContent = button.textContent;
                operatorFlag = false;
                secondEqualFlag = true;
            }
        }

        else if (val.includes("point")) {
            if (!input.textContent.includes(".")) {
                if (operatorFlag == false) {
                    input.textContent += button.textContent;
                }

                else {
                    input.textContent = button.textContent;
                    operatorFlag = false;
                    secondEqualFlag = true;
                }
            }
        }
    })
})