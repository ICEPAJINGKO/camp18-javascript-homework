function makeWorker() {
    let name = "Pete";
    return function () {
        alert(name);
    };
}
let name = "John";
let work = makeWorker();
work(); // Pete เพราะได้มาจากการส่งคืนของ makeWorker()

/*
Lab22 Function: Fundamental3
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // *
*/
