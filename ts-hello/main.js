var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 88;
point.y = 34;
point.draw();
