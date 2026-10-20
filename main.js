function tickOnClick(event) {
    event.currentTarget.classList.toggle("completed");
}

function markButton() {
    let list = document.querySelectorAll(".button")
    list.forEach((btn) => 
        btn.addEventListener("click", tickOnClick))
}

function forwardURL(event) {
    if(event.target.closest(".button")){
        return
    }
    id = event.currentTarget.dataset.id;
    console.log(id);
    window.location.href = "details.html?id=" + id;
}

function habitListener() {
    let list = document.querySelectorAll(".habit-card")
    console.log(list)
    list.forEach((habit) => 
        habit.addEventListener("click", forwardURL))
}

Habit.addHabit();
markButton();
habitListener();