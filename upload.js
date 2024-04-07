/*upload.js*/
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const selectedOption = params.get('option');
    document.getElementById('selected-option').innerText = selectedOption;

    const fileInput = document.getElementById("file-input");
    const browseBtn = document.getElementById("browse-btn");

 
    browseBtn.addEventListener("click", function() {
        fileInput.click();
    });

 
    fileInput.addEventListener("change", function() {
       document.getElementById('selected-file').innerText = this.files[0].name;
    });
});
