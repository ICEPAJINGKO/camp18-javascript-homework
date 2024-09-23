let a = undefined;
let b = null;
let c = b + '4 2';

const d = Number(a);
const e = Number(b);
const f = Number(c);
console.log(d, e, f);

// d = NaN เพราะ a เป็น undefined เป็นค่าที่ไม่สามารถแปลงเป็น Number ได้
// e = 0 เพราะ b เป็น null ซึ่งสามารถแปลงเป็น Number ได้ แต่ค่าที่ได้คือ 0
// f = NaN เพราะ c เป็น "null4 2"เป็นค่าที่ไม่สามารถแปลงเป็น Number ได้

/*
Lab2 Dynamic Type: Fundamental2
- จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Number แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
- ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
- ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

let a = undefined;
let b = null;
let c = b + '4 2';
*/