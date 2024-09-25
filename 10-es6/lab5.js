function lab5(...arr) {
    return arr.map((num, index) => (index === 3 ? num ** 2 : num));
}

let array1 = [1, 2, 3, 4, 5];

console.log(lab5(...array1));
console.log(array1);

/*
Lab 5 ES6: ฟังก์ชันที่ใช้คุณสมบัติของ Spread operator
จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง
*/
