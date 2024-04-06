// JavaScript to handle preloader and transitions
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close");
    const addBtn = document.getElementById("add-btn");
    const browseBtn = document.getElementById("browse-btn");

    // Open model when "Add Image of Fruit" button is clicked
    document.getElementById("add-image-btn").addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close model when close button is clicked
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Handle button clicks in the modal
    addBtn.addEventListener("click", function() {
        // Redirect to another page with the option in the query string
        window.location.href = "upload.html?option=UseCamera";
    });

    browseBtn.addEventListener("click", function() {
        // Redirect to another page with the option in the query string
        window.location.href = "upload.html?option=BrowseFiles";
    });
});

