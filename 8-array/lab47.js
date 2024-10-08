function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

/*
Lab47 Array: ฟังก์ชัน copySorted(arr)
จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม

let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
*/