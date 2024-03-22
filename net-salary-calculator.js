// TODO: Challenge 3: Net Salary Calculator
//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

//input variable
const prompt = require("prompt-sync")();

//calculating gross salary
function grossSalary(salary, benefits) {
  return salary + benefits;
}

// calculating payee per month
function calculatePayeeMonthly(salary) {
  if (salary <= 24000) {
    return salary * 0.1;
  } else if (salary <= 32333) {
    return salary * 0.25;
  } else if (salary <= 500000) {
    return salary * 0.3;
  } else if (salary <= 800000) {
    return salary * 0.325;
  } else {
    return salary * 0.35;
  }
}

// calculating payee per year
function calculatePayeeYearly(salary) {
  let annualSalary = salary * 12;
  if (annualSalary <= 288000) {
    return annualSalary * 0.1;
  } else if (annualSalary <= 388000) {
    return annualSalary * 0.25;
  } else if (annualSalary <= 6000000) {
    return annualSalary * 0.3;
  } else if (annualSalary <= 9600000) {
    return annualSalary * 0.325;
  } else {
    return annualSalary * 0.35;
  }
}

//calculate NHIF
function calculateNHIF(grossSalary) {
  //array with the limits
  const deductions = [
    { limit: 5999, deduction: 150 },
    { limit: 7999, deduction: 300 },
    { limit: 11999, deduction: 400 },
    { limit: 14999, deduction: 500 },
    { limit: 19999, deduction: 600 },
    { limit: 24999, deduction: 750 },
    { limit: 29999, deduction: 850 },
    { limit: 34999, deduction: 900 },
    { limit: 39999, deduction: 950 },
    { limit: 44999, deduction: 1000 },
    { limit: 49999, deduction: 1100 },
    { limit: 59999, deduction: 1200 },
    { limit: 69999, deduction: 1300 },
    { limit: 79999, deduction: 1400 },
    { limit: 89999, deduction: 1500 },
    { limit: 99999, deduction: 1600 },
  ];
//function for iterating over the array
  for (const { limit, deduction } of deductions) {
    if (grossSalary <= limit) {
      return deduction;
    } else {
      return 1700; // Default deduction for salaries above 99999
    }
  }
}

//calculate nssf
function calculateNSSF(grossSalary) {
  return grossSalary * 0.12; // NSSF rate of 12%
}

//summing up the deductions
function totalDeductions(payee, nhif, nssf) {
  return payee + nhif + nssf;
}

//getting net salary
function finalNetSalary(grossSalary, deductions) {
  return grossSalary - deductions;
}

//using the input and passing to the calculator
let inputSalary = parseInt(prompt("Input your monthly salary: "));
let inputBenefits = parseInt(prompt("Input your benefits: "));
let gross = grossSalary(inputSalary, inputBenefits);
let payeeMonthly = calculatePayeeMonthly(gross);
let payeeAnnually = calculatePayeeYearly(gross);
let nhif = calculateNHIF(gross); // Implement NHIF calculation
let nssf = calculateNSSF(gross);
let tax = totalDeductions(payeeMonthly, nhif, nssf);
let taxAnnual = totalDeductions(payeeAnnually, nhif, nssf);
let netSalary = finalNetSalary(gross, tax);
let netSalaryAnnual = finalNetSalary(gross, taxAnnual);

console.log(
  `Your monthly gross salary is ${gross}. You have a PAYEE of ${payeeMonthly}, NHIF of ${nhif}, and NSSF of ${nssf}. Hence, your total deductions are ${tax}. Your net salary is ${netSalary}. Your yearly PAYEE is ${payeeAnnually} and your net salary for the year is ${netSalaryAnnual}.`
);
