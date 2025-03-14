function pasanganTerbesar(num) {
  let str = num.toString();
  let pasanganBesar = 0;
  for (let i = 1; i < str.length; i++) {
    let pasangan = Number(str[i] + str[i + 1]);
    if (pasangan > pasanganBesar) {
      pasanganBesar = pasangan;
    }
  }
  return pasanganBesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
