/*

******
******
******
******
******

*/


var rows2 = 5

for (i= 1; i <= rows2; i++) {
    var bintang = ""
    for(var j = 1; j <= rows2; j++) {
        bintang += "*"
    }
    console.log(bintang)
}


/*

*
**
***
****
*****

*/

var baris = 5;

for(var i = 1; i <= baris; i++) {
    var bintang = '';
    for(var j = 1; j <= i; j++) {
        bintang += '*';        
    }
    console.log(bintang);
}


/*

*****
****
***
**
*

*/
var row = 1;

for(i = 5; i >= row; i--) {
    var bintang = '';
    for(j = 1; j <= i; j++) {
        bintang += '*';        
    }
    console.log(bintang);
}