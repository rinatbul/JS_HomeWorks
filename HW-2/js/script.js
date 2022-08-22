console.log('───────────────Home Work - 2 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

let convertText = (myString) => {
    if (myString[0] != myString[0].toUpperCase()) { //Проверка первого символа на заглавность
        console.log(myString.split('').reverse().join('')); //преобразование строки в массив - > переворот -> преобразование массива в строку
    } else {
        console.log(myString);
    }
}

convertText('rinat!'); //Вызов функции convertText
console.log('\n──────────────────────────────────────┘');
//Task - 1 end

//Task - 2 begin
console.log('\n───────────────Task - 2 ──────────────┐');
let getNumberExplanation = (myNumber) => {
    switch(myNumber) {
        case 666:
            console.log('DEvil number');
            break;
        case 777:
            console.log('VIP number');
            break;
        case 314:
            console.log('PI number');
            break;
        case 007:
            console.log('James Bond number');
            break;
        default:
            console.log(null);
            break
    }
}

getNumberExplanation(007); //Вызов функции getNumberExplanation

console.log('\n──────────────────────────────────────┘');
//Task - 2 end
console.log('───────────────────────────────────────────┘');