const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numPeopleInput = document.getElementById("numPeople");
const calculateButton = document.getElementById("calculateButton");
const totalTipDsiplay = document.getElementById("totalTip");
const tipPerPersonDsiplay = document.getElementById("tipPerPerson");

calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  // validation
  if (
    Number.isNaN(billAmount) ||
    Number.isNaN(tipPercentage) ||
    Number.isNaN(numPeople)
  ) {
    alert("Please enter valid inputs");
    return;
  }

  const totalTip = (billAmount * tipPercentage) / 100;
  const tipPerPerson = totalTip / numPeople;

  totalTipDsiplay.textContent = `Total Tip: ${totalTip.toFixed(2)}`;
  tipPerPersonDsiplay.textContent = `Tip for each person: ${tipPerPerson.toFixed(
    2
  )}`;
}
