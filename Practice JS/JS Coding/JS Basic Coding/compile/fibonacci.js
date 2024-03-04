//0, 1, 1, 2, 3, 5, 8, 13, 21, ... fibonacci sequence
var n1 = 0, n2 = 1, nextTerm;
export var num = 4; // No of iterations
for (var i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
