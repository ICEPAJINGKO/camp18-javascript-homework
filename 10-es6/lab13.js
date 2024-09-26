let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20] เพราะอยู่ตำแหน่งที่ 1 และ 2 ถูกเปลี่ยนที่ตำแหน่งที่ 2 และ 1 ตามลำดับ

/*
Lab 13 ES6: result3
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *
*/
