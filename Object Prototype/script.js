// membuat Object pada Javascript
// 1.Object Literal
// jika hanya satu object gunakan cara ini(tidak efektif untuk objek yang banyak)

// let dataSiswa = {
//   nama: "Paul Mahardika",
//   rate: 50,
//   makan: function (porsi) {
//     this.rate = this.rate * porsi;
//     console.log(`${this.nama} makan,sekarang ratenya ${this.rate} `);
//   },
// };
// jika membuat variabel baru tidak boleh memiliki nama yang sama.
// ============================================================================
// 2.Function Declrataion

// function siswa(nama, rate) {
//   let dataSiswa = {};
//   dataSiswa.nama = nama;
//   dataSiswa.rate = rate;

//   dataSiswa.makan = function (porsi) {
//     this.rate += porsi;
//     console.log(`Halo ${this.nama}!,Selamat makan!. rate mu menjadi ${this.rate}`);
//   };
//   dataSiswa.act = function (jam) {
//     this.rate -= jam;
//     console.log(`halo ${this.nama},kamu sedang beraktivitas. rate mu menjadi ${this.rate}`);
//   };

//   // wajib return
//   return dataSiswa;
// }

// let paul = siswa("Paul", 50);
// let mahardika = siswa("Mahardika", 25);
// ============================================================================
// 3.Constructor Function
// akan digunakan pembelajaran kedepan

// function siswa(nama, rate) {
//   this.nama = nama;
//   this.rate = rate;

//   this.makan = function (porsi) {
//     this.rate += porsi;
//     console.log(`Halo ${this.nama}!,Selamat makan!. rate mu menjadi ${this.rate}`);
//   };
//   this.act = function (jam) {
//     this.rate -= jam;
//     console.log(`halo ${this.nama},kamu sedang beraktivitas. rate mu menjadi ${this.rate}`);
//   };
// }
// // menggunakan keyword new
// let paul = new siswa("Paul", 20);
// ============================================================================
// ============================================================================
// Object.create()
// menggunakan Functional Declaration
// const methodSiswa = {
//   makan: function (porsi) {
//     this.rate += porsi;
//     console.log(`Halo ${this.nama}!,Selamat makan!. rate mu menjadi ${this.rate}`);
//   },
//   act: function (jam) {
//     this.rate -= jam;
//     console.log(`halo ${this.nama},kamu sedang beraktivitas. rate mu menjadi ${this.rate}`);
//   },
//   tidur: function (jam) {
//     this.rate += jam * 2;
//     console.log(`Selamat Tidur ${this.nama},rate akan bertambah menjadi ${this.rate}`);
//   },
// };

// function siswa(nama, rate) {
//   // Object.create()sama dengan {}. digunakan untuk menghubungkan object lainnya(biasanya memanggil parent)
//   let dataSiswa = Object.create(methodSiswa);
//   dataSiswa.nama = nama;
//   dataSiswa.rate = rate;

//   // wajib return
//   return dataSiswa;
// }

// let paul = siswa("Paul", 50);
// let mahardika = siswa("Mahardika", 25);
// ============================================================================
// ============================================================================
// versi prototype
// menggunakan Constructor Function

// function siswa(nama, rate) {
//   // Object.create()sama dengan {}. digunakan untuk menghubungkan object lainnya(biasanya memanggil parent)
//   // let this = Object.create(siswa.prototype);
//   this.nama = nama;
//   this.rate = rate;

//   // return this;
// }

// siswa.prototype.makan = function (porsi) {
//   this.rate += porsi;
//   return `Selamat Makan ${this.nama}! rate mu sekarang ${this.rate}`;
// };
// siswa.prototype.main = function (jam) {
//   this.rate -= jam;
//   return `Selamat Bermain ${this.nama}! rate mu sekarang ${this.rate}`;
// };
// siswa.prototype.tidur = function (jam) {
//   this.rate += jam * 2;
//   return `Selamat tidur ${this.nama}! rate mu sekarang ${this.rate}`;
// };

// let paul = new siswa(`Paul`, 10);
// ============================================================================
// Versi class
class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Selamat Makan ${this.nama}! rate mu sekarang ${this.energi}`;
  }
  main(jam) {
    this.energi -= jam;
    return `Selamat Bermain ${this.nama}! rate mu sekarang ${this.energi}`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Selamat tidur ${this.nama}! rate mu sekarang ${this.energi}`;
  }
}
let paul = new Siswa("Paul", 25);
