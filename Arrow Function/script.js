// Arrow Function
// bentuk ringkas dari function expression

// penulisan arrow function
// const tampilNama = nama => {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama("Paul"));

// 2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu},${nama}`;
// };
// console.log(tampilNama("Paul", "Malam"));

// implisit return
// const tampilNama = (nama) => `Halo ${nama}`;
// console.log(tampilNama("Paul"));

// tanpa parameter
// const salam = () => {
//   "Hello World";
// };
// console.log(salam);
// ==================================================
// this pada arrow function

// constructor function
// const Siswa = function () {
//   this.nama = "Paul";
//   this.umur = 17;
//   this.salam = function () {
//     console.log(`Hai! nama saya ${this.nama},dan saya berumur ${this.umur} tahun`);
//   };
// };

// const paul = new Siswa();

// Arrow Function
// const Siswa = function () {
//   this.nama = "Paul";
//   this.umur = 17;
//   this.salam = () => {
//     console.log(`Hai! nama saya ${this.nama},dan saya berumur ${this.umur} tahun`);
//   };
// };

// const paul = new Siswa();

const kotak = document.querySelector(".box");
kotak.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 500);
});
