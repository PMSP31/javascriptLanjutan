// expression javascript yang dapat membongkar nilai array atau properti javascript
// ke dalam variabel terpisah

// Array
// const namaLengkap = ["Paulus", "Mahardika", "Sarono", "Putro"];

// const [namaDepan, namaTengah1, namaTengah2, namaBelakang] = namaLengkap;
// console.log(namaDepan);
// console.log(namaTengah1);
// console.log(namaTengah2);
// console.log(namaBelakang);

// skipping items
// const [namaDepan, , , namaBelakang] = namaLengkap;
// console.log(namaDepan);
// Paulus
// console.log(namaTengah1);
// error
// console.log(namaTengah2);
// error
// console.log(namaBelakang);
// Putro

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// rest parameter
// const [a, ...value] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// console.log(value);
// ========================================================
// Destructuring Object
// const siswa = {
//   nama: "Paul Mahardika",
//   umur: 17,
// };
// // menggunakan kurung kurawal
// // nama variabel harus sama dengan propertynya
// const { nama, umur } = siswa;
// console.log(nama);
// console.log(umur);

// Assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "Paul Mahardika",
//   umur: 17,
// });
// console.log(nama);
// console.log(umur);

// Assign ke variable baru
// const siswa = {
//   nama: "Paul Mahardika",
//   umur: 17,
// };
// const { nama: n, umur: u } = siswa;
// console.log(n);
// console.log(u);

// memberikan default value
// const siswa = {
//   nama: "Paul Mahardika",
//   umur: 17,
//   email: "pmsp3108@gmail.com",
// };
// // ditampilkan ketika tidak ada property dalam objek
// const { nama, umur, email = "email@default.com" } = siswa;
// console.log(nama);
// console.log(umur);
// console.log(email);

// memberi nilai default + assign ke variabel baru
// const siswa = {
//   nama: "Paul Mahardika",
//   umur: 17,
//   email: "pmsp3108@gmail.com",
// };
// // ditampilkan ketika tidak ada property dalam objek
// const { nama: n, umur: u, email: e = "email@default.com" } = siswa;
// console.log(n);
// console.log(u);
// console.log(e);

// rest parameter
// const siswa = {
//   nama: "Paul Mahardika",
//   umur: 17,
//   email: "pmsp3108@gmail.com",
// };
// // ditampilkan ketika tidak ada property dalam objek
// const { nama: n, ...value } = siswa;
// console.log(value);

// Mengambilfield pada object, setelah dikirim sebagai parameter untuk function
// const siswa = {
//   id: 19008532,
//   nama: "Paul Mahardika",
//   umur: 17,
//   email: "pmsp3108@gmail.com",
// };
// function getIDSiswa({ id }) {
//   return id;
// }
// console.log(getIDSiswa(siswa));
