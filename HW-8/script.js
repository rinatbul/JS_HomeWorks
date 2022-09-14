console.log('\n\n───────────────Home Work - 8 ──────────────┐');
//Task - 1 begin
console.log('\n───────────────Task - 1 ──────────────┐');

function getX(){
    return this.x;
}

function getY(){
    return this.y;
}

function Point(x, y){
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
}

function Segment(beginPoint, endPoint){
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    // this.getBeginPoint = getBeginPoint;
    // this.getEndPoint = getEndPoint;
}

let point1 = new Point(1, 3);
let point2 = new Point(2, 4);
let segment = new Segment(point1, point2)

let isVertical = (line) => {
    x1 = line.beginPoint.getX();
    y1 = line.beginPoint.getY();
    x2 = line.endPoint.getX();
    y2 = line.endPoint.getY();

    if (x1 == x2 && y1 != y2){
        console.log('Line is vertical!');
    } else {
        console.log('Line is not vertical!');
    }
}

let isHorizontal = (line) => {
    x1 = line.beginPoint.getX();
    y1 = line.beginPoint.getY();
    x2 = line.endPoint.getX();
    y2 = line.endPoint.getY();

    if (x1 != x2 && y1 == y2){
        console.log('Line is horizontal!');
    } else {
        console.log('Line is not horizontal!');
    }
}

let isDiagonal = (line) => {
    x1 = line.beginPoint.getX();
    y1 = line.beginPoint.getY();
    x2 = line.endPoint.getX();
    y2 = line.endPoint.getY();

    if ((x1+1) == x2 && (y1+1) == y2){
        console.log('Line is Diagonal!');
    } else {
        console.log('Line is not Diagonal!');
    }
}

console.log(segment);
isVertical(segment);
isHorizontal(segment);
isDiagonal(segment);

console.log('\n──────────────────────────────────────┘');
//Task - 1 end