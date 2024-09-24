const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

let result = [];

for (const key in alphabets) {
    if(alphabets[key] === 'a') result.push(+key);
}

console.log(result);

/*
Lab6 Array: การหาตำแหน่ง
จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]
*/