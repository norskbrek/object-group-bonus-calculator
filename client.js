const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
console.log( 'js' );

for( let i = 0; i < employees.length; i++ ){
  console.log( employees[i] );
}

// bonusCalculator function
function bonusCalculator(employee){
  let newEmployeeObject = {
    name: employee.name,
    totalCompensation: Number(employee.annualSalary)
  };

    // if statement for calculating compensation/bonus
    if ( employee.reviewRating <= 2 ) {
      newEmployeeObject.bonusPercentage = 0;
      newEmployeeObject.totalBonus = 0;
    } else if ( employee.reviewRating == 3 ) {
      newEmployeeObject.bonusPercentage = .04;
      newEmployeeObject.totalBonus = employee.annualSalary * .04;
      newEmployeeObject.totalCompensation += newEmployeeObject.totalBonus;
    } else if ( employee.reviewRating == 4 ) {
      newEmployeeObject.bonusPercentage = .06;
      newEmployeeObject.totalBonus = employee.annualSalary * .06;
      newEmployeeObject.totalCompensation += newEmployeeObject.totalBonus;
    } else if ( employee.reviewRating == 5 ) {
      newEmployeeObject.bonusPercentage = .1;
      newEmployeeObject.totalBonus = employee.annualSalary * .1;
      newEmployeeObject.totalCompensation += newEmployeeObject.totalBonus;
    }

    // if statement for adjusting bonus
    if ( employee.employeeNumber.length == 4 ) {
      newEmployeeObject.bonusPercentage += .05;
    }

    // if statement for adjusting bonus
    if ( employee.annualSalary > 65000) {
      newEmployeeObject.bonusPercentage -= .01;
    }

    // if statement for adjusting bonus
    if ( newEmployeeObject.bonusPercentage < 0 ) {
      newEmployeeObject.bonusPercentage = 0;
    } else if (newEmployeeObject.bonusPercentage > .13 ) { 
      newEmployeeObject.bonusPercentage = .13;
    }
  
  return newEmployeeObject;
}

console.log( bonusCalculator( employees[0] ) );
console.log( bonusCalculator( employees[1] ) );
console.log( bonusCalculator( employees[2] ) );
console.log( bonusCalculator( employees[3] ) );
console.log( bonusCalculator( employees[4] ) );