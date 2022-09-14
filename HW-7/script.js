console.log('\n\n───────────────Home Work - 7 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

let myString = 'Man in Black!  ';//Исходная строка

let lengthOfLastWord = (string) =>{
    console.log(`My String is : "${string}"`);// Демонстрация исходной строки
    let stringWithoutEndSpaces = string.trim(); //удаляет пробелы с начала и конца строки
    let stringArray = stringWithoutEndSpaces.split(' ');//Преобразование строки в массив
    console.log(`The last word is : ${stringArray.pop(stringArray)}`);// Вывод последнеднего элемента массива
}

lengthOfLastWord(myString); // Вызов функции
console.log('\n──────────────────────────────────────┘');
//Task - 1 end

//Task - 2 begin
console.log('\n───────────────Task - 2 ─────────────────────────────┐');
let myArray = [['fred', 30], ['barney', 40]]; // Исходный массив

fromPairs = (array) => {
    console.log('My array is : ',array); // Демонстрация исходного массива
    console.log('Returned object : ',Object.fromEntries(array));//Преобразование массива в объект
}

fromPairs(myArray);//Вызов функции
console.log('\n─────────────────────────────────────────────────────┘');
//Task - 2 end

//Task - 3 begin
console.log('\n───────────────Task - 3 ──────────────┐');
let data = {    user: 'ubuntu', 
                hosts: {    0: {name: 'web1',},
                            1: {name: 'web2',null: 3,active: false,},
                },
};
console.log('My object : ', data);//Демонтрация объекта
    let get = (obj, keys) => {
        console.log(keys.reduce((key, value) => key.hasOwnProperty(value) ? key[value] : null, obj));
    }
    get(data,['hosts',0]);
console.log('\n──────────────────────────────────────┘');
//Task - 3 end

//Task - 4 Задача заданная на уроке : подсчет количества элементов в строке
console.log('\n───────────────Bonus task ────────────┐');
let text = 'one two three two ONE one';
console.log(`My string : ${text}`);
let arrayOfWords = text.toLowerCase().split(' ');//преобразование строки в массив
let resultObject ={}; //результирующий объект

for (let i = 0; i < arrayOfWords.length; i++){
    if (resultObject[arrayOfWords[i]] != undefined){ //Условие: если в объекте есть ключ, к значению прибивить 1, иначе в значение записать 1.
        resultObject[arrayOfWords[i]] ++;
    } else {
        resultObject[arrayOfWords[i]] = 1;
    }
}
console.log(resultObject);
console.log('\n──────────────────────────────────────┘');
//Task - 4 end

