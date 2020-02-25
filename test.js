// var kabisat = 2024
// if (kabisat %4 == 0 && kabisat %100 != 0)
// console.log(kabisat + " adalah tahun kabisat")
// else 
// console.log(kabisat + " adalah bukan tahun kabisat")


// var cucian = 1
// while (cucian <= 20){
//     console.log('ini adalah baju ke-' + cucian)
//     cucian++
// if (cucian > 20)
//     console.log('MESIN MENYALA')
// else
//     console.log('MESIN MATI')}

// var siswa =  1
// var panjang = 1
// var pendek = 2
// if (siswa == panjang)
//     console.log("kalian dihukum")
// else
//     console.log("kalian dipuji")

// var i = 0;
// while(i < 40 )
// i++
// console.log(i);

// var i = 24;
// if(i % 2 ===0) {
//   console.log("mendapat pujian dari guru");
// } else {
//   console.log("mendapat hukuman dari guru");
// }

// var nama = "Mikael";
// var peran = "";

// if( nama === "" && peran === "") {
//     console.log("Nama harus diisi!");
// }

// if( nama === "Mikael") {
//   console.log("Halo " +nama+", pilih peranmu untuk memulai game!");
// }

// if( nama === "Nina" && peran === "Ksatria") {
//     console.log("Selamat datang di dunia Proxytia "+nama+". Halo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
// }

// if(nama === "Danu" && peran === "Tabib") {
//     console.log("Selamat datang di dunia Proxytia, "+nama+". Halo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.");
// }

// if( nama === "Zero" && peran === "Penyihir") {
//     console.log("Selamat datang di dunia Proxytia, "+nama+". Halo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
// }

var nama = "Elvan";
var peran = "Penyihir";
  
  if (nama === ""){
    console.log("Nama harus diisi!")
} else if (peran === ""){
    console.log("Halo " + nama +", Pilih peranmu untuk memulai game!")
} else if (peran === "Ksatria"){
    console.log("Selamat datang di Dunia Proxytia, " + nama +". Halo Ksatria " + nama+", kamu dapat menyerang dengan senjatamu!")
} else if (peran === "Tabib")  {
    console.log("Selamat datang di Dunia Proxytia, " + nama +". Halo Tabib " + nama+", kamu akan membantu temanmu yang terluka")
} else if (peran === "Penyihir"){
    console.log("Selamat datang di Dunia Proxytia, " + nama +". Halo Penyihir " + nama+", ciptakan keajaiban yang membantu kemenanganmu")
} else
    console.log("Halo " + nama + " Peran tersebut tidak ada")