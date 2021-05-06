// Spread Operator
// memecah iterables menjadi single element

const siswa = ["Paulus", "Mahardika", "Sarono", "Putro"];
// console.log(...siswa);

// memecah array index 0
// console.log(...siswa[0]);

// menggabungkan 2 array menjadi 1
// const guru = ["Ridho", "Budi", "Bambang"];
// const gabung = [...siswa, ...guru];
// sama seperti array.concat
// const gabung = siswa.concat(guru);
// jika menggunakan spread opeator bisa menambah element baru ditengah
// const gabung = [...siswa, "Rama", ...guru];

// console.log(gabung);

// meng-copy array tanpa merubah array pertama
// const siswa1 = [...siswa];
// siswa1[0] = "Paul";
// console.log(siswa1);
// console.log(siswa);

// const liSiswa = document.querySelectorAll("li");
// const sw = [...liSiswa].map((m) => m.textContent);
// console.log(sw);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((m) => `<span>${m}</span>`).join("");
nama.innerHTML = huruf;
