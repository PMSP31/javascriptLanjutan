// hanya bisa dibuat dengan backtick `code`

// penulisan template literal
// `string text`
// multi-line string
// `   string text 1
//     string text 2
//     string text 3`
// embedded expression
// `string text ${expression} string text`
// tagged template
// tag `string text ${expression} string text`

// contoh
// const nama = "Paulus Mahardika S.P";
// const umur = 17;

// console.log(`halo nama saya ${nama}, saya ${umur} tahun`);
// halo nama saya Paulus Mahardika S.P, saya 17 tahun
// =============================================================
// HTML Fragments

// const siswa = [
//   {
//     nama: "Paul Mahardika",
//     nis: "19008532",
//   },
//   {
//     nama: "Paulus Mahardika Sarono",
//     nis: "19008533",
//   },
//   {
//     nama: "Paulus Mahardika Putro",
//     nis: "19008534",
//   },
// ];

// looping
// const el = `<div class="siswa">
//     ${siswa
//       .map(
//         (s) => `<ul>
//         <li>${s.nama}</li>
//         <li>${s.nis}</li>
//     </ul>`
//       )
//       .join("")}
//     </div>`;
// console.log(el);

// ternary
// const lagu = {
//   judul: "Seberapa Pantas",
//   penyanyi: "Sheila On 7",
//   cover: "James Adam",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>Judul :${lagu.judul}</li>
//         <li>Penyanyi :${lagu.penyanyi}</li>
//         ${lagu.cover ? ` <li>Cover by : ${lagu.cover} </li>` : " "}</li>
//     </ul>
// </div>`;

// Nested

const siswa = {
  nama: "Paul Mahardika",
  mapel: ["PWPB", "Basis Data", "PBO", "PKK"],
};

function showMapel(mapel) {
  return `
        <ol>
            ${mapel.map((mp) => `<li>${mp}</li>`).join("")}
        </ol>
    `;
}

const el = `<div class=siswa>
    <h2>${siswa.nama}</h2>
    <h4>Mata Pelajaran : </h4>
    ${showMapel(siswa.mapel)}
</div>`;

document.body.innerHTML = el;
