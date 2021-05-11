// Rest Parameter
/* Merepresentasikan argument
pada function dengan jumlah yang tidak terbatas menjadi sebuah array */

// function jumlah(...angka) {
//   /* let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total; */

//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlah(1, 2, 3, 4, 5));

// array destructuring
/* const kelompok1 = ["Paul", "Saka", "Satria", "Charles", "Arya"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota); */

/* const team = {
  pm: "Paul",
  frontEnd1: "Charles",
  frontEnd2: "Arya",
  backEnd: "Saka",
  uxUI: "Satria",
};

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam); */

// Filtering
function filter(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filter("string", 1, 2, true, "Number", false));
