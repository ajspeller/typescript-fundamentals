var count = 5; // type is number
count = 'a'; // not valid
var oscar; // type any
var score;
var lie;
var firstName;
var number;
var chuck = [1, true, 'cole'];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
