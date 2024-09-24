let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 390

/*
Lab7 Object: calSalary
- ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
- ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
*/
