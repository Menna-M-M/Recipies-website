function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var userIdInput = document.getElementById("userId");
    var reasonCheckboxes = document.querySelectorAll('input[name="reason"]');
    var reasonTextArea = document.getElementById("reason");
    var deleteButton = document.querySelector(".delete");
    var cancelButton = document.querySelector(".cl");
    
    if (userIdInput && reasonCheckboxes && reasonTextArea && deleteButton && cancelButton) {
        var elseCheckbox = document.querySelector('input[name="reason"][value="else"]');

        elseCheckbox.addEventListener("change", function() {
            if (this.checked) {
                reasonTextArea.classList.remove('hide');
            } else {
                reasonTextArea.classList.add('hide');
            }
        });
    }
    deleteButton.addEventListener("click", function() {
        var userId = userIdInput.value.trim();
        if (!userId.match(/^\d+$/)) {
            alert("Please enter a valid numeric ID.");
            return;
        }
        
        if (userId != 5) {
            alert("Please enter your correct admin ID (in your profile).");
            return;
        }
        
        var atLeastOneReasonSelected = false;
        reasonCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                atLeastOneReasonSelected = true;
            }
        });
        
        if (!atLeastOneReasonSelected) {
            alert("Please choose at least one reason.");
            return;
        }

        // Proceed with deletion logic
        function confirmDelete(recipeId) {
          // Display confirmation dialog
          var confirmDelete = confirm("Are you sure you want to delete this recipe?");
          
          if (confirmDelete) {
              // Perform deletion
              localStorage.removeItem(`recipe_${recipeId}`);
              var recipeCard = document.getElementById(recipeId);
              if (recipeCard) {
                  recipeCard.remove();
              } else {
                  console.log(`Recipe with ID ${recipeId} not found.`);
              }
          }
      }
    });

    cancelButton.addEventListener("click", function() {
        alert("Deletion cancelled.");
    });
});
