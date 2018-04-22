
class Point {
    constructor(private x?: number, private y?: number) { }
    draw() { // method
        console.log(this.x, this.y);
    }
}

let point = new Point(23, 56);
point.draw();
