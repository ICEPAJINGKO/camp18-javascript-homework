let a = undefined;
let b = 2;
let c = a++;

const d = String(a);
const e = String(b);
const f = String(c);
console.log(d, e, f);

// d = "NaN" เพราะ a ได้ค่า NaN ซึ่งเป็นค่าที่แปลงเป็น String ได้
// e = "2" เพราะ b เป็นตัวเลขจำนวนเต็ม
// f = "NaN" เพราะ c ได้ค่า NaN ซึ่งเป็นค่าที่แปลงเป็น String ได้

/*
Lab1 Dynamic Type: Fundamental1
- จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น String แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
- ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
- ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร

let a = undefined;
let b = 2;
let c = a++;
*/