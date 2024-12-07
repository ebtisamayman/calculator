const resultInput = document.getElementById("result");

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === "" && operator !== "-") return; 
    resultInput.value += operator;
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function clearAll() {
    resultInput.value = "";
}

function calculate() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = "خطأ";
    }
}


