document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener('click', function(event) {
        const star = event.target.closest('.star');
        if (star) {
            const recipe = star.closest('.recipe');
            const stars = recipe.querySelectorAll('.star');
            const ratingValue = recipe.querySelector('.rating-value');
            const value = parseInt(star.getAttribute('data-value'));

            ratingValue.textContent = 'You rated this recipe ' + value + ' stars!';
            removeActiveStars(stars);
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('active');
            }
        }
    });

    function removeActiveStars(stars) {
        stars.forEach(function(star) {
            star.classList.remove('active');
        });
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     // Function to display favorited recipes
//     function displayFavorites() {
//         let favoritesContainer = document.querySelector(".recipes-container");
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//         if (favorites.length === 0) {
//             favoritesContainer.innerHTML = "<p>No favorites added yet.</p>";
//             return; // Exit the function early if there are no favorites
//         }
//         let html = "";
//         favorites.forEach(recipe => {
//             html += `
//                 <div class="recipe">
//                     <h2>${recipe.title}</h2>
//                     <div class="stars">
//                         <span class="star" data-value="1">★</span>
//                         <span class="star" data-value="2">★</span>
//                         <span class="star" data-value="3">★</span>
//                         <span class="star" data-value="4">★</span>
//                         <span class="star" data-value="5">★</span>
//                     </div>
//                     <div class="rating-value"></div>
//                     <div class="card m-4" style="width: 18rem;">
//                         <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}" width="400px" height="400px">
//                         <div class="card-body">
//                             <a href="${recipe.link}" class="button">Click here for the recipe!</a>
//                         </div>
//                     </div>
//                     <br>
//                 </div>
//             `;
//         });
//     favoritesContainer.innerHTML = html;

//     }

//     // Call the function to display favorited recipes
//     displayFavorites();
// });