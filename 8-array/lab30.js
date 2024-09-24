const array1 = ["apple", "banana", "orange"];
console.log(array1.map((item) => item.toUpperCase()));

const array2 = [1, 3, 4, 5, 6, 7, 8];
console.log(array2.map((item) => (item % 2 === 0 ? "even" : "odd")));

const array3 = [1, -3, 2, 8, -4, 5];
console.log(array3.map((item) => Math.abs(item)));

/*
Lab30 Array: array result2
ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]

const array = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
*/
