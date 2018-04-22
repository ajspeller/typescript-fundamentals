"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_numLikes, _isSelected) {
        this._numLikes = _numLikes;
        this._isSelected = _isSelected;
    }
    Like.prototype.onClick = function () {
        this._numLikes += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(Like.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        set: function (value) {
            if (value >= 0) {
                this._numLikes = value;
            }
            else {
                throw new Error('Number of likes must be positive');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            this._numLikes = value;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
