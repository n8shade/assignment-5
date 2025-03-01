
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4F7FF", "#FF33A1", "#FFD700"];
let index = 0;

function changeBackground() {
    // Use for...of loop to iterate through the colors
    let i = 0;
    for (let color of colors) {
        if (i === index) {
            document.getElementById("container").style.backgroundColor = color;
            break; // Exit loop once the color is applied
        }
        i++; // Increment index counter
    }

    // Move to the next color, reset if at the end
    index = (index + 1) % colors.length;
}

