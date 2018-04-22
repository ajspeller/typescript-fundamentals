"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(numLikes, isSelected) {
        this.numLikes = numLikes;
        this.isSelected = isSelected;
    }
    Like.prototype.onClick = function () {
        this.numLikes += this.isSelected ? -1 : 1;
        this.isSelected = !this.isSelected;
        console.log('selected: ', this.isSelected);
        console.log('number of likes: ', this.numLikes);
    };
    return Like;
}());
exports.Like = Like;
