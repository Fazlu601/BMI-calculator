// Specs
// Buatlah aplikasi website untuk menghitung Body Mass Index (BMI) berdasarkan standar yang telah ditetapkan.
// User harus memasukkan data Berat Badan dalam KG
// User harus memasukkan data Tinggi Badan dalam CM
// Rumus BMI untuk satuan KG dan CM adalah Berat Badan/(Tinggi Badan/100)^2
// Aplikasi harus menampilkan status BMI sesuai dengan standar berikut:
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5 – 24.9
// Overweight = 25 – 29.9
// Obesity = BMI of 30 or greater

//Code
//Import file module to get calculationBMI and getCategoryBMI from eksternal file.
import { calculationBMI } from "./calculation.js";
import { getCategoryBMI } from "./categories.js";

//Catch Weight and Height from user input.
const Weight = document.getElementById('weight');
const Height = document.getElementById('height');

//Catch submit form
const formSubmit = document.getElementById('submit');

//Catch grouping element to show the result BMI
const Result = document.getElementById('result');

//EventListener On Submit
formSubmit.addEventListener('submit', (el)=> {
    //Use preventDefault() to stop reloading if we submit the form
    el.preventDefault();
    
    if(document.querySelector('.result > p')){
        Result.innerHTML = ''
    }
    //Call calculationBMI() from calculation.js file. Send weight and height value to argument.
    const result = calculationBMI(Weight.value, Height.value);
    //Call getCategoryBMI() from categories.js file. Send result value from calculation result to argument.
    const category = getCategoryBMI(result);
    //Create a p element and nested the results into the element tag.
    const nodeElement = `<p class="fade-in">Your BMI is <strong>${result}</strong> which means You are <strong>${category}!</strong></p>`;
    //Use insertAdjacentHTML() method with 2 arguments to nested nodeElement.
    Result.insertAdjacentHTML('afterbegin', nodeElement);
    
}); 