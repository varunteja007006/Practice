/*
    Take a number and print a pyramid of #'s
    Input: 5
    Output:
         #
        ###
       #####
      #######
     #########
*/
function printPyramid(num) {
  const noOfCols = 2 * num - 1;
  const mid = Math.floor(noOfCols / 2);
  for (let row = 0; row < num; row++) {
    let str = "";
    for (let cols = 0; cols <= noOfCols; cols++) {
      if (cols >= mid - row && cols <= mid + row) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

printPyramid(5);
