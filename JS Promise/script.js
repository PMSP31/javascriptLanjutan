// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=65a00e78&s=avengers",
//   success:(movie) => {console.log(movie)},
// });

// Promise
/* Object yang mempresentasikan keberhasilan / kegagalan
sebuah event yang asynchronous di masa akan datang.

states (fullfilled / rejected / pending)
callback (resolve / reject / finally)
aksi (then(resolve) / catch(reject)) */

// Contoh1
/* let ditepati = false;
const janji = new Promise((resolve, rejected) => {
  if (ditepati) {
    resolve("Janji telah ditepati");
  } else {
    rejected("Ingkar Janji...");
  }
});

janji.then((res) => console.log(`OK! : ${res}`)).catch((res) => console.log(`Error : ${res}`)); */

// Contoh2
/* let ditepati = false;
const janji = new Promise((resolve, rejected) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Janji ditepati setelah 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      rejected("Janji tidak ditepati setelah 2 detik");
    }, 2000);
  }
});

console.log("Mulai");
janji
  .finally(() => console.log("Selesai Menunggu 2 detik"))
  .then((res) => console.log(`OK : ${res}`))
  .catch((res) => console.log(`Gagal Menepati : ${res}`));
console.log("Selesai"); */

// Promise.all()
// menggabungkan beberapa promise menjadi 1
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Dilan",
        sutradara: "Pidi Baiq",
        tahun: "2018",
      },
    ]);
  }, 3000);
});

const setting = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        tempat: "Bandung",
        suhu: "20",
        kondisi: "Cerah",
      },
    ]);
  }, 3000);
});

Promise.all([film, setting]).then((res) => {
  const [film, setting] = res;
  console.log(film), console.log(setting);
});
