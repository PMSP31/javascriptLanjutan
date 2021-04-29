// ambil semua element video (li)
// jadikan array
const aVideo = Array.from(document.querySelectorAll("[data-duration]"));

// pilih Javascript Lanjutan
let jsLanjut = aVideo
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float,ubah menit jadi detik
  .map((waktu) => {
    // split duration. misal 10:30 -> 10,30
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);
// ubah format jadi jam:menit:detik

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const tVideo = aVideo.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const jmlVideo = document.querySelector(".jumlah-video");
jmlVideo.textContent = `${tVideo} Video.`;

console.log(tVideo);
