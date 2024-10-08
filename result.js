document.addEventListener('DOMContentLoaded', function() {
    // Retrieve form data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Check if formData exists and contains necessary fields
    if (formData && formData.username && formData.email) {
        // Display the submitted data in the result page
        document.getElementById('fullname').textContent = formData.username;
        document.getElementById('email').textContent = formData.email;
    } else {
        // Handle error or redirect to index.html if data is missing
        console.error('Form data not found in localStorage');
    }

    // Clear localStorage after retrieving data
    localStorage.removeItem('formData');
});
