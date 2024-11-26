/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert")
let inputEl = document.getElementById("unit-input")
let lengthEl = document.getElementById("length-info")
let volumeEl = document.getElementById("volume-info")
let massEl = document.getElementById("mass-info")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value
    lengthEl.innerHTML = 
    `${inputValue} meters = ${ (inputValue * meterToFeet).toFixed(3) } feet | 
     ${inputValue} feet   = ${ (inputValue / meterToFeet).toFixed(3) } meters`
                          
    volumeEl.innerHTML = 
    `${inputValue} liters  = ${ (inputValue * literToGallon).toFixed(3) } gallons |  
     ${inputValue} gallons = ${ (inputValue / literToGallon).toFixed(3) } liters`
     
    massEl.innerHTML = 
    `${inputValue} kilograms = ${ (inputValue * kiloToPound).toFixed(3) } pounds | 
     ${inputValue} pounds    = ${ (inputValue / kiloToPound).toFixed(3) } kilograms`
})