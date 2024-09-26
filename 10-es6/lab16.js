function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // "Your name is Alejandro and you like purple" เพราะส่งค่าให้ทั้งคู่
getUserData({ firstName: "Melissa" }); // "Your name is Melissa and you like green" เพราะ green เป็นค่า default
getUserData({}); // "Your name is undefined and you like green" เพราะไม่มีค่าให้ firstName และไม่มีค่า default จึงเป็น undefined

/*
Lab 16 ES6: result6
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
getUserData({ firstName: 'Melissa' }); // **
getUserData({}); // ***
*/
