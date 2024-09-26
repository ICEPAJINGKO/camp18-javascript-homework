function checkAge(user) {
    const { firstName, lastName, age } = user;
    if (age > 18) {
        alert(`Welcome ${firstName} ${lastName}`);
    } else {
        alert("ไม่มีสิทธิ์เข้าใช้งาน");
    }
}

checkAge({ firstName: "John", lastName: "Doe", age: 25 });
checkAge({ firstName: "Jane", lastName: "Doe", age: 16 });

/*
Lab 18 ES6: ฟังก์ชันตรวจสอบอายุ
จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 
ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)
*/
