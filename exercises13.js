function xo(str) {
    var car0 = 0;
    var carX = 0;

    for (var i = 0; i < str.length; i++){
        if (str[i] === 'o'){
            car0 += 1
        } else if (str[i] === 'x'){
            carX += 1
        }
    }
    if (car0 === carX){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true