const firstCurrency = document.getElementById("currency-first");
const worthFirst = document.getElementById("worth-first"); 
const secondCurrency = document.getElementById("currency-second");
const worthSecond = document.getElementById("worth-second"); 
const exchangeRate = document.getElementById("exchange-rate");

updateRate()

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/a4503ae30b8d8bd179299ab1/latest/${firstCurrency.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[secondCurrency.value];
      console.log(rate);
      exchangeRate.innerText = `1 ${firstCurrency.value} = ${rate + " " + secondCurrency.value}`;

      worthSecond.value = (worthFirst.value * rate).toFixed(2)
    });
}

firstCurrency.addEventListener("change", updateRate)

secondCurrency.addEventListener("change", updateRate)

worthFirst.addEventListener("input", updateRate)