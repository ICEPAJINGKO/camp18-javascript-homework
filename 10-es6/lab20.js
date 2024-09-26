function topSalaries(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

console.log(topSalaries(salaries));

/*
Lab 20 ES6: ฟังก์ชัน topSalaries(salaries)
จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
- ถ้า salaries เป็น empty object ให้ return null
- ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
*/
