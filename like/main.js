"use strict";
exports.__esModule = true;
var like_1 = require("./like");
var like = new like_1.Like(99, true);
var output = function () {
    console.log('selected: ', like.selected);
    console.log('number of likes: ', like.count);
};
like.onClick();
output();
like.onClick();
output();
