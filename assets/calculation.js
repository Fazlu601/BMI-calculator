// Calculate BMI with = Width / (Height / 100)^2 after that return the result value.
const calculationBMI = (weight, height) => (weight / (Math.pow(height / 100, 2))).toFixed(1);

export {calculationBMI};