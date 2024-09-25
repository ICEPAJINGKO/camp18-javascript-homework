let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
let result = {};

for (let i = 0; i < names.length; i++) {
    if (result[names[i]]) {
        result[names[i]]++;
    } else {
        result[names[i]] = 1;
    }
}

console.log(result);

/*
Lab54 Array: นับชื่อที่ปรากฏใน names
จงนับชื่อที่ปรากฏใน names

let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
*/