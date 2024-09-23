const incoming = Number(prompt("Enter your number"));

if (incoming >= 80) {
  alert("A");
} else if (incoming >= 70) {
  alert("B");
} else if (incoming >= 60) {
  alert("C");
} else if (incoming >= 50) {
  alert("D");
} else {
  alert("F");
}

/*
Lab8 Conditional: Fundamental5
- จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
- ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
- ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
- ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
- ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
- ถ้าคะแนน น้อยกว่า 50 ได้ F
*/