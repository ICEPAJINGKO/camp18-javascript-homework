function extractCurrencyValue(string, rate) {
    let number = parseFloat(string.slice(1));
    return number * rate;
}

/*
Lab6 String: การแปลงค่า string
จงเขียนฟังก์ชัน extractCurrencyValue(string, rate) ในการแปลงค่า string ที่อยู่ในรูปแบบสกุลเงินดอลลาร์ ให้อยู่ในรูปแบบสกุลเงินบาท
- rate คือ อัตราในการแปลงดอลลาร์ให้เป็นบาท

ตัวอย่าง ผลลัพธ์ของฟังก์ชัน
*/