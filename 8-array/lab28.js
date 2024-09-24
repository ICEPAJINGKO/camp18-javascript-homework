const tasks = [
    { id: 1, name: "Fishing" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Swimming" },
];

function deleteTask(id) {
    const index = tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

deleteTask(1);

console.log(tasks);

/*
Lab28 Array: การลบค่าelement
จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
- execute deleteTask(1)

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
*/
