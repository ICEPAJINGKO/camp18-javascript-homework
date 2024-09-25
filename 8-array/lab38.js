const array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
console.log(array1.filter((x) => x.length > 6));

const array2 = [1, -3, 2, 8, -4, 5];
console.log(array2.filter((x) => x >= 0));

const array3 = [1, 3, 4, 5, 6, 7, 8];
console.log(array3.filter((x) => x % 3 === 0));

/*
Lab38 Array: array result10
ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว

const array = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก

const array = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
*/