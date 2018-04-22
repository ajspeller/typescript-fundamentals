
class Point {
    constructor(private _x?: number, private _y?: number) { }
    draw() { // method
        console.log(this._x, this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be negative')
        } else {
            this._x = value;
        }
    }

    get y() {
        return this._y;
    }

    set y(value) {
        // ... not implemented
    }

}

let point = new Point(23, -56);
let x = point.x;
point.x = -99;
point.draw();
