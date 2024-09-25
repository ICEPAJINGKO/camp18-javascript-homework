const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
console.log(array1.filter(item => item.startsWith('E')));

const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
console.log(array2.filter(item => item === item.toUpperCase()));

const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
console.log(array3.filter(item => item.includes('buri')));

/*
Lab39 Array: array result11
ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E

const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
*/