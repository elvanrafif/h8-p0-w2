function konversiMenit(menit) {
    var h = Math.floor(menit / 60)
    var m = Math.floor(menit % 60)

    if (String(h).length < 2){
        h = '0' + h;
    }
    if (String(m).length < 2){
        m = '0' + m;
    }
    return h + ':' + m
}

  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00