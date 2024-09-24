const array1 = [1, 2, 30, 400];
console.log(array1.map((item) => item * 2));

const array2 = [1, 2, 3, 4];
console.log(array2.map((item) => item.toString()));

const array3 = [1, '1', 2, {}];
console.log(array3.map((item) => typeof item));

/*
Lab29 Array: array result1
ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [1, 2, 30, 400];
// result: [2, 4, 60, 800]

const array = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]

const array = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
*/