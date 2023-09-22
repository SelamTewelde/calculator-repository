let resultheader = document.querySelector ("span");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let Addbutton = document.getElementById("Add")
let Subbutton = document.getElementById("Sub")
let Multibutton = document.getElementById("Multi")
let Divibutton = document.getElementById("Divi")

function addition(a, b) {
  return a + b;
}
function subtruction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}


Addbutton.onclick = () => {
  let convertednum1 = parseInt(num1.value);
  let convertednum2 = parseInt(num2.value);

  if (!isNaN(convertednum1) && !isNaN(convertednum2)) {
    let result = addition(convertednum1, convertednum2)
    
    resultheader.innerText = result;
  }
  else{
    resultheader.innerText = 0
  }
};

Subbutton.onclick = () => {
  let convertednum1 = parseInt(num1.value);
  let convertednum2 = parseInt(num2.value);

  if (!isNaN(convertednum1) && !isNaN(convertednum2)) {
    let result = subtruction(convertednum1, convertednum2)
    
    resultheader.innerText = result;
  }
  else{
    resultheader.innerText = 0
  }
};
Multibutton.onclick = () => {
  let convertednum1 = parseInt(num1.value);
  let convertednum2 = parseInt(num2.value);

  if (!isNaN(convertednum1) && !isNaN(convertednum2)) {
    let result = multiplication(convertednum1, convertednum2)
    
    resultheader.innerText = result;
  }
  else {
    resultheader.innerText = 0
  }
};
Divibutton.onclick = () => {
  let convertednum1 = parseInt(num1.value);
  let convertednum2 = parseInt(num2.value);

  if (!isNaN(convertednum1) && !isNaN(convertednum2)) {
    let result = division(convertednum1, convertednum2)
    
    resultheader.innerText = result;
  }
  else{
    resultheader.innerText = 0
}
};