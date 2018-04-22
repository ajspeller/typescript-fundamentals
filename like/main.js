"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.Like(99, true);
var output = function () {
    console.log('selected: ', like.isSelected);
    console.log('number of likes: ', like.numLikes);
};
like.onClick();
output();
like.onClick();
output();
