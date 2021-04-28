// function yang disimpan sebagai argument disebut callback
// function yang mempunyai callback disebut higher order function

const angka = [-2, 5, 0, 4, -1, 3, 2];

// mencari angka >=3
// ==============================================================================
// for
// const angkaBaru = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     angkaBaru.push(angka[i]);
//   }
// }
// console.log(angkaBaru);
// ==============================================================================
// filter
// mencari angka lebih besar sama dengan 3,dan membuat array baru
// lebih efektif daripada for

// const angkaBaru = angka.filter((i) => i >= 3);
// console.log(angkaBaru);
// ==============================================================================
// map
// memetakan tiap element dari array angka menggunakan fungsi yang baru
// array angka dikalikan 2

// const angkaBaru = angka.map((i) => i * 2);
// console.log(angkaBaru);
// ==============================================================================
// reduce
// melakukan sesuatu terhadap semua elemen
// menjumlahkan seluruh elemen pada array
// const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// terdapat satu nilai awal yaitu 0 (setelah currentValue),bisa dibuah
// -2 + 5 + 0 + 4 + -1 + 3 + 2
// console.log(angkaBaru);
// ==============================================================================
// chaining
// cari angka > 5
// dikalikan 5
// jumlahkan

// const hasil = angka
//   .filter((i) => i > 2)
//   //   3,4,5
//   .map((i) => i * 4)
//   //   12,16,20
//   .reduce((acc, curr) => acc + curr);
// //  12+16+20 = 48
// console.log(hasil);
