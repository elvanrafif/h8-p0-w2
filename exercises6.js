// 1. Melakukan Looping Menggunakan While

var code1 = 2
var code2 = 20

console.log("LOOPING PERTAMA")
while (code1 <= 20){
    console.log(code1 + " - I love Coding")
    code1 += 2
}
console.log("LOOPING KEDUA")
while (code2 >= 2){
    console.log(code2 + " - I will become fullstack developer")
    code2 -= 2
}

// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for (code1 = 1; code1 <= 20; code1++){
    console.log(code1 + " - I love Coding")
}
console.log("LOOPING KEDUA")
for (code2 = 20; code2 >= 1; code2--){
    console.log(code2 + " - I will become fullstack developer")
}

// 3. Angka Ganjil dan Genap

var counter1 = 1;
while (counter1 <=100){
    if (counter1 % 2 == 0){
        console.log("Genap")
    }
    else{
        (counter1 % 2 !== 0)
        console.log("Ganjil")
    }
    counter1++
}

var counter2 = 1;
while (counter2 <=100){
    if (counter2 % 3 == 0){
        console.log(counter2 + " kelipatan 3")
    }
    else{
        console.log("")
    }
    counter2 += 2
}

var counter3 = 1;
while (counter3 <=100){
    if (counter3 % 6 == 0){
        console.log(counter3 + " kelipatan 6")
    }
    else{
        console.log("")
    }
    counter3 += 5
}

var counter4 = 1;
while (counter4 <=100){
    if (counter4 % 10 == 0){
        console.log(counter4 + " kelipatan 10")
    }
    else{
        console.log("")
    }
    counter4 += 9
}