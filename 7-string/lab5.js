function truncate(str, length) {
    if(str.length > length) {
        return str.slice(0, length) + '...';
    }

    return str;
}

/*
Lab5 String: การตัดข้อความ
"จงเขียนฟังก์ชัน truncate(str, length) เพื่อตัดข้อความ ถ้าหากข้อความมีความยาวมากกว่ากำหนด 
ให้ตัดความยาวของข้อความให้เท่ากับความยาวที่กำหนดแล้วต่อท้ายด้วย …"
- ถ้าความยาวข้อความสั้นกว่าความยาวที่กำหนดให้ return เป็นข้อความเดิม

ตัวอย่าง ผลลัพธ์ของฟังก์ชัน
*/