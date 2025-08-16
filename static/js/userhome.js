document.addEventListener('DOMContentLoaded', () => {
    const searchField = document.querySelector('#searchfield');
    const tableoutput = document.querySelector(".tableoutput");
    const apptable = document.querySelector(".apptable");
    const tabledata = document.querySelector(".mainc");

    tableoutput.style.display = "none";

    // Function to fetch and display recipes
    const fetchRecipes = (searchText = '') => {
        fetch("/home/search-bar/", {
            body: JSON.stringify({ searchText }),
            method: "POST",
        })
        .then((res) => res.json())
        .then((selected_data) => {
            tabledata.innerHTML = "";
            if (selected_data.length === 0) {
                tableoutput.innerHTML = "Sorry, no recipes found :(";
                tableoutput.style.display = "block";
            } else {
                tableoutput.style.display = "none";
                selected_data.forEach(recipe => {
                    let imageUrl = "/media/" + recipe.image;
                    tabledata.innerHTML += `
                       <div class="card" style="width: 19rem;">
                        <a href="/home/eachrecipie/${recipe.title}">
                            <img src="${imageUrl}" class="card-img-top" alt="..." width="300px" height="300px">
                        </a>
                        <div class="card-body">
                            <a href="/home/eachrecipie/${recipe.title}" class="btn btn-secondary">
                                <h3 class="card-title"><strong>${recipe.title}</strong></h3>
                            </a>
                        </div>
                        <div class="fav-btn">
                            ${recipe.is_fav ? `
                            <a href="/home/not_favorites/${recipe.title}">
                                <svg id="favyellow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="favorite-icon filled" style="fill : goldenrod">
                                    <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/>
                                </svg>
                            </a>
                        ` : `
                        <a href="/home/toggle_favorites/${recipe.title}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="favorite-icon">
                                <path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/>
                            </svg>
                        </a>
                        `}
                        </div>
                    </div>
                    <br>
                `;
                });
            }
        })
    };

    // Initial fetch to get all recipes
    fetchRecipes();

    // Event listener for search field input
    searchField.addEventListener('keyup', (e) => {
        const searchValue = e.target.value.trim();
        if (searchValue.length > 0) {
            apptable.style.display = "block";
            fetchRecipes(searchValue);
        } else {
            tableoutput.style.display = "none";
            apptable.style.display = "block";
            fetchRecipes();
        }
    });
});