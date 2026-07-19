let inputdisplay = document.querySelector("input");
let one1 = document.querySelector("select.one");
let two2 = document.querySelector("select.two");
let convert1 = document.querySelector(".press button");
let clear = document.querySelector(".back button");
let res = document.getElementById("result");

convert1.onclick = function () {

    let money = Number(inputdisplay.value);


    if (money <= 0 || isNaN(money)) {
        res.innerHTML = "Please enter a valid amount";
        return;
    }

    if (one1.value == "" || two2.value == "") {
        res.innerHTML = "Please select both currencies";
        return;
    }


    fetch("https://open.er-api.com/v6/latest/USD")

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            let rates = data.rates;

            let fromRate = rates[one1.value];
            let toRate = rates[two2.value];

            let answer = (money / fromRate) * toRate;

            res.innerHTML =
                money + " " +
                one1.value +
                " = " +
                answer.toFixed(2) +
                " " +
                two2.value;

        })

        .catch(function () {

            res.innerHTML = "Unable to connect. Check your internet.";

        });

};

clear.onclick = function () {

    inputdisplay.value = "";
    one1.selectedIndex = 0;
    two2.selectedIndex = 0;
    res.innerHTML = "";

};