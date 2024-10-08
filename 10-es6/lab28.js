const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 },
];

for (const { user, age = "unknown" } of users) {
    console.log(`${user} ${age}`);
}

/*
Lab 28 ES6: for … of กับ users
ให้ใช้ for … of กับ users (ให้ destructuring object ในแต่ละ iteration)
- ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

const users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 }
];
*/
