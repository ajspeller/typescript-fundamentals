
class Point {
    private x: number; // field
    private y: number; // field
    constructor(x?: number, y?: number) { // optional parameters
        this.x = x;
        this.y = y;
    }
    draw() { // method
        console.log(this.x, this.y);
    }
}

let point = new Point(23, 56);
point.draw();

