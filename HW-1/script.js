// task 1: begin 
console.log('|---------------------task-1------------------------|');

console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');

console.log('---------------------------------------------------');
// task 1: end

// task 2: begin
console.log('\n|---------------------task-2------------------------|');
 
let family = 'Targaryen', pet = 'Dragon';
console.log(family);
console.log('and');
console.log(pet);

console.log('---------------------------------------------------');
// task 2: end 

// task 3: begin
console.log('\n|---------------------task-3------------------------|');

const eurosCount = 65;
let usDollar, ruRuble; //переменные для курсов рубля и доллара
console.log(`You have ${eurosCount} euro`);

console.log('Today 18.08.2022, Exchange Rates is:')
console.log('1 euro = 1.02 dollars');
console.log('1 dollar = 60.5 rubles');

usDollar = eurosCount * 1.02; //перевод евро в доллары, результат присвоили переменной
ruRuble = usDollar * 60.5; //перевод полученной суммы в долларах в рубли, результат поместили в переменную.
console.log(`Your ${eurosCount} euros = ${usDollar.toFixed(1)} US dollars`);
console.log(`Your ${usDollar} dollars = ${ruRuble.toFixed(1)} rubles`);

console.log('---------------------------------------------------');
// task 3: end

// task 4: begin
console.log('\n|---------------------task-4------------------------|');

console.log( 3 **5 + (4-2));//не хватало скобки

console.log('---------------------------------------------------');
// task 4: end

// task 5: begin
console.log('\n|---------------------task-5------------------------|');

console.log(`3 to the power of 5 is ${3 ** 5}`);
console.log(`-8 divided by -4 is ${-8 / -4}`);
console.log(`remainder of 100 divided by 3 is ${100 % 3}`);
console.log(`the sum of the three previous expressions is ${(3 ** 5) + (-8 / -4) + (100 % 3)}`);

console.log('---------------------------------------------------');
// task 5: end