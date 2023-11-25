/*
JavaScript

JavaScript Date object is used to represent a moment in time. This time value is since 
1 January 1970 UTC (Coordinated Universal Time).

We can create a date using the Date object by calling the new Date() constructor as shown 
in the below syntax.

-> new Date();
-> new Date(value);
-> new Date(dateString);
-> new Date(year, month, day, hours, minutes, seconds, milliseconds);

About the parameters passed
- value: This value is the number of milliseconds since January 1, 1970, 00:00:00 UTC.
- dateString: This represents a date format.
- year: This is represented by integer values ranging from the years 1900 to 1999.
- month: This is represented by integer values ranging from 0 for January to 11 for December.
- day: This is an optional parameter. This is represented by an integer value for the day of the month.
- hours: This is optional. This is represented by an integer value for the hour of the day.
- minutes: This is optional. This is represented by an integer value for the minute of a time.
- seconds: This is optional. This is represented by an integer value for the second of a time.
- milliseconds: This is optional. This is represented by an integer value for the millisecond of a time.

Return Values: It returns the present date and time if nothing as the parameter. 
Otherwise it returns the date format and time in which the parameter is given.

*/
// If nothing as parameter is given,
// it represent the present date and time.
let A = new Date();

// Printing present date and time.
console.log(A);

// When any dataString is given as the parameter
// then it return the same as the parameter
// including day name.
let B = new Date("June 22, 1985 07:19:35");

console.log(B);

// When some numbers are taken as the parameter
// then they are considered as year, month, day,
// hours, minutes, seconds, milliseconds
// respectively.
let C = new Date(1996, 10, 13, 5, 30, 22);

console.log(C);
