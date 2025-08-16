// Get the name element in the profile page
var nameElement = document.getElementById('profile-name');

// Function to update the user's name
function updateUserName(name) {
    nameElement.textContent = name;
}

// Check if 'userName' is available in local storage
var storedUserName = localStorage.getItem('userName');

// If 'userName' is available, update the profile with it
if (storedUserName) {
    updateUserName(storedUserName);
}

// Check if the user has signed up for the first time or if local storage isn't available
var joinedDate = localStorage.getItem('joinedDate');
if (!joinedDate || typeof joinedDate !== 'string') {
    // If local storage isn't available or it's the first time, set the joined date to today's date
    var today = new Date();
    var formattedDate = today.toLocaleDateString();
    document.getElementById('joined-date').textContent = formattedDate;
} else {
    // If the user has signed up before and local storage is available, display the stored joined date
    document.getElementById('joined-date').textContent = joinedDate;
}

// Save the user's info to local storage when the "Save" button is clicked
document.getElementById('save-button').addEventListener('click', function() {
    // Update social media
    var facebook = document.getElementById('facebook').value;
    var twitter = document.getElementById('twitter').value;
    var instagram = document.getElementById('instagram').value;
    localStorage.setItem('facebook', facebook);
    localStorage.setItem('twitter', twitter);
    localStorage.setItem('instagram', instagram);

    // Update profile photo
    var newPhoto = document.getElementById('profile-img').src;
    localStorage.setItem('profilePhoto', newPhoto);
});


document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-img');
    const fileInput = document.getElementById('file-input');
    const logoutButton = document.getElementById('logout-button');
    

    // When profile image is clicked, trigger file input click
    profileImg.addEventListener('click', function() {
        fileInput.click();
    });

    // When a new file is selected, update the profile image
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                profileImg.src = reader.result;
            }
            reader.readAsDataURL(file);
        }
    });

    
});


    // Close the modal when the close button is clicked
    document.querySelectorAll('.close').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            currentPasswordModal.style.display = 'none';
            newPasswordModal.style.display = 'none';
        });
    });


document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    const logoutYesButton = document.getElementById('logout-yes');
    const logoutCancelButton = document.getElementById('logout-cancel');
    const confirmationDialogContainer = document.getElementById('confirmation-dialog-container');

    // Function to show the confirmation dialog
    function showConfirmationDialog() {
        confirmationDialogContainer.style.display = 'flex';
    }

    // Function to hide the confirmation dialog
    function hideConfirmationDialog() {
        confirmationDialogContainer.style.display = 'none';
    }

    // When logout button is clicked, show the confirmation dialog
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of the button
        showConfirmationDialog();
    });

    // When "Yes" button in the confirmation dialog is clicked, perform logout
    logoutYesButton.addEventListener('click', function() {
        // Perform logout actions here
        // Redirect to homepage.html
        window.location.href = 'homepage.html';

        // Hide confirmation dialog
        hideConfirmationDialog();
    });

    // When "Cancel" button in the confirmation dialog is clicked, hide the dialog
    logoutCancelButton.addEventListener('click', function() {
        // Hide confirmation dialog
        hideConfirmationDialog();
    });
});
