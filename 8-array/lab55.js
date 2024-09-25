let str = "I live in Thailand";
let arr = str.split("");
let result = {};

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") continue;

    let s = arr[i].toLowerCase();

    if (result[s]) {
        result[s]++;
    } else {
        result[s] = 1;
    }
}

console.log(result);

/*
Lab55 Array: หาและนับจำนวนตัวอักษรที่ปรากฏ
จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
*/
