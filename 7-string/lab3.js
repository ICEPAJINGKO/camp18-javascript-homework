function ucFirst(str) {
    let firstChar = str.charAt(0).toUpperCase();
    let restChar = str.slice(1);
    return firstChar + restChar;
}

/*
Lab3 String: การแปลงตัวอักษร
จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม
*/