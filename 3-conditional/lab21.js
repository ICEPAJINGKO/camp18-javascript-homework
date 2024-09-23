alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1 // 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1 // undefined
alert(null || (2 && 3) || 4); // 3

/*
Lab21 Conditional: Guess Result13
คำสั่ง alert ในแต่ละบรรทัดจะแสดงค่าเป็นอะไรบ้าง

alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || (2 && 3) || 4);
*/