const reservationForm = document.querySelector("#reservation-form");
const confirmationMessage = document.querySelector("#form-confirmation");

if (!(reservationForm instanceof HTMLFormElement) || !(confirmationMessage instanceof HTMLElement)) {
  throw new Error("Reservation form elements are missing from the page.");
}

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmationMessage.textContent =
    "Thanks! Your reservation request is ready. This demo does not send or save your details, so please contact the restaurant directly to confirm a table.";
  confirmationMessage.hidden = false;
});
