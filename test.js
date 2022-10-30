// nomor 1
let arr = [1, 2, 3];
console.log(arr.reduce((a, b) => a + b));

let arr2 = [1, 2, 3, 4, 10, 11];
console.log(arr2.reduce((a, b) => a + b));

// nomor 2
function pagar(params) {
  let cek = "";
  for (let i = params - 1; i >= 0; i--) {
    cek = "";
    for (let j = 1; j <= params; j++) {
      if (j > i) {
        cek += "#";
      } else {
        cek += " ";
      }
      // cek += "*";
    }
    console.log(cek);
  }
}

pagar(6);

// nomor 3

function Candles(candles) {
  // Write your code here
  let count = 0;
  let max = 0;
  for (let i = 0; i < candles.length; i++) {
    let num = candles[i];
    if (num > max) {
      max = num;
      count = 1;
    } else if (max == num) {
      count++;
    }
  }
  return count;
}

console.log(Candles([3, 1, 0, 3]));
