/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const oneMeter = 3.281;
const oneLiter = 0.264;
const oneKilogram = 2.204;

const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

function convertToFeet(number)
{
    return Math.round((number * oneMeter) * 1000) / 1000;
}

function convertToMeter(number)
{
    return Math.round((number / oneMeter) * 1000) / 1000;
}

function convertToGallon(number)
{
    return Math.round((number * oneLiter) * 1000) / 1000;
}

function convertToLiter(number)
{
    return Math.round((number / oneLiter) * 1000) / 1000;
}

function convertToPound(number)
{
    return Math.round((number * oneKilogram) * 1000) / 1000;
}

function convertToKilo(number)
{
    return Math.round((number / oneKilogram) * 1000) / 1000;
}

function calculateAndDisplay()
{
    let numberToConvert = numberInput.value;
    const meterToFeet = convertToFeet(numberToConvert);
    const feetToMeter = convertToMeter(numberToConvert);
    const literToGallon = convertToGallon(numberToConvert);
    const gallonToLiter = convertToLiter(numberToConvert);
    const kiloToPound = convertToPound(numberToConvert);
    const poundToKilo = convertToKilo(numberToConvert);

    lengthEl.textContent = `${numberToConvert} meters = ${meterToFeet} feet 
    | ${numberToConvert} feet = ${feetToMeter} meters`;

    volumeEl.textContent = `${numberToConvert} liters = ${literToGallon} gallons 
    | ${numberToConvert} gallons = ${gallonToLiter} liters`;
    
    massEl.textContent = `${numberToConvert} kilos = ${kiloToPound} pounds 
    | ${numberToConvert} pounds = ${poundToKilo} kilos`;
}

convertBtn.addEventListener('click', calculateAndDisplay);