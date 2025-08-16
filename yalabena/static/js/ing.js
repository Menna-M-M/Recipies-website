function addFormFields() {
    // Prompt the user to enter the number of forms to add
    var numForms = prompt('How many forms do you want to add?', '1');

    // Convert the input to a number
    numForms = parseInt(numForms);

    // Check if the input is a valid number
    if (isNaN(numForms) || numForms <= 0) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    var formFieldsDiv = document.getElementById('inglist');

    // Loop to create the specified number of form fields
    for (var i = 0; i < numForms; i++) {
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <li><a class="dropdown-item" href="#"><input class="ingbox1" type="text" placeholder="quantity" id="quantity6"> <input class="ingbox" type="text" placeholder="unit"> <input class="ingbox" type="text" placeholder="type"></a></li></br>

        `;

        // Append new form fields to the form
        formFieldsDiv.appendChild(newDiv);
    }
};