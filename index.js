// Solution 1 

function totalCost(fees, savings, months, monthlyInterest) {
  if (fees<=savings) return fees
  let sum=fees;
  let percent=(fees-savings)*(monthlyInterest/100);
  for (let i=0;i<months;i++){
    sum+=percent
    };
  return sum
};

// Solution 2 

const totalCost = (fees,savings,months,monthlyInterest) => fees + Math.max( 0, fees - savings ) * months * monthlyInterest / 100 ;
