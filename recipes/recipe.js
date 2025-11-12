const recipes = [{
    name: "Apple Crisp",
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream",
    img: "images/apple_crisp.jpg",
    imgAlt: "Apple Crisp with Vanilla Ice Cream on top",
    stars: "4/5",
    tags: ["Dessert"]
}];

let recipeContainer = document.querySelector('#recipe-container');

recipes.forEach(recipe => {
    let html = `<article class="recipe">
                    <h2>${recipe.name}</h2>
                    <img src="${recipe.img}" alt="${recipe.imgAlt}">
                    <p><strong>Description:</strong> ${recipe.description}</p>
                    <p><strong>Rating:</strong> <span aria-label="${recipe.stars} out of 5 stars" role="img">${'⭐'.repeat(parseInt(recipe.stars))}</span></p>
                    <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
                </article>`;

    recipeContainer.innerHTML += html;
})