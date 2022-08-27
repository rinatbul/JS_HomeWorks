console.log('\n\n───────────────Home Work - 5 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');
let myArray = [9,5,10,20,14,-1,-48,5,8];
let counter = 0;
console.log(`  Array : ${myArray}`);
for (let i = 0; i < myArray.length; i++){
    if (counter < myArray[i] * myArray[i + 1]){
        counter = myArray[i] * myArray[i + 1];
    }
}
console.log(`  Max number is : ${counter}`);
console.log('\n──────────────────────────────────────┘');
//Task - 1 end

//Task - 2 begin
console.log('\n───────────────Task - 2 ──────────────┐');
let array = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9], [5, 6, 7, 8, 9, 6, 3], [5, 6, 7, 8, 9, 6, 3, 8, 5]];
let missingElements = (array) => {
    let resultArray = [];
    let result = [];
    
    // Формирование и сортировка массива со значениями длины элементов главного массива
    for (let item of array){
    resultArray.push(item.length); 
    resultArray.sort((a, b) => a - b); // сортировка числового массива
    }
    console.log(`  Element length  : [ ${resultArray} ]`);

    // Цикл поиска недостающего числа
    for (let i = 0; i < resultArray.length; i++){
        if ((resultArray[i + 1] - resultArray[i]) > 1 ){
            result.push(resultArray[i + 1] - 1);  
        }    
    }
    console.log(`  Missing numbers : ${result}`);
}

missingElements(array); // Вызов функции
console.log('\n──────────────────────────────────────┘');
//Task - 2 end

//Task - 3 begin
console.log('\n───────────────Task - 3 ──────────────┐');
let someArray = [19, 5, 42, 2, 77, 23, 3];
let twoMinimalNumbers = (array) => {
    let sortArray = [];
    let minNumber = Math.max(...someArray); // определяем максимальное значение в массиве
    console.log(`  Array : [ ${someArray} ]`);
    sortArray = someArray.sort((a, b) => a - b); // сортировка числового массива
    console.log(`  Summ of 2 minimal numbers : ${sortArray[0] + sortArray[1]}`);
}
twoMinimalNumbers(someArray);// Вызов функции
console.log('\n──────────────────────────────────────┘');
//Task - 3 end

//Task - Mexican wave begin
console.log('\n──────────Task - Mexican wave ──────────────────┐\n');
let string = 'hello';
let mexicanArray = [];
for (let i = 0; i < string.length; i++){
    mexicanArray.push(string.slice(0,i) + string.charAt(i).toUpperCase() + string.slice(i+1));
}
console.log(mexicanArray);
console.log('\n────────────────────────────────────────────────┘');
//Task - Mexican wave end
console.log('───────────────────────────────────────────┘');

