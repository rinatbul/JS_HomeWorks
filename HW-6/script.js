console.log('\n\n───────────────Home Work - 6 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐\n');
let dragonMaster = {
    name: 'Rin',
    age: 35,
    dragon: 'drogon',
};

let check = (obj) => {
    let string = 'dragon';
    console.log(obj);
        if ((Object.keys(obj).length != 0) && (Object.hasOwn(obj,string))){
            console.log(obj[string].toUpperCase());
        }
}
check(dragonMaster);
console.log('\n──────────────────────────────────────┘');
//Task - 1 end

//Task - 2 begin
console.log('\n───────────────Task - 2 ──────────────┐');
const   fruits = [{'apple': 5, 'banana': 5, 'orange': 5}, 
                    {'banana': 1, 'kiwi': 2},  
                    {'banana': 1, 'apple': 1,'orange': 3},];
console.log(fruits);
let maximum = 0;
fruits.forEach(console.log(fruits));


console.log('\n──────────────────────────────────────┘');
//Task - 2 end