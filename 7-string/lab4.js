function verify(str) {
    if(str.includes('sex')) return true;
    if(str.includes('xxx')) return true;
    if(str.includes('pOrn')) return true;

    return false;
}

/*
Lab4 String: การตรวจสอบข้อความ
จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ  xxx, porn, sex ตามลำดับ
*/