// Asynchronous
// =============
// Callbacks
/* function yang dikirimka sebagai 
parameter pada function yang lain */

// Synchronous Callbacks
/* function halo(nama) {
  alert(`Halo ${nama}`);
}
 */
/* function showPrompt(callback) {
  const nama = prompt("Masukan Nama : ");
  callback(nama);
}

showPrompt((nama) => alert(`Halo, ${nama}`)); */

// Asynchronous Callbacks
// MENGGUNAKAN AJAX
/* function getDataSiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

getDataSiswa(
  "data/siswa.json",
  (result) => {
    const siswa = JSON.parse(result);
    siswa.forEach((s) => console.log(s.nama));
  },
  () => {}
); */

// JQUERY
/* $.ajax({
  url: "data/siswa.json",
  success: (siswa) => {
    siswa.forEach((s) => console.log(s.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
}); */
