const user = {
    email: "cc@gmail.com",
    isActive: true,
};

user.isActive = false;
console.log(user); // { email: "cc@gmail.com", isActive: false } เพราะ isActive โดนเปลี่ยนค่า
user = {};
console.log(user); // มาไม่ถึงเพราะ error ไม่สามารถเปลี่ยนค่าที่อยู่ const ได้

/*
Lab2 Object: Guess Result
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **
*/
