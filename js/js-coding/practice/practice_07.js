/*
    Create # steps for the number given
    Example if number given is 5, then the output should be:
    #
    ##
    ###
    ####
    #####
*/
function printHashSteps(num) {
  const pattern = "#";
  // solution 1
  for (let index = 1; index <= num; index++) {
    console.log(pattern.repeat(index));
  }
  // solution 2
  for (let index = 1; index <= num; index++) {
    let tempStr = "";
    let count = 0;
    while (count < index) {
      tempStr += pattern;
      count += 1;
    }
    console.log(tempStr);
  }
}

printHashSteps(5);
