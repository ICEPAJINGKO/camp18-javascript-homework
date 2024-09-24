function updateTask(id, newName) {
    const index = tasks.findIndex((item) => item.id === id);

    if (index !== -1) {
        tasks[index].name = newName;
    }
}

const tasks = [
    { id: 1, name: "Fishing" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Swimming" },
];

updateTask(2, "Travelling");

console.log(tasks);

/*
Lab27 Array: การแก้ไขค่าelement
"จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property 
ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName"
- execute updateTask(2, 'Travelling')

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
*/
