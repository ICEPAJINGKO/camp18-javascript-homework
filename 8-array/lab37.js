const array1 = [9, 17, 23, 5];
console.log(array1.filter((x) => x > 10));

const array2 = [1, 2, 3, 4];
console.log(array2.filter((x) => x % 2 === 1));

const array3 = [1, '1', 2, {}];
console.log(array3.filter((x) => typeof x === "number"));

/*
Lab37 Array: array result9
ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = [9, 17, 23, 5];
// ค่าที่มากกว่า 10


const array = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่


const array = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
*/