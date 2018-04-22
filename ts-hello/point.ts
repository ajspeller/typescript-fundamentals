export class Point {
    constructor(private _x?: number, private _y?: number) { }
    draw() { // method
        console.log(this._x, this._y);
    }
}
