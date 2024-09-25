function filterOutOdds(...args) {
    return args.filter((num) => num % 2 === 0);
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*
Lab 2 ES6: ฟังก์ชัน filterOutOdds
จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด 
และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
*/
