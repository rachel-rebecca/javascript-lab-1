"use strict"

// Extended challenge
let hours = prompt("Enter hours worked:");
let wage = prompt("Enter hourly wage:");
const fortyPay = wage * hours;
let overtimeWage = wage * 1.5;
let overtimeHours = hours - 40;
let overtime = (overtimeWage * overtimeHours) + (wage * 40);

function pay (hours, wage) {
    if (hours <= 40) {
       console.log(`Your pay is: ${fortyPay}`);
    } else {
       console.log(`Your pay is: ${overtime}`);
    }
}
pay(hours, wage); 


function milDollars () {
    let weeks = 1000000 / ((overtimeWage * overtimeHours) + (wage * 40));
    let weeksRounded = Math.round(weeks);
    console.log( `It would take you ${weeksRounded} weeks to make a million dollars`);
}

milDollars(hours, wage);