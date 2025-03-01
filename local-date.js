const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
document.getElementById("current-date").innerText = formattedDate;
