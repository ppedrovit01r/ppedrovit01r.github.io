function addNumbers() {
  //INPUT
  let x = parseFloat(document.getElementById("number1").value);
  let y = parseFloat(document.getElementById("number2").value);
  //PROCESSING
  let sum = x + y;
  //OUTPUT
  document.getElementById("output").innerHTML =
    "The sum of " + x + " and " + y + " equals " + sum + "!";
}

function convertPoundsToKilograms() {
  //INPUT - Receive the number in Pounds.
  let lbs = parseFloat(document.getElementById("pounds").value);
  //PROCESSING Pt.1 - 1 lbs equals 0.45359237 kg, so we should let the computer know that:
  let kg = 0.45359237 * lbs;
  //PROCESSING Pt.2 - Then, round the number to one digit after the decimal:
  let digits = 1;
  let multiplier = Math.pow(10, digits);
  lbs = Math.round(lbs * multiplier) / multiplier;
  kg = Math.round(kg * multiplier) / multiplier;
  //OUTPUT - Display the result found through processing.
  document.getElementById("output").innerHTML =
    lbs + " pounds equals " + kg + " kilograms.";
}

function ataxPay() {
  //INPUT - Get regular hours and overtime hours from user.
  let regHours = parseFloat(document.getElementById("regHours").value);
  let overHours = parseFloat(document.getElementById("overHours").value);
  //PROGRESSING
  // - Get gross pay (regular pay rate is 15 and overtime pay rate is 22.5)
  let grossPay = regHours * 15 + overHours * 22.5;
  // - Subtract tax amount (Tax rate equals .15)
  let netPay = grossPay - grossPay * 0.15;
  // - Rounding number to 2 decimals:
  let digits = 2;
  let multiplier = Math.pow(10, digits);
  netPay = Math.round(netPay * multiplier) / multiplier;
  //OUTPUT - Display the result with a $ symbol
  document.getElementById("output").innerHTML =
    "The after tax pay is $" + netPay;
}

function cylinderVolume() {
  //INPUT - Get regular hours and overtime hours from user.
  let r = parseFloat(document.getElementById("radius").value);
  let h = parseFloat(document.getElementById("height").value);
  //PROGRESSING
  // - Get volume
  let v = Math.PI * Math.pow(r, 2) * h;
  // - Rounding to nearest whole number:
  v = Math.round(v);
  //OUTPUT - Display the result with a $ symbol
  document.getElementById("output").innerHTML = "Volume: " + v;
}

function checkSimpleCalc() {
  //INPUT - Get the data from the user.
  let x = parseFloat(document.getElementById("number1").value);
  let symbol = document.getElementById("symbol").value;
  let y = parseFloat(document.getElementById("number2").value);
  let userResult = parseFloat(document.getElementById("userResult").value);
  //PROCESSING - Do the calc and compare it.
  let calcResult;
  switch (symbol) {
    case "+":
      calcResult = (x + y);
      break;
    case "-":
      calcResult = (x - y);
      break;
    case "*":
      calcResult = (x * y);
      break;
    case "/":
      calcResult = (x / y);
      break;
    default:
      break;
  }
  //OUTPUT - Choose the right output answer.
  if (calcResult == userResult) {
    document.getElementById("output").innerHTML = "Correct! 🏆";
  } else {
    document.getElementById("output").innerHTML = "Incorrect 😢";
  }
}
