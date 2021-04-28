// Execution Context, Hoisting & Scope

// console.log(nama);
// output -> nama is not defined
// var nama = "Paul";
// output -> undefined karena melakukan log dulu baru var

// creation phase pada global scope
// nama var = undefined
// nama function = fn() yang dikeluarkan semua code dalam function
// ini disebut hoisting diibiratkan seperti mengerek bendera ke atas
// window = global object
// this = window

// var nama = "Paul";
// console.log(nama);
// output -> Paul

// =========================================================================
// Closure
// digunakan untuk function factory
// digunakan untuk private method
// function init() {
//   let nama = "Paul";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
//   // untuk cek apakah masuk dalam closure scope
//   // console.dir(tampilNama);
// }
// init();

// factory function
// function salam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}! Selamat ${waktu}. Semoga harimu menyenangkan`);
//   };
// }
// bisa seperti ini
// salam("Pagi")("Paul");

// parameter waktu diambil dari sini
// let salamPagi = salam("Pagi");
// let salamSiang = salam("Siang");
// let salamMalam = salam("Malam");

// parameter nama dari sini
// salamPagi("Paul");
