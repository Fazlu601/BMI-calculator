// Make function with value parameter from calculation result, do conditional statement and return BMI category result.
const getCategoryBMI = value => {

    if(value < 18.5) { return 'Underweight'; }
    if(value < 24.9) { return 'Normal'; }
    if(value < 29.9) { return 'Overweight' }
    if(value >= 30) { return 'Obesity' }
}

export {getCategoryBMI}