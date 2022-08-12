// it is a first method

function getArea(number) {
    if (number === undefined) throw new Error("Будь ласка, введіть радіус");
    if (!Number.isFinite(number) || number < 0) throw new Error("Повинно бути числове значення!");
    return Math.PI * Math.pow(number, 2);
}
try {
    alert(getArea(+prompt(" Будь ласка, введіть радіус")));
} catch (error) {
    alert(error.mesage);
}

// it is a second method

let Area, Environment;
let Radius = prompt("Enter Radius ");

function calculate(Radius) {
    CalEnvironment(Radius);
    CalArea(Radius);
}
function CalEnvironment(Radius) {
    Environment = Radius * 3.14 * 2;
    console.log("Environment is : " + Environment);
}
function CalArea(Radius) {
    Area = Radius * Radius * 3.14;
    console.log("Area is : " + Area);
}
calculate(Radius);
function calculateArea(myRadius) {
    return myRadius * myRadius * Math.PI;
}

 myRadius = parseFloat(prompt("Enter the radius of your circle in cm:",0));
 area = calculateArea(myRadius);

alert("A circle with a " + myRadius + "centimeter radius has an area of " + area + "centimeters. ");