function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const steps = ["one", "two", "three"];

steps.forEach(function(step) {
    console.log(step);
});

let myList = document.querySelector('#myList');
const stepHTML = steps.map(listTemplate);

function listTemplate(step) {
    return `<li>${step}</li>`;
}

myList.innerHTML = stepHTML.join('');

let grades = ['A', 'A', 'A'];

let gpaPoints = grades.map(convert);

let totalPoints = gpaPoints.reduce(function(total, points) {
    return total + points;
});

avgPoints = totalPoints / grades.length;
console.log(avgPoints);

const shortWords = words.filter(function(word){
    return word.length <= 5;
});
console.log(shortWords);


let container = document.querySelector('#studentContainer');
students.forEach(function(item) {
    let name = document.createElement('div');
    let html = `
        <span>${item.first}</span>
        <span>${item.last}</span>
    `;
    name.innerHTML = html;
    container.appendChild(name);
});