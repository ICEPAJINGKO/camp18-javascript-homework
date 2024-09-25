function removeRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return [...arr.slice(0, randomIndex), ...arr.slice(randomIndex + 1)];
}

console.log(removeRandom([1, 2, 3, 4, 5]));

/*
Lab 8 ES6: ฟังก์ชัน removeRandom
จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return 
ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม
*/
