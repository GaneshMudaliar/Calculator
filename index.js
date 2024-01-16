let displayValue = document.querySelector(".displayValue");
let buttons = document.querySelectorAll("button");
console.log(buttons);

let CalVal ="";

let buttonItems = Array.from(buttons);

// display calculation 

function displayCalVal(event) {
  if(event.target.innerHTML == "=") {
    CalVal = eval(CalVal);
    displayValue.value = CalVal;
  }
  else if(event.target.innerHTML == "AC"){
     CalVal = "";
     displayValue.value = CalVal;

  }
  else if(event.target.innerHTML == "DEL"){
    CalVal = CalVal.slice(0, CalVal.length-1);
    displayValue.value = CalVal;

    

  }
  else{
     CalVal += event.target.innerHTML;
     displayValue.value = CalVal;

     
  }
}
//  button section

buttonItems.forEach(button => {
  button.addEventListener("click",displayCalVal);
})