// Async = mengubah function menjadi asynchronous
// Await = menunda eksekusi hingga proses asynchronous selesai(bisa digunakan berkali-kali dalam async function)

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, 3000);
    } else {
      reject("Terlalu Lama");
    }
  });
}

/* penambahan try(untuk resolve) & catch(untuk reject) */
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
