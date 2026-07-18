let amount = document.querySelector("input");
let from = document.querySelector(".one");
let to = document.querySelector(".two");

let convert = document.querySelector(".press button");
let clear = document.querySelector(".back button");

let result = document.getElementById("result");

let rates = {
    USD: 1,
    INR: 86,
    AED: 3.67,
    AFN: 70,
    AMD: 385
};

convert.onclick = function () {

    let money = Number(amount.value);

    if (money <= 0) {
        result.innerHTML = "Enter a valid amount";
        return;
    }

    let fromRate = rates[from.value];
    let toRate = rates[to.value];

    let answer = (money / fromRate) * toRate;

    result.innerHTML = money + " " + from.value +" = " + answer.toFixed(2) + " " + to.value;
};

clear.onclick = function () {
    amount.value = "";
    from.selectedIndex = 0;
    to.selectedIndex = 0;
    result.innerHTML = "";
};