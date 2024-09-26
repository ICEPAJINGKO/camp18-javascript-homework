let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
];

console.log(raindrops); // Raindrops on roses เพราะอยู่ตำแหน่งที่ 0
console.log(whiskers); // Raindrops on kittens เพราะอยู่ตำแหน่งที่ 1
console.log(aFewOfMyFavoriteThings); // [Bright copper kettles, warm woolen mittens] เพราะอยู่ตำแหน่งที่เหลือ

/*
Lab 12 ES6: result2
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
];
console.log(raindrops); // *
console.log(whiskers); // **
console.log(aFewOfMyFavoriteThings); // ***
*/
