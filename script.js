// Handle recipe form submission
document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const recipeName = document.getElementById('recipe-name').value;
    const recipeIngredients = document.getElementById('recipe-ingredients').value;
    const recipeInstructions = document.getElementById('recipe-instructions').value;

    // Create a new recipe card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
        <img src="images/placeholder.jpg" alt="${recipeName}">
        <h3>${recipeName}</h3>
        <p><strong>Ingredients:</strong><br>${recipeIngredients}</p>
        <p><strong>Instructions:</strong><br>${recipeInstructions}</p>
    `;

    // Add the recipe card to the recipe gallery
    document.getElementById('recipes').appendChild(recipeCard);

    // Clear the form after submission
    document.getElementById('recipe-form').reset();
});
