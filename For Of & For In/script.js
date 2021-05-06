// for..of
// Array
// const siswa = ["Paul", "Saka", "Charles", "Arya", "Satria"];

// for (let i = 0; i < siswa.length; i++) {
//   console.log(siswa[i]);
// }

// siswa.forEach((s) => console.log(s));

// versi For..of
// for (const s of siswa) {
//   console.log(s);
// }
// ==========================================================
// Strings
// const nama = "Paul Mahardika";

// for (const n of nama) {
//   console.log(n);
// }
// ===========================================================
// Node List
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }
// ============================================================
// Arguments
// function jAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jAngka(1, 2, 3, 4, 5));
// =============================================================
// for..in
// Object
// const siswa = {
//   nama: "Paul Mahardika",
//   umur: 17,
//   email: "pmsp3108@gmail.com",
// };

// for (const s of siswa) {
//   console.log(s);
// }
// // Error

// for (s in siswa) {
//   console.log(s);
// //   output nama property
// }

// for (s in siswa) {
//   console.log(siswa[s]);
//   // output value
// }
