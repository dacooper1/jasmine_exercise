window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 5000,
    years: 2,
    rate: 5
  }
  const amount = document.getElementById("loan-amount")
  amount.value = values.amount;
  const years = document.getElementById("loan-years")
  years.value = values.years;
  const rate = document.getElementById("loan-rate")
  rate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues))
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal = values.amount
  let years = values.years
  let interest = ((values.rate/100)/12)
  let n = (-(years*12))
  let topOfEquation = (principal * interest)
  let bottomOfEquation = (1 - (1 + interest)**((n)))
  let monthlyPay = (topOfEquation/bottomOfEquation).toFixed(2) 
  return monthlyPay
  }


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
const monthlySection = document.getElementById("monthly-payment");

if (monthly !== "NaN" || "undefined" || "Infinity"){
  monthlySection.innerText = '$' + monthly
} else {
  monthlySection.innerText = ('Please fill in all 3 inputs with numbers.');
  monthlySection.style.color = "red";
  }
}

