const incoming1 = Number(prompt("Enter your number"));
const incoming2 = Number(prompt("Enter your number"));
const incoming3 = Number(prompt("Enter your number"));

alert([incoming1, incoming2, incoming3].sort((a, b) => b - a));

/*
Lab9 Conditional: SortNumber
- เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
- แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย
เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1
*/