document.addEventListener('DOMContentLoaded', () => {
    const searchField = document.querySelector('#searchfield')
    
    const tableoutput = document.querySelector(".tableoutput")
    const apptable = document.querySelector(".apptable")
    const tabledata = document.querySelector(".mainc")

    tableoutput.style.display = "none";

        // Function to fetch and display recipes
        const fetchRecipes = (searchText = '') => {
            fetch("/home/search-bar/", {
                body: JSON.stringify({ searchText }),
                method: "POST",
            })
            .then((res) => res.json())
            .then((selected_data) => {
                tabledata.innerHTML = ""
                if (selected_data.length === 0) {
                    tableoutput.innerHTML = "Sorry, no recipes found :(";
                    tableoutput.style.display = "block";
                } else {
                    tableoutput.style.display = "none";
                    selected_data.forEach(recipe => {
                        let imageUrl = "/media/" + recipe.image;
                        tabledata.innerHTML += `
                            <div class="card" style="width: 19rem;">
                                <img src="${imageUrl}" class="card-img-top" alt="..." width="300px" height="300px">
                                <div class="card-body">
                                    <a href="/home/eachrecipieadmin/${recipe.title}" class="btn btn-secondary">
                                        <h3 class="card-title"><strong>${recipe.title}</strong></h3>
                                    </a>
                                </div>
                                <div class="btn">
                                    <form action="/home/delete_recipe/${recipe.id}" method="get">
                                        <button type="submit" style="border: none; background: none;">
                                            <svg width="29" height="29" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/>
                                            </svg>
                                        </button>
                                    </form>
                                    <form action="/home/edit/${recipe.id}">
                                        <button type="submit" style="border: none; background: none;">
                                            <svg width="29" height="29" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-12.023-7.083c-1.334 3.916-1.48 4.232-1.48 4.587 0 .527.46.749.749.749.352 0 .668-.137 4.574-1.493zm1.06-1.061 3.846 3.846 8.824-8.814c.195-.195.293-.451.293-.707 0-.255-.098-.511-.293-.706-.692-.691-1.742-1.741-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fill-rule="nonzero"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <br>
                        `;
                    });
                }
            });
        }

        // Initial fetch to get all recipes
        fetchRecipes();

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
})
