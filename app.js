var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

initialPrice.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || (e.keyCode == 8)
      || (e.keyCode == 110)
      || e.keyCode == 190)) {
        return false;
    }
}

stocksQuantity.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

currentPrice.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || (e.keyCode == 8)
      || (e.keyCode == 110)
      || e.keyCode == 190)) {
        return false;
    }
}


function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function decimal (x) {
    return Number.parseFloat(x).toFixed(2);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = decimal((initial * quantity) - (current * quantity));
        var lossPercentage = decimal((loss / (current * quantity)) * 100);

        outputBox.textContent = (`Hey the invested amount is ${(initial * quantity)} and loss is ${loss} and the percent is ${lossPercentage}%`)
        outputBox.style.color = "red"

    } else if (current > initial) {
        var profit = decimal((current * quantity) - (initial * quantity));
        var profitPercentage = decimal((profit / (initial * quantity)) * 100);

        outputBox.textContent = (`Hey the invested amount is ${(initial * quantity)} profit is ${profit} and the percent is ${profitPercentage}%`)
        outputBox.style.color = "green"
    } else {

        outputBox.textContent = (`No Pain No Gain and No Gain No Pain`);
        outputBox.style.color = "white"
    }

}
