# JS is weird

[] + {} -> '[object Object]'
{} + [] -> 0
{} + {} -> '[object Object][object Object]'
[] + [] -> ''

0 == [] // true
0 == "0" // true
"0" == [] // false

2 + '2' -> '22'
2 - '2' -> 0

{} + 'x' -> NaN

Math.min() > Math.max() // true

0.1 + 0.2 -> 0.30000000000000004

null > 0 // false
null == 0 // false
null >= 0 // true

typeof NaN -> "number"

[] == ![] // true

3 > 2 > 1 -> false

typeof null -> 'object'

parseInt(null, 24) -> 23

(![]+[])[+[]]+([][]]+[])[+[]]+([][]]+[])[+!![]] -> fun

parseInt(0.0000005) -> 5

NaN === NaN -> false

[,,,].toString() -> ',,'

[]\*[] -> 0️⃣

[2]\*[2] -> 4

[2,2]\*[2,2] -> NaN

parseInt(Infinity,10) -> NaN
parseInt(Infinity,30) -> 13693557269

['1','7','11'].map(parseInt) -> [1,NaN,3]
