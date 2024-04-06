document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const selectedOption = params.get('option');
    document.getElementById('selected-option').innerText = selectedOption;

    const fileInput = document.getElementById("file-input");
    const uploadBtn = document.getElementById("upload-btn");

    // Handle upload button click
    uploadBtn.addEventListener("click", function() {
        fileInput.click();
    });

    // Handle file input change
    fileInput.addEventListener("change", function() {
        // Display selected file name
        document.getElementById('selected-file').innerText = this.files[0].name;
    });
});
