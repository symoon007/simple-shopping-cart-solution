function updateCase(isIncrese) {
  const caseNumberField = document.querySelector("#case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);
  let currentCaseNumber;
  if (isIncrese == true) {
    currentCaseNumber = previousCaseNumber + 1;
  } else {
    currentCaseNumber = previousCaseNumber - 1;
    if (currentCaseNumber < 0 && currentCaseTotal < 0) {
      
      return;
    }
  }
  caseNumberField.value = currentCaseNumber;
  return currentCaseNumber;
}
function totalCasePrice(currentCaseNumber) {
  const caseTotal = currentCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-price");
  caseTotalElement.innerText = caseTotal;
  // if (phoneTotalElement.innerText == 1219) {
  //   alert("You order less than one");
  //   return;
  // }
}
document.querySelector("#btn-case-plus").addEventListener("click", function () {
  const currentCaseNumber = updateCase(true);
  totalCasePrice(currentCaseNumber);
  calculateSubTotal();

 
});
document
  .querySelector("#btn-case-minus")
  .addEventListener("click", function () {
    const currentCaseNumber = updateCase(false);
    // if(caseTotalElement.innerText < 59) {

    // }
    totalCasePrice(currentCaseNumber);
    calculateSubTotal();

  });
