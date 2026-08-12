const car = { brand: "Toyota", year: 2020 };
for (const key in car) {
  console.log(key);     // iterates KEYS: "brand", "year"
}