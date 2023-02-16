function updatePhone(isIncrese) {
     const phoneNumberField = document.getElementById("phone-number-field");
     const phoneNumberString = phoneNumberField.value;
     const previousPhoneNumber = parseInt(phoneNumberString);
     let currentPhoneNumber;
     if(isIncrese === true) {
        currentPhoneNumber = previousPhoneNumber +1;
     }
     else {
        currentPhoneNumber = previousPhoneNumber - 1;
        if(currentPhoneNumber < 0 && currentPhoneTotal < 0) {
            
             return;
        }
     }
     phoneNumberField.value = currentPhoneNumber;
     return currentPhoneNumber;
}
function totalPhonePrice(currentPhoneNumber) {
  
  const phoneTotal = currentPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-price");
  phoneTotalElement.innerText = phoneTotal;
    // if (phoneTotalElement.innerText == 1219) {
    //   alert("You order less than one");
    //   return;
    // }
 
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
   const currentPhoneNumber = updatePhone(true);
   totalPhonePrice(currentPhoneNumber);
calculateSubTotal();

  });
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const currentPhoneNumber = updatePhone(false);
    // if (phoneTotal == 1219) {
     
    //   return;
    // }
    totalPhonePrice(currentPhoneNumber);
    calculateSubTotal();
  });