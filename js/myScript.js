function doInputOutput() {
  let temperature = parseFloat(document.getElementById("temperature").value);
  let windspeed = parseFloat(document.getElementById("windSpeed").value);
  let windchill;
  if (temperature <= 50 && windspeed >= 3) {
    windchill = windChill(temperature, windspeed);
  } else windchill = "Wind chill is not calculated for temperatures above 50 degrees Fahrenheit nor for wind speeds below 3 miles per hour.";
  document.getElementById("output").innerHTML = windchill;
}

function windChill(tempF, speed) {
  let windFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
  return windFactor;
}

function fiveTimes() {
  //W09 Times Table using Repetition
  //INPUT
  let output = "";
  let result;
  //PROCESSING
  for (let i = 1; i <= 12; i++) {
    result = 5 * i;
    output += "5 x " + i + " = " + result;
    if (i < 12) {
      output += "<br>";
    }
  }
  //OUTPUT
  document.getElementById("output").innerHTML = output;
}

function loop1() {
  //W08 Fix Loop Structures
  let output1 = "";
  let i = 0;
  while (i < 2) {
    //should be smaller than 2
    output1 += `Part 1:${i}<br>`;
    i++;
  }
  document.getElementById("display1").innerHTML = output1;
}

function loop2() {
  //W08 Fix Loop Structures
  var output2 = "";
  for (let j = 0; j < 3; j++) {
    if (j != 2) {
      //Only one equal sign
      output2 += `Part 2:${j}, `;
    } else {
      output2 += `Part 2:${j}`;
    }
  }
  document.getElementById("display2").textContent = output2;
}

function loop3() {
  //W08 Fix Loop Structures
  let output3 = "";
  for (let k = 0; k < 4; k++) {
    //Semicolons, not commas
    output3 += k + " ";
  }
  document.getElementById("display3").textContent = output3;
}

function loop4() {
  //W08 Fix Loop Structures
  let balance = 1000;
  const rate = 0.1;
  let n = 30;
  for (let s = 1; s < n; s++) {
    //changed S to start on 1
    interest = balance * rate;
    balance += interest;
  }
  balance = Math.round(balance * 100) / 100; //rounding number
  document.getElementById("display4").textContent = balance;
}

function sumOdds() {
  //W08 Sum up the Odd Values
  //INPUT - Gets an integer "n" from the user
  let n = parseInt(document.getElementById("number").value);
  //PROCESSING - Sums every odd number until the limit "n"
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  //OUTPUT - Outputs the sum.
  document.getElementById("output").innerHTML = "Sum of Odd Values: " + sum;
}

function retailDiscount() {
  //W07 Sales Conditional Discount
  //INPUT
  let subtotal = document.getElementById("subtotal").value;
  var dayOfWeek = new Date().getDay();
  //PROCESSING
  if ((dayOfWeek == 2 || dayOfWeek == 3) && subtotal > 50) {
    subtotal *= 0.9;
  }
  let total = subtotal * 1.06;
  //Adding 2 decimals:
  let digits = 2;
  let multiplier = Math.pow(10, digits);
  total = Math.round(total * multiplier) / multiplier;
  //OUTPUT
  document.getElementById("output").innerHTML = "$ " + total;
}

function alarm() {
  //W07 Alarm
  //INPUT - from the computer
  var now = new Date();
  var month = now.getMonth();
  var dayOfMonth = now.getDate();
  var dayOfWeek = now.getDay();
  //PROCESSING
  let message = "";
  if (
    dayOfWeek == 0 ||
    dayOfWeek == 6 ||
    (month == 0 && dayOfMonth == 1) ||
    (month == 6 && dayOfMonth == 4) ||
    (month == 11 && dayOfMonth == 25)
  ) {
    message = "Sleep in.";
  } else {
    message = "Get up!";
  }
  //OUTPUT
  document.getElementById("output").innerHTML = message;
}

function weatherShoes() {
  //W06 Weather Shoes
  //INPUT - Receive the information on the day's weather
  let weather = document.getElementById("weather").value;
  //PROCESSING - Choose footwear
  let footwear;
  switch (weather) {
    case "hot":
      footwear = "sandals";
      break;
    case "rain":
      footwear = "galoshes";
      break;
    case "snow":
      footwear = "boots";
      break;
    default:
      footwear = "shoes";
      break;
  }
  //OUTPUT - Show the user the footwear set
  document.getElementById("output").innerHTML =
    "On " + weather + " weather you should wear " + footwear;
}

function checkSimpleCalc() {
  //W06 Simple Calc
  //INPUT - Get the data from the user.
  let x = parseFloat(document.getElementById("number1").value);
  let symbol = document.getElementById("symbol").value;
  let y = parseFloat(document.getElementById("number2").value);
  let userResult = parseFloat(document.getElementById("userResult").value);
  //PROCESSING - Do the calc and compare it.
  let calcResult;
  switch (symbol) {
    case "+":
      calcResult = x + y;
      break;
    case "-":
      calcResult = x - y;
      break;
    case "*":
      calcResult = x * y;
      break;
    case "/":
      calcResult = x / y;
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

function cylinderVolume() {
  //EXAM 1 - Pt. 2
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

function ataxPay() {
  //EXAM 1 - Pt. 1
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

function convertPoundsToKilograms() {
  //W05 Convert Pounds to Kilograms
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

function addNumbers() {
  //W04 Add Two Numbers Program
  //INPUT
  let x = parseFloat(document.getElementById("number1").value);
  let y = parseFloat(document.getElementById("number2").value);
  //PROCESSING
  let sum = x + y;
  //OUTPUT
  document.getElementById("output").innerHTML =
    "The sum of " + x + " and " + y + " equals " + sum + "!";
}
