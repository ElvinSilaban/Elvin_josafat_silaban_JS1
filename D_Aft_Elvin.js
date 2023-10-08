// Penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  default:
    console.log("Hari ini adalah hari lain");
}

// Penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Penggunaan while
let angka1 = 1;
while (angka1 <= 5) {
  console.log("Angka (while): " + angka1);
  angka1++;
}

// Penggunaan do while
let angka2 = 1;
do {
  console.log("Angka (do while): " + angka2);
  angka2++;
} while (angka2 <= 5);

// Pembuatan fungsi
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(3, 5);
console.log("Hasil penambahan: " + hasil);
