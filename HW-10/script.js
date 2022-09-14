console.log('\n\n───────────────Home Work - 10 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

let squareEveryDigit = (num) => {
    let array = String(num).split('');
    let resultArray = [];
    array.forEach((i) => {return resultArray.push(i*i)})
    console.log(`From ${num} "All in square" is ${resultArray.join('')}`);
}

squareEveryDigit(9119);
squareEveryDigit(2634);
squareEveryDigit(5943);

console.log('\n──────────────────────────────────────┘');
//Task - 1 end
console.log('\n────────────────────────────────────────────┘');