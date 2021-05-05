// Destructuring Function return value

// function kalkulasi(a, b) {
//   return [a + b, a * b, a / b];
// }

// const [jumlah, kali, bagi] = kalkulasi(10, 5);
// console.log(jumlah);
// console.log(kali);
// console.log(bagi);
// harus sesuai urutan

// versi destructuring
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kali, kurang, bagi, tambah } = kalkulasi(10, 5);
// console.log(kali);
// console.log(kurang);
// tidak berurutan karena memanggil sesuai nama property
// ========================================================
// Destructuring Function Arguments

// const siswa1 = {
//   nama: "Paul Mahardika",
//   umur: 17,
//   kelas: "Rekayasa Perangkat Lunak",
// };
// versi biasa

// function cetakSiswa(siswa) {
//   return `Halo, Nama Saya ${siswa.nama}. Saya berusia ${siswa.umur} tahun`;
// }
// console.log(cetakSiswa(siswa1));

// versi destructuring
// function cetakSiswa({ nama, umur }) {
//   return `Halo, Nama Saya ${nama}. Saya berusia ${umur} tahun`;
// }

// console.log(cetakSiswa(siswa1));

// Versi Object Kompleks
// const siswa1 = {
//   nama: "Paul Mahardika",
//   umur: 17,
//   kelas: "Rekayasa Perangkat Lunak",
//   nilai: {
//     tugas: 80,
//     uas: 90,
//   },
// };

// function cetakSiswa({ nama, umur, nilai: { tugas, uas } }) {
//   return `Halo, Nama Saya ${nama}. Saya berusia ${umur} tahun. Nilai UAS saya adalah ${uas},dan nilai Tugas Saya ${tugas}`;
// }

// console.log(cetakSiswa(siswa1));
