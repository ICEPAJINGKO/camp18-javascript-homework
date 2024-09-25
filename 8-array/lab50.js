const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];

console.log(scores.reduce((a, b) => a + (b.score * b.weight), 0));

/*
Lab50 Array: หาคะแนนเฉลี่ย
จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
// expected result: 89
*/