function filterRange(arr, a, b) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }
    return result;
}

const array = [1, 3, 5, 7, 9, 11];
const result = filterRange(array, 4, 8);
console.log(result); // [5, 7]

/*
Lab43 Array: returnค่าอยู่ระหว่าง a กับ b
จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

const array = [1, 3, 5, 7, 9, 11];
const result = filterRange(array, 4, 8);
console.log(result); // [5, 7]
*/
