nums = [5, 3, 8, 1, 2, 7, 4, 6];
console.log("Original Numbers:", nums);
// console.log("Sorted Numbers:", nums.sort(compareFn));

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

console.log("Original List:", simpleList);
let lowerList = simpleList.map(fruit => fruit.toLowerCase());
console.log("Lowercase List:", lowerList);

// filter

let searchTerm = 'an';
let filterFruit = lowerList.filter(searchFruit);

function searchFruit(fruit) {
    return fruit.includes(searchTerm);
}

console.log(`Fruits containing '${searchTerm}':`, filterFruit);

// compare

function compareFn(a,b) {
    if (a.productName < b.productName) {
      return -1;
    } else if (a.productName > b.productName) {
      return 1;
    }
   return 0;
  }

const products = [
    {
      productName: "Wireless Mouse",
      price: 29.99
    },
    {
      productName: "Bluetooth Keyboard",
      price: 49.99
    },
    {
      productName: "Laptop Stand",
      price: 39.99
    }
  ];

  console.log(products.sort(compareFn));


const animals = [
    {
      name: "Lion",
      traits: ["brave", "strong", "fierce", "wild"]
    },
    {
      name: "Elephant",
      traits: ["large", "gentle", "smart", "wild"]
    },
    {
      name: "Fox",
      traits: ["sly", "quick", "clever", "wild"]
    },
    {
      name: "Dog",
      traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
      name: "Cat",
      traits: ["quiet", "independent", "curious", "cuddly"]
    }
  ];

let animalSearch = 'dog';
let filteredAnimals = animals.filter(searchList);
function searchList(animal) {
    return animal.name.includes(animalSearch);
}

let traitSearch = 'strong';
let filteredTraits = animals.filter(searchTrait);

function searchTrait(animal) {
    return animal.traits.find(trait => trait.toLowerCase().includes(traitSearch));
}

console.log(filteredTraits);

// includes looks at a string, find searches an array