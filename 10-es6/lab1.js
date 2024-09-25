function multiply(...args) {
    return args.reduce((a, b) => a * b);
}

console.log(multiply(1, 2, 3, 4, 5));
console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*
Lab1 ES6: ฟังก์ชันหาค่าผลคูณของตัวเลข 
จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
*/
