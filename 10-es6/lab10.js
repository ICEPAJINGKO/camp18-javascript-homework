function cloneObject(obj) {
    return { ...obj };
}

console.log(cloneObject({ a: 1, b: 2 }));

/*
Lab 10 ES6: ฟังก์ชัน cloneObject
จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return 
ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
*/
