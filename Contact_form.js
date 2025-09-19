// Send details via mail
function sendMail() {
    let name = document.getElementById("name").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let email = document.getElementById("email").value.trim();
    let university = document.getElementById("university").value.trim();
    let city = document.getElementById("city").value.trim();
    let game = document.getElementById("game").value.trim();
    let gender = document.getElementById("gender").value.trim();

    // Check if any field is empty
    if (!name || !contact || !email || !university || !city || !game) {
        if gender === "Female" {
            alert("Please fill in all the fields before submitting.");
            return; 
        } else {
            if (!AccountHolder || !transactionID){
                alert("Please fill in all the fields before submitting.");
                return;
            }
        }
    }

    let parms = { name, contact, email, university, city, game };

    emailjs.send("service_cfmdki9", "template_cnn87ut", parms)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("Email Sent", response);
        })
        .catch((error) => {
            alert("Failed to send email.");
            console.error("Email Error:", error);
        });
}