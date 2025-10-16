const phrases = [
  "Informatics student",
  "Code explorer",
  "Tech enthusiast"
];

let i = 0;   // index kalimat
let j = 0;   // index huruf
let current = "";
let deleting = false;
const speed = 80; // kecepatan ketik per huruf (ms)
const pause = 900; // jeda antar kalimat (ms)

const el = document.getElementById("subtitle");

function typeLoop() {
  current = phrases[i];
  
  if (!deleting) {
    // Menambah karakter
    el.textContent = current.slice(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(typeLoop, pause); // jeda setelah selesai mengetik
      return;
    }
  } else {
    // Menghapus karakter
    el.textContent = current.slice(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  // Jadwal ketik berikutnya
  setTimeout(typeLoop, deleting ? speed / 2 : speed);
}

typeLoop();
