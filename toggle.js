const colors = ["#a22581", "#b26f38", "#b5aea4", "#f4f2ea", "#eadfd2", "#c39797", "#cbbeb5", "#b68af7", "#f5a7da", "#b6d0f0", "#fffaf0", "#abcdef", "#ccccff", "#aea8ef", "#bea8ef", "#c19bf3", "#e5ccc8", "#cb9a91", "#b57063", "#cbb5af", "#bfa39c"];
let index = 0;
document.getElementById("theme").addEventListener("click", function () {
    let color = 0;
    for (i of colors) {
        if (color === index) {
            document.getElementById("body").style.backgroundColor = i;
            break;
        }
        color++;
    }
    index = (index + 1) % colors.length;
})