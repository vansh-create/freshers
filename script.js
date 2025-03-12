 // Image Modal Functionality
 function openModal(img) {
    document.getElementById("expandedImage").src = img.src;
    document.getElementById("imageModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById("imageModal")) {
        closeModal();
    }
}


