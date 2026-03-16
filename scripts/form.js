
function confirmSubmit() {
    // get the date input value
    const selectedDate = document.getElementById("appointment").value;

    if (!selectedDate) {
        alert("Please select an appointment date.");
        return false; // stop form submission if empty
    }

    alert(`Booking Confirmed! \n PlayDate: ${selectedDate} \n Location: 4821 Paw Print Lane
Houston, TX 77002 \n\n for Cancelation please give us a call at: (713) 555-0194`);
    return true; // allow form submission
}

function confirmSubmit() {
    const selectedDate = document.getElementById("appointment").value;

    if (!selectedDate) {
        alert("Please select an appointment date.");
        return false; // prevent submission
    }

    // Convert YYYY-MM-DD → DD/MM/YYYY
    const parts = selectedDate.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

    // Show popup
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupOk = document.getElementById("popup-ok");

    popupMessage.textContent = 
        `Booking Confirmed!\nPlayDate: ${formattedDate}\nLocation: 4821 Paw Print Lane, Houston, TX 77002\n\nFor cancellation, please call: (713) 555-0194`;

    popup.style.display = "flex"; // show popup

    // Close popup and submit form on OK click
    popupOk.onclick = function() {
        popup.style.display = "none";
        document.getElementById("adoptionForm").submit();
    }

    return false; // prevent default submission until OK is clicked
}