const reviewEl = document.querySelectorAll(".rating");
const cardEl = document.getElementById("cardId");
let btn = document.getElementById("btn");

let selectedRating = "";

reviewEl.forEach((elementsEl) => {
    elementsEl.addEventListener("click", (event) => {
        removeActive();

        // Ensure we select the parent div (rating) even if an icon or text is clicked
        const selectedElement = event.target.closest(".rating");

        if (!selectedElement) return; // Prevents errors if something unexpected is clicked

        selectedRating = selectedElement.querySelector("p").innerText; // Get text inside <p>
        selectedElement.classList.add("active"); // Apply active class to rating div
    });
});

btn.addEventListener("click", () => {
    if (selectedRating !== "") {
        cardEl.innerHTML = `<strong id="title">Thank You!</strong> 
        <br><br>
        <strong id="desc">Feedback: ${selectedRating}</strong>
        <p id="pId">We'll use your feedback to improve our customer support.</p>`;
    }
});

function removeActive() {
    reviewEl.forEach((elementsEl) => {
        elementsEl.classList.remove("active"); // Remove from all ratings
    });
}
