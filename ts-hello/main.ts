
class Point {
    x: number; // field
    y: number; // field
    draw() { // method
        console.log(this.x, this.y);
    }
    getDistance(another: Point) { // another method
        // ...
    }
}

let point: Point = new Point();
point.x = 88;
point.y = 34;
point.draw();