const PI = 3.14;
let radius = 3;

let area = PI * radius**2;
console.log(area);

radius = 11;
area = PI * radius**2;
console.log(area);

const ONE = 1;
const TWO = '2';
let result = ONE + TWO;
console.log(result);
console.log(typeof result);

let course = "CSE131"; // global scope
if (true) {
    let student = "Zach";
    console.log(course);  // works just fine, course is global
    console.log(student); // works just fine, it's being accessed within the block
}
console.log(course); // works fine, course is global
// console.log(student); // does not work, can't access a block variable outside the block


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})