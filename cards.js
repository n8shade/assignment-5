const buttons = document.querySelectorAll(".completed");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Button clicked!");
        event.target.disabled = true;
    });
});