let str = '31 45 12 67 34 86 23 37 19 41';
let arr = str.split(' ');
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 40) {
        sum += parseInt(arr[i]);
    }
}

console.log(sum);

/*
Lab53 Array: ผลรวมของเลขที่มีค่าน้อยกว่า 40
จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 

let str = '31 45 12 67 34 86 23 37 19 41';
*/