var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log(this._x, this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be negative');
            }
            else {
                this._x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            // ... not implemented
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(23, -56);
var x = point.x;
point.x = -99;
point.draw();
