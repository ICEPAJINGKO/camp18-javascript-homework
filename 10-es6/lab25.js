const q = { prop: 5, prop2: [10, 100] };

const { prop: x, prop2: [, y] } = q;

console.log(x); // 5
console.log(y); // 100

/*
Lab 25 ES6: destructuring1
ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

const q = { prop: 5, prop2: [10, 100] };
*/
