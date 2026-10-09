function tickOnClick(event) {
    event.currentTarget.classList.toggle("completed");
}

function markButton() {
    let list = document.querySelectorAll(".button")
    list.forEach((btn) => 
        btn.addEventListener("click", tickOnClick))
}

Habit.addHabit();
markButton();