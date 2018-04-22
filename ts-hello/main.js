var number = 1;
// with var variables are scoped to the nearest function
var count = 2; // ES6 (2015)
// with let variables are scoped to the nearest block, not the nearest function
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally', i);
}
doSomething();
// tsc automatically converts the ts code to ES5
