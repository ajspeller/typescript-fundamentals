
// one method to ensure that the correct type of object is passed
// inline type annonation
let drawPoint = (point: { x: number, y: number }) => {
    // ...
};

drawPoint({
    x: 2,
    y: 88
});

// or use an interface 
interface Point { x: number, y: number };

let drawPoint2 = (point: Point) => {
    // ...
};

drawPoint2({
    x: 2,
    y: 88
});