function addNumbers() {
    //INPUT
    let x = parseFloat(document.getElementById('number1').value);
    let y = parseFloat(document.getElementById('number2').value);
    //PROCESSING
    let sum = x + y;
    //OUTPUT
    document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";
}

function convertPoundsToKilograms() {
    //INPUT - Receive the number in Pounds.
    let lbs = parseFloat(document.getElementById('pounds').value);
    //PROCESSING Pt.1 - 1 lbs equals 0.45359237 kg, so we should let the computer know that:
    let kg = 0.45359237 * lbs;
    //PROCESSING Pt.2 - Then, round the number to one digit after the decimal:
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    lbs = Math.round(lbs * multiplier) / multiplier;
    kg = Math.round(kg * multiplier) / multiplier;
    //OUTPUT - Display the result found through processing.
    document.getElementById('output').innerHTML = lbs + " pounds equals " + kg + " kilograms."
}