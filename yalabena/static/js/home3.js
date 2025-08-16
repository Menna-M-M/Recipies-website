document.addEventListener('DOMContentLoaded', function() {
    // Retrieve recipe name and image from local storage
    var recipeName = localStorage.getItem('recipeName');
    var recipeImage = localStorage.getItem('recipeImage');

    // Check if recipeName and recipeImage are not null
    if (recipeName && recipeImage) {
        // Create a new card element
        var newCard = document.createElement('div');
        newCard.classList.add('card', 'm-4');

        // Set the HTML content for the new card
        newCard.innerHTML = `
            <img src="${recipeImage}" class="card-img-top" alt="..." height="300" width="300">
            <div class="card-body">
                <h3 class="card-title"><strong>${recipeName}</strong></h3>
                <button class="button" type="button" ><a class="link" href="{%url 'edit'%}">Edit Recipe</a></button>
                <button class="button" type="button" ><a class="link" href="{%url 'delete'%}">Delete Recipe</a></button>
            </div>
        `;

        // Append the new card to the parent element
        var parentElement = document.querySelector('.parent');
        parentElement.appendChild(newCard);
    }
});
