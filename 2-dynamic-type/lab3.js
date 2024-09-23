let a = undefined;
let b = ' ';
let c = !b;

const d = Boolean(a);
const e = Boolean(b);
const f = Boolean(c);
console.log(d, e, f);

// d = false เพราะ a เป็น undefined
// e = true เพราะ b เป็นค่าที่ไม่ใช่ undefined หรือ null หรือ 0 หรือ "" หรือ NaN หรือ false ซึ่งค่านี้จะเป็น true เมื่อแปลงเป็น Boolean
// f = false เพราะ c เป็นค่า false ซึ่งค่านี้จะเป็น false เมื่อแปลงเป็น Boolean

/*
Lab3 Dynamic Type: Fundamental3
- จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Boolean แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
- ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
- ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

let a = undefined;
let b = ' ';
let c = !b;
*/