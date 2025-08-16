function validateInput(event) {
    // Get the input element
    var textInput = document.getElementById("inputname");
    var recipeInput = document.getElementById("recipename");


    // Get the input value
    var inputValue = textInput.value;
    var recipevalue= recipeInput.value;



    // Check if the input contains numbers
    if (/\d/.test(inputValue)) {
        // Show alert message
        alert("Please enter your name letters only!");

        // Prevent form submission
        event.preventDefault();
    }
    if (/\d/.test(recipevalue)) {
        // Show alert message
        alert("Please enter the recipe name letters only!");

        // Prevent form submission
        event.preventDefault();
    }}



document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitbtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get values from form fields
        var recipeName = document.getElementById('recipename').value;
        var recipeImage = document.getElementById('inputGroupFile04').value;

        // Save values to local storage
        localStorage.setItem('recipeName', recipeName);
        localStorage.setItem('recipeImage', recipeImage);

      
    });
})

