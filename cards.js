const buttons = document.querySelectorAll(".completed");
const assignedTasks = document.getElementById("assigned-tasks");
const totalTasks = document.getElementById("total-tasks");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        alert("Task completed successfully!")
        let currentCount = getInnerTextById("assigned-tasks");
        let currentTotalCount = getInnerTextById("total-tasks");
        assignedTasks.innerText = currentCount - 1;
        totalTasks.innerText = currentTotalCount + 1;
        event.target.disabled = true;
        const paragraph = document.getElementById("paragraph")
        const p = document.createElement("p");
        p.innerText=`
        task completed successfully, bye bye
        `
        paragraph.appendChild(p)
    });
});


