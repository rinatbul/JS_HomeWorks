console.log('\n\n───────────────Home Work - 2 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

let multiplier =(number, count) => {
    let myResult = '';
    for (let i = 1; i <= count; i++){
        myResult += i * number + ' ';
    }
    console.log(myResult); // Вывод в строку!
}

multiplier(3,7); // Вызов функции
console.log('\n──────────────────────────────────────┘');
//Task - 1 end

//Task - 2 begin
console.log('\n───────────────Task - 2 ──────────────┐');
let reversePrint = (myCount) => {
    let myString = '';
    while (myCount > 0) {
        myString += myCount + ', ';
        myCount--;
        if (myCount == 0){
            myString += 'END';
        }
    }
    console.log(myString); // Вывод результата в строку!
}
reversePrint(8); //вызов функции
console.log('\n──────────────────────────────────────┘');
//Task - 2 end

//Task - 3 begin
console.log('\n───────────────Task - 3 ──────────────┐');

const text = 'London is capital of GB';
let getSubstring = (text, myLength) => {
    let subString = '' ;

    for (let i = 0; i < myLength; i++){
            subString += text[i];
    }
    console.log(subString);

}

getSubstring(text, 12);
console.log('\n──────────────────────────────────────┘');
//Task - 3 end
console.log('───────────────────────────────────────────┘');





