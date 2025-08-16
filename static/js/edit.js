// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
function redirectToEdit(recipeId) {
    // Redirect to the edit page with the recipe ID in the URL
    window.location.href = `edit.html?recipe=${recipeId}`;
}
// Function to get the value of a URL parameter by name
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to set placeholders based on the selected recipe
function setPlaceholders(recipe) {
    // Define placeholders for different recipes
    const placeholders = {
        "birria-taco": {
            recipename: "birria-Tacco",
            servingQuantity: "4 servings",
            dropdown:"option2",
           // recipecourse:"main course",
            steps:"1-repare meat and dried chiles: Remove any large pieces of fat from the chuck roast. Cut it into a few large pieces and season with salt.Rinse the chiles (use gloves if desired), then use scissors to remove the stem and make a slit along the side to open them and remove the seeds.(The arbol chiles are hottest, so for less heat, remove the seeds, or omit these chiles completely.If you like extra spice, leave them whole).2-Make sauce: Add tomatoes and onion to a large stock pot (at least 5.5qt pot of bigger) over medium heat. Cook for a few minutes, stirring. Add whole garlic cloves, chile peppers, and all of the spices except the bay leaf.Cook for 5 minutes, stirring often. Add vinegar and 4 cups water. Bring to a low boil, reduce heat to simmer and cook for 15 minutes, uncovered.3-Blend sauce: Add mixture to a blender and blend as smooth as possible. Pour mixture through a fine mesh strainer, back into the pot. Add 4 cups of water to the blender and swirl it around to clean excess sauce from the blender, then add it to the pot. 4-Add meat and simmer: Add 1 tablespoon kosher salt. Bring to a boil.Add short ribs, chuck roast and 3 bay leaves.Cover, reduce heat to a simmer and cook for 2 ½ hours. 5-Shred meat: Check meat to make sure it’s tender. Remove meat to a plate and chop or shred into pieces. Discard bones and bay leaves. 6- Dip Tortillas: Heat a large griddle or skillet over medium heat. Add a small amount of olive oil to the pot and swirl around. Dip a corn tortillas into the consommé broth and lay in hot pan. 7-Assemble: Quickly top with a spoonful of shredded meat, a sprinkle of cheese and a little chopped onion and cilantro. 8- Fry Tacos: Fold tortilla over, in half. Fry for several minutes, until crispy and browned on both sides, flipping once.Remove to a plate for serving. 9- Serve: Sprinkle remaining chopped white onion and cilantro on top. Serve with a cup of consommé broth, for dipping.If you want to take these tacos over the top, make my homemade hot sauce, in the recipe card, to go with! ",
            protien:"17g",
            fat:"21g",
            carbs:"1g",
            calories:"268cal",
            total:"3hours",
            cook:"2hours",
            prep:"1hours",
            quantity1:"1",
            quantity2:"1",
            quantity3:"1",
            quantity4:"4",
            quantity5:"18",
            quantity6:"1",
            quantity7:"1",
            quantity8:"1",
            quantity9:"1",
            unit1:"cup ",
            unit2:"bunch",
            unit3:"cup",
            unit4:"unit",
            unit5:"unit",
            unit6:"unit",
            unit7:"unit",
            unit8:"tablespoon",
            unit9:"tablespoon",
            type1:"lime",
            type2:"fresh chopped cilantro",
            type3:"Oaxaca Cheese",
            type4:"Dried chiles",
            type5:"corn tortialls",
            type6:"large chopped onion",
            type7:"short ribs and chuck roast",
            type8:"salt",
            type9:"pepper",

        },
        "pasta-sausage": {
            recipename: "pasta-sausage",
            servingQuantity: "3 servings",
            dropdown:"option1",
           // recipecourse:"main course",
            steps:"1-Preheat your air fryer to 400°F. 2-  Pasta: Cook rigatoni according to package directions in well-salted water. Reserve 2 cups of the starchy water when you drain.3-Sausage: Heat olive oil in a large, deep pot over medium high heat. Add the fennel and onion. Saute until very soft about 10 minutes. Add the sausage. Cook, breaking into small pieces, until browned all the way through. 4-Sauce: Turn the heat down. Add the garlic, fennel seeds, and tomato paste.Sauté until fragrant about 3 minutes.Add the cream; let it come to a low simmer. Stir in the kale. Season with salt. 5-Fennel seeds: I would recommend using 2 teaspoons of fennel seeds if you are using celery instead of fennel.It will give you more fennel-y flavor.6-Pasta: I recommend cooking to al dente so there’s still a slight firmness.That way the noodles will hold up nicely when you toss them with the sauce.",
            protien:"23.5g",
            fat:"30.2g",
            carbs:"49g",
            calories:"636",
            total:"35minutes",
            cook:"23minutes",
            prep:"12minutes",
            quantity1:"1",
            quantity2:"8",
            quantity3:"1",
            quantity4:"1",
            quantity5:"3",
            quantity6:"1",
            quantity7:"4",
            quantity8:"0.25",
            quantity9:"2",
            unit1:"lb",
            unit2:"cups",
            unit3:"lb",
            unit4:"tablespoon",
            unit5:"cups",
            unit6:"unit",
            unit7:"cloves",
            unit8:"cup",
            unit9:"tablespoon",
            type1:"rigatoni",
            type2:"reserved pasta water",
            type3:"ground mild Italian sausage",
            type4:"olive oil",
            type5:"chopped fennel or celery",
            type6:" large yellow onion, chopped",
            type7:"garlic minced",
            type8:"chopped kale",
            type9:"vinegar",

        },
        "salmon": {
            recipename: "salmon",
            servingQuantity: "2 servings",
            dropdown:"option2",
           // recipecourse:"main course",
            steps:"1-Preheat your air fryer to 400°F.2- Season the green beans:In a large bowl, toss the green beans with olive oil, kosher salt, and ground black pepper.3-Bowl of Seasoned, Uncooked Green Beans for Air Fryer Salmon Recipe Simply Recipes / Ross YoderAir fry the green beans:When the air fryer has pre-heated, arrange the green beans evenly in the air fryer basket and air fry for 8-10 minutes, tossing halfway through, or until the green beans have softened and are just beginning to brown in spots. Remove to a clean bowl and cover with aluminum foil to keep warm.4- Air Fried Green Beans on Mesh Tray and Bowl for Air Fryer Salmon Recipe5-Make the Dijon sauce for the salmon:In a small bowl, whisk together mayonnaise, mustard, maple syrup, lemon zest, and olive oil until fully combined.6-Brush the salmon with the sauce: Using a pastry brush or a spoon, brush the mustard sauce all over the filets.",
            protien:"45g",
            fat:"43g",
            carbs:"49g",
            calories:"702",
            total:"25minutes",
            cook:"10minute",
            prep:"15minute",
            quantity1:"10",
            quantity2:"1",
            quantity3:"0.25",
            quantity4:"1",
            quantity5:"1",
            quantity6:"1",
            quantity7:"1",
            quantity8:"6",
            quantity9:"2",
            unit1:"onces",
            unit2:"tablespoon",
            unit3:"teaaspoon",
            unit4:"teaspoon",
            unit5:"teaspoon",
            unit6:"tablespoon",
            unit7:"teaspoon",
            unit8:"ounce",
            unit9:"teaspoon",
            type1:"green beans, trimmed",
            type2:"olive oil",
            type3:"kosher salt, divided ",
            type4:"ground black pepper",
            type5:"unsalted butter ",
            type6:"Dijon mustard",
            type7:"teaspoon lemon zest",
            type8:"salmon filets, skin on or off",
            type9:"lemon wedges",

        },
        "skillet-chicken": {
            recipename:"Skillet-Chicken",
            servingQuantity: "4 servings",
            dropdown:"option2",
            //recipecourse:"main course",
            steps:"1-The Sauce: Heat the olive oil in a large nonstick skillet set over medium heat. Add the onion and carrots, and cook until softened, about 5 minutes.Stir in the garlic, oregano, red pepper flakes, salt and pepper, and cook for 1 minute. 2-Heat the olive oil in a large nonstick skillet. Add the chicken, season with salt and pepper, and cook until just cooked through, about 5 minutes.3-Transfer to a bowl and set aside.4-The Sauce: Heat the olive oil in a large nonstick skillet set over medium heat. Add the onion and carrots, and cook until softened, about 5 minutes.Stir in the garlic, oregano, red pepper flakes, salt and pepper, and cook for 1 minute.  5-  Add the crushed tomatoes, bring the sauce to a boil, and then simmer for 10 minutes. Stir in the parsley and basil. Add the chicken and pasta to the sauce, and stir to coat. 6-Season to taste and serve with Parmesan cheese, if desired",
            protien:"7g",
            fat:"2g",
            carbs:"20g",
            calories:"134",
            total:"30minutes",
            cook:"20minutes",
            prep:"10minutes",
            quantity1:"13",
            quantity2:"2",
            quantity3:"1",
            quantity4:"0.25",
            quantity5:"0.25",
            quantity6:"1",
            quantity7:"3",
            quantity8:"1",
            quantity9:"28",
            unit1:"ounces",
            unit2:"unit",
            unit3:"teaspoon",
            unit4:"teaspoon",
            unit5:"teaspoon",
            unit6:"unit",
            unit7:"cloves",
            unit8:"unit",
            unit9:"ounces",
            type1:"whole wheat penne",
            type2:"boneless skinless chicken breasts, cut into 1-inch pieces",
            type3:"olive oil",
            type4:"salt",
            type5:"ground pepper",
            type6:"small onion chopped",
            type7:" large carrots cut into half circles",
            type8:"garlic minced",
            type9:"can crushed tomatoes",

        },
        "honey-chicken": {
            recipename:"Honey-chicken",
            servingQuantity: "4 servings",
            dropdown:"option1",
            //recipecourse:"main course",
            steps:"",
            protien:"27g",
            fat:"7g",
            carbs:"42g",
            calories:"530",
            total:"40minutes",
            cook:"22minutes",
            prep:"18minute",
            quantity1:"1",
            quantity2:"2",
            quantity3:"1",
            quantity4:"0.25",
            quantity5:"0.25",
            quantity6:"1",
            quantity7:"1",
            quantity8:"28",
            quantity9:"1",
            unit1:"package",
            unit2:"ounces",
            unit3:"teaspoon",
            unit4:"teaspoon",
            unit5:"teaspoon",
            unit6:"unit",
            unit7:"unit",
            unit8:"ounces",
            unit9:"tablespoon",
            type1:"whole wheat penne",
            type2:"boneless skinless chicken breasts, cut into 1-inch piece",
            type3:"olive oil",
            type4:"salt",
            type5:"ground pepper",
            type6:"small chopped onion",
            type7:"chopped carrot",
            type8:"can crushed tomatoes",
            type9:"vinegar",
        },
    };
    const recipeLowerCase = recipe.toLowerCase();
    // Set placeholders for the selected recipe
    if (placeholders.hasOwnProperty(recipeLowerCase)) {
        document.getElementById("recipename").value = placeholders[recipeLowerCase].recipename;
        document.getElementById("servingQuantity").value = placeholders[recipeLowerCase].servingQuantity;
        document.getElementById("dropdown").value = placeholders[recipeLowerCase].dropdown;
        //document.getElementById("recipecourse").value = placeholders[recipeLowerCase].recipecourse;
        document.getElementById("prep").value = placeholders[recipeLowerCase].prep;
        document.getElementById("cook").value = placeholders[recipeLowerCase].cook;
        document.getElementById("total").value = placeholders[recipeLowerCase].total;
        document.getElementById("calories").value = placeholders[recipeLowerCase].calories;
        document.getElementById("carbs").value = placeholders[recipeLowerCase].carbs;
        document.getElementById("fat").value = placeholders[recipeLowerCase].fat;
        document.getElementById("protien").value = placeholders[recipeLowerCase].protien;
        document.getElementById("steps").value = placeholders[recipeLowerCase].steps;
        document.getElementById("type1").value = placeholders[recipeLowerCase].type1;
        document.getElementById("type2").value = placeholders[recipeLowerCase].type2;
        document.getElementById("type3").value = placeholders[recipeLowerCase].type3;
        document.getElementById("type4").value = placeholders[recipeLowerCase].type4;
        document.getElementById("type5").value = placeholders[recipeLowerCase].type5;
        document.getElementById("type6").value = placeholders[recipeLowerCase].type6;
        document.getElementById("type7").value = placeholders[recipeLowerCase].type7;
        document.getElementById("type8").value = placeholders[recipeLowerCase].type8;
        document.getElementById("type9").value = placeholders[recipeLowerCase].type9;
        document.getElementById("unit1").value = placeholders[recipeLowerCase].unit1;
        document.getElementById("unit2").value = placeholders[recipeLowerCase].unit2;
        document.getElementById("unit3").value = placeholders[recipeLowerCase].unit3;
        document.getElementById("unit4").value = placeholders[recipeLowerCase].unit4;
        document.getElementById("unit5").value = placeholders[recipeLowerCase].unit5;
        document.getElementById("unit6").value = placeholders[recipeLowerCase].unit6;
        document.getElementById("unit7").value = placeholders[recipeLowerCase].unit7;
        document.getElementById("unit8").value = placeholders[recipeLowerCase].unit8;
        document.getElementById("unit9").value = placeholders[recipeLowerCase].unit9;
        document.getElementById("quantity1").value = placeholders[recipeLowerCase].quantity1;
        document.getElementById("quantity2").value = placeholders[recipeLowerCase].quantity2;
        document.getElementById("quantity3").value = placeholders[recipeLowerCase].quantity3;
        document.getElementById("quantity4").value = placeholders[recipeLowerCase].quantity4;
        document.getElementById("quantity5").value = placeholders[recipeLowerCase].quantity5;
        document.getElementById("quantity6").value = placeholders[recipeLowerCase].quantity6;
        document.getElementById("quantity7").value = placeholders[recipeLowerCase].quantity7;
        document.getElementById("quantity8").value = placeholders[recipeLowerCase].quantity8;
        document.getElementById("quantity9").value = placeholders[recipeLowerCase].quantity9;


    }
        // Example: document.getElementById("recipeName").placeholder = placeholders[recipe].recipeName;
}

// Get the recipe name from the URL parameter
var recipeName = getUrlParameter('recipe');

// Set placeholders based on the selected recipe
setPlaceholders(recipeName);
