function mergeObjects(...args) {
    args.reverse();
    return Object.assign({}, ...args);
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, d: 6 }));

/*
Lab 3 ES6: ฟังก์ชัน mergeObjects
จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน 
(ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)
*/
