const incomming = prompt("Enter your zone").toUpperCase();

const zonePrice = {
    AA: 6500,
    BB: 5000,
    SB: 5500,
    SC: 5500,
    SD: 5500,
    SE: 5500,
    SF: 5500,
    SG: 5500,
    SH: 5500,
    SI: 5500,
    SJ: 5500,
    SK: 5500,
    SL: 5500,
    SM: 5500,
    SN: 5500,
    B: 4000,
    C: 4000,
    D: 4000,
    E: 4000,
    F: 4000,
    G: 4000,
    H: 4000,
    I: 4000,
    J: 4000,
    K: 4000,
    L: 4000,
    M: 4000,
    N: 4000,
    O: 4000,
    P: 4000,
    Q: 4000,
    R: 4000,
    S: 4000,
    T: 4000,
};

alert(`ราคาบัตรคือ ${zonePrice[incomming] || 0} บาท`);

/*
Lab12 Conditional: Ticket Price
- สร้างระบบสำหรับบอกราคาบัตรคอนเสิร์ต เมื่อกรอกข้อมูลเป็นชื่อ Zone
- Input : String ภาษาอังกฤษไม่เกิน 2 ตัว
- Output : Number ราคาบัตร
- รูปภาพประกอบอยู่ใน Slide ถัดไป
*/