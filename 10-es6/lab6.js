function lab6(name, surname, ...hobbies) {
    return {
        name,
        surname,
        hobbies,
        numHobbies: hobbies.length,
    };
}

console.log(lab6("John", "Doe", "Reading", "Hiking", "Cooking"));

/*
Lab 6 ES6: ฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก
จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter
*/
