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
    document.getElementById('html').style.color = 'black';
    document.getElementById('css').style.color = 'black';
    document.getElementById('js').style.color = 'black';
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})

const image = document.querySelector('img');
image.addEventListener('mouseover', function(){
    image.setAttribute('src', "darklogo.png");
    image.setAttribute('alt', "Dark Mode Logo");
});
image.addEventListener('mouseout', function(){
    image.setAttribute('src', "https://wddbyui.github.io/wdd131/images/trifecta.png");
    image.setAttribute('alt', "Light Mode Logo");
});

document.body.className = 'blue';