function getAverageAge(arr) {
    return ((arr.reduce((a, b) => a + b.age, 0) / arr.length)).toFixed(2);
}

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];

console.log(getAverageAge(arr));

/*
Lab49 Array: ฟังก์ชัน getAverageAge(arr)
จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
*/