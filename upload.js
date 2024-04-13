document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const selectedOption = params.get('option');
    document.getElementById('selected-option').innerText = selectedOption;

    const fileInput = document.getElementById("file-input");

    // Handle file input change
    fileInput.addEventListener("change", function() {
        // Check if a file is selected
        if (this.files && this.files.length > 0) {
            // Redirect to upload.html with the selected option in the query string
            window.location.href ="upload.html?option=BrowseFromFiles" ;
        }
    });
});
