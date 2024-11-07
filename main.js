// Javascript Fundamental //

let jenisKamera = "Mirrorless Camera 'Fujifilm'";
console.log(jenisKamera);
let originalProduct = true;
console.log(originalProduct);
let hargaXT2 = 21_999_000;
console.log(hargaXT2);
let tipeLainnya = ["XA3", "GFX100S", "XE4"];
console.log(tipeLainnya);

alert(tipeLainnya[0]); // XA3
alert(tipeLainnya[1]); // GFX100S
alert(tipeLainnya[2]); // XE4

const customer = { fistName: "Delfina", lastName: "Galuh", age: 21, tipeCamera: "XT2" };
console.log(customer);

let nama = "Erwin";
let umurTerverifikasi = true;
let punyaTiket = false;
console.log(nama === "Erwin" && umurTerverifikasi); // (true && true) -> true
console.log(nama === "Farhan" && umurTerverifikasi); // (false && true) -> false

console.log(nama === "Erwin" || punyaTiket); // (true || false) -> true
console.log(nama === "Farhan" || punyaTiket); // (false || false) -> false

console.log(!umurTerverifikasi); // !(true) -> false
console.log(!(nama === "Erwin" && umurTerverifikasi)); // !(true && true) -> !(true) -> false

const kataString = "true";
const kataBoolean = true;

console.log(kataString == kataBoolean); // true, karena 'true' di-convert menjadi boolean true
console.log(kataString === kataBoolean); // false, karena meskipun nilainya sama-sama true, tipe data berbeda

// Javascript Function //

function printHeart() {
  console.log("<3");
}
printHeart();

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna")); // "Hello Luna!"

// Javascript Control flow //

for (let i = 0; i < 6; i++) {
  console.log("Da ba dee da ba daa");
}

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

// Javascript Exception //

function divideNumbers(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka.");
    }

    if (b === 0) {
      throw new Error("Pembagian dengan nol tidak diizinkan.");
    }

    return a / b;
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    return null;
  }
}

console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: Terjadi kesalahan: Pembagian dengan nol tidak diizinkan.
console.log(divideNumbers(10, "a")); // Output: Terjadi kesalahan: Input harus berupa angka.

// Javascript Array //

let queue = ["ray", "fiki", "fadhilla", "farah"];
queue.push("nabila");
queue.push("maza", "elsi");
queue.pop();
queue.shift();
queue.shift();
queue.unshift("tomi");
console.log(queue);

["tomi", "fadhilla", "farah", "nabila", "maza"];
