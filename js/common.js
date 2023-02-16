function getTextElementById(id) {
  const phoneTotalElement = document.getElementById(id);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}
function setTextElementById(id, value) {
   const subTotal = document.getElementById(id);
   subTotal.innerText = value;
   //   tax calculate

  
}
function calculateSubTotal() {
  //    calculate total
  const currentPhoneTotal = getTextElementById("phone-price");
  const currentCaseTotal = getTextElementById("case-price");
  const currentSubTotal = currentCaseTotal + currentPhoneTotal;
  setTextElementById('subtotal-price', currentSubTotal);
  const taxPrice = currentSubTotal * 0.15; 
  const taxFixedPrice = parseFloat(taxPrice.toFixed(2));
  setTextElementById('tax-price', taxFixedPrice);
  const totalPrice = currentSubTotal + taxFixedPrice;
  setTextElementById('total-price', totalPrice);
  
}
