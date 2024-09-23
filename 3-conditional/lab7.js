const incoming1 = Number(prompt("Enter your number"));
const incoming2 = Number(prompt("Enter your number"));

if (isNaN(incoming1) || isNaN(incoming2)) {
  alert("Invalid number")
} else {
  alert(incoming1 + incoming2)
}

/*
Lab7 Conditional: Small Challenge
- จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
- ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
- หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”
*/