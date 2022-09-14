console.log('\n\n───────────────Home Work - 9 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

class Circle {
    constructor(r){
        this.r = r;
    }
    getArea() {//Метод вычисляет площадь круга πr², оставить два знака после запятой
        console.log('Площадь круга πr² = ', (Math.pow(this.r,2)*3.14).toFixed(2));
    }
    getCircumference() {//Метод вычисляет длину окружности 2πr, оставить два знака после запятой
        console.log('Длина окружности 2πr = ', (this.r*2*3.14).toFixed(2));
    }
}

let circle = new Circle(3);// Создаем новый объект с аргументом 3
circle.getArea();
circle.getCircumference();

let circle1 = new Circle(5);// Создаем новый объект с аргументом 5
circle1.getArea();
circle1.getCircumference();

console.log('\n──────────────────────────────────────┘');
//Task - 1 end

console.log('\n────────────────────────────────────────────┘');