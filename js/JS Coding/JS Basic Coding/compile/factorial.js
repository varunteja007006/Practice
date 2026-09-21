// factorial of 5 = 1*2*3*4*5
export var num = 5;
if (num < 0) {
    console.log("Not valid number");
}
else if (num === 0) {
    console.log("1");
}
else {
    var fact = 1;
    for (var index = 1; index <= num; index++) {
        fact = fact * index;
    }
    console.log(fact);
}
