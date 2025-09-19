const scriptURL = '://script.google.com/macros/s/AKfycbxjPZay5ijjfNrbPeHGjCscaTUEiQzKzPaAfb6G4DMUqQjqzQoajuTDohwYlR9NA6Yx/exec';
const form = document.forms['contactform'];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    var gender = document.getElementById("gender").value;
    var accountHolder = document.getElementById("AccountHolder");
    var transactionID = document.getElementById("transactionID");

    var formData = new FormData(form);

    // If Female, remove required attribute & set payment details as "N/A"
    if (gender === "Female") {
        formData.set("AccountHolder", "N/A");
        formData.set("TransactionID", "N/A");

        // Remove "required" to prevent form error
        accountHolder.removeAttribute("required");
        transactionID.removeAttribute("required");
    } else {
        // Add "required" back if Male is selected
        accountHolder.setAttribute("required", "true");
        transactionID.setAttribute("required", "true");
    }

try {
    const response = await fetch(scriptURL, { method: 'POST', body: formData });
    const json = await response.json(); // Parse JSON response
    
    console.log("Response:", json);  // Log response for debugging

    if (json.status === "success") {
        alert(json.message); // Show success message
        window.location.reload(); // Reload the page
    } else {
        alert(`Error: ${json.message}`); // Show error message
    }
} catch (error) {
    console.error('Error!', error.message);
    alert("Form submission failed. See console for details.");
}
});

function handleGenderSelection() {
    var gender = document.getElementById("gender").value;
    var paymentDetails = document.getElementById("paymentDetails");
    var freeMessage = document.getElementById("freeMessage");
    var accountHolder = document.getElementById("AccountHolder");
    var transactionID = document.getElementById("transactionID");

    if (gender === "Female") {
        paymentDetails.style.display = "none";
        freeMessage.style.display = "block";

        // Remove required attributes
        accountHolder.removeAttribute("required");
        transactionID.removeAttribute("required");
    } else {
        paymentDetails.style.display = "block";
        freeMessage.style.display = "none";

        // Add required attributes back
        accountHolder.setAttribute("required", "true");
        transactionID.setAttribute("required", "true");
    }
}
