// Var
console.log(a);
var a = 10;
// -> undefined

// let
// perilakunya sama dengan bahasa pemrograman yang lain
// menganut block scope
console.log(a);
let a = 10;
// -> error
let b = 1;
console.log(b);
// -> 1

// const
// digunakan jika isi variabel tidak akan diubah lagi
// untuk meminimalisir perubahan state
const c = 10;
c = 20;
//  -> error
