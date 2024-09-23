const target = Number(prompt('Enter a number between 1 and 100:'));

do {
  const guess = Number(prompt('Enter a number between 1 and 100:'));
  if (guess > target) {
    alert('Too high');
  } else if (guess < target) {
    alert('Too low');
  } else {
    alert('You win!');
    break;
  }
} while (true);

/*
Lab45 Loop: Guess number

ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
- ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- และให้ผู้เล่นคนที่สองทายเลย โดยการพิมพ์เลขใส่ใน promptจนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่าหรือน้อยกว่าคำตอบนั้น
*/