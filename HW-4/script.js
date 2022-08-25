console.log('\n\n───────────────Home Work - 4 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

let fill = (count, message) => {

let fillArray = [];
    for (let i = 0; i < count; i++){
        fillArray.push(message);
    }
    console.log(fillArray);

}

fill(4,'ab');
fill(3,'hello');

console.log('\n──────────────────────────────────────┘');
//Task - 1 end

//Task - 2 begin
console.log('\n───────────────Task - 2 ──────────────┐');
let array = [1,2,6,3,4,5,6,7];
console.log(`Original array : [ ${array} ]`);

let without = (array, numOne, numTwo) => {
    let result = array.filter(function (item)
    {
        return (item != numOne) && (item != numTwo);
    }
    );
    console.log(`First number   : ${numOne}\nSecond number  : ${numTwo}`);
    console.log(`Array without numbers : [ ${result} ]`);
}

without(array, 5, 6);

console.log('\n──────────────────────────────────────┘');
//Task - 2 end

//Task - 3 begin
console.log('\n───────────────Task - 3 ──────────────┐');

let myArray = [1,2,3,1,9,3,4,6,2,7,];
console.log(`Original array : [${myArray}]`);

let unique = (myArray) => {
    console.log(`Unique array   : [${myArray.filter((item, index) => myArray.indexOf(item) == index)}]`);
}

unique(myArray);

console.log('\n──────────────────────────────────────┘');
//Task - 3 end

console.log('───────────────────────────────────────────┘');