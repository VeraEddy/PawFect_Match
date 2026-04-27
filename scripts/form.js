const form = document.getElementById("adoptionForm");
const dateInput = document.getElementById("appointment");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupOk = document.getElementById("popup-ok");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split('T')[0];
dateInput.setAttribute("min", minDate);

function confirmSubmit() {
    const selectedDate = dateInput.value;

    if (!selectedDate) {
        alert("Please select an appointment date.");
        return false;
    }

    const selectedDateObj = new Date(selectedDate);
    const tomorrowDateObj = new Date();
    tomorrowDateObj.setDate(tomorrowDateObj.getDate() + 1);
    tomorrowDateObj.setHours(0,0,0,0); // ignore time
    if (selectedDateObj < tomorrowDateObj) {
        alert("Appointments must be scheduled at least for the next day.");
        return false;
    }

    const parts = selectedDate.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

    popupMessage.innerHTML = `
        <strong>Booking Confirmed!</strong><br>
        PlayDate: ${formattedDate}<br>
        Location: 4821 Paw Print Lane, Houston, TX 77002<br>
        For cancellation, please call: (713) 555-0194<br>
    `;

    popup.style.display = "flex";

    popupOk.onclick = function() {
        popup.style.display = "none";
        form.submit();
    }

    return false;
}