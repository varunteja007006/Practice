// solve this
let n = 24;
let l = 0,
  r = 100,
  ans = n;
while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  if (mid * mid <= n) {
    ans = mid;
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}
console.log(ans); // 4

// Solve this
let str = "00000001111111";
let var_l = 0,
  var_r = str.length - 1,
  res = -1;
while (var_l <= var_r) {
  var var_mid = Math.floor((var_l + var_r) / 2);
  if (str[var_mid] == "1") {
    res = var_mid;
    var_r = var_mid - 1;
  } else {
    var_l = var_mid + 1;
  }
}
console.log(res); // 7

// solve this

let a = [1, 2, 3, 4, 5, 6];
var left = 0,
  right = 5;
var found = false;
var target = 5;
while (left <= right) {
  var midValue = Math.floor((left + right) / 2);
  if (a[midValue] == target) {
    found = true;
    break;
  } else if (a[midValue] < target) {
    left = midValue + 1;
  } else {
    right = midValue - 1;
  }
}
if (found) {
  print("YES");
} else {
  print("NO");
}
// output: YES
