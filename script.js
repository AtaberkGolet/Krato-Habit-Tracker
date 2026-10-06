function tickOnClick(event) {
    event.currentTarget.classList.toggle("completed");
}

function wda() {
    let list = document.querySelectorAll("button")
    list.forEach((btn) => 
        btn.addEventListener("click", tickOnClick))
}

let habitName = "Koşu"
let streakCount = 5

let container = document.querySelector(".habit-list")

function addHabit(habitName, streakCount, container){
    const cardHTML = `
<div class="habit-card">
    <span class="habit-name">${habitName}</span>
    <div class="days-container">
        <div class="day">S</div>
        <div class="day">M</div>
        <div class="day">T</div>
        <div class="day">W</div>
        <div class="day">T</div>
        <div class="day">F</div>
        <div class="day">S</div>
    </div>
    <p class="days-streaker">${streakCount}</p>
    <button id="button"></button>
</div>
`;

    container.insertAdjacentHTML("beforeend", cardHTML)
}

const list = [
    {habitName:"Kitap Okuma", daysStreak:3},
    {habitName:"Anki Kart", daysStreak:21},
    {habitName:"spor", daysStreak:2}
]

function addHabitByList(list){
    let container = document.querySelector(".habit-list")
    list.forEach((card) => {
        const cardHTML = `
<div class="habit-card">
    <span class="habit-name">${card.habitName}</span>
    <div class="days-container">
        <div class="day">S</div>
        <div class="day">M</div>
        <div class="day">T</div>
        <div class="day">W</div>
        <div class="day">T</div>
        <div class="day">F</div>
        <div class="day">S</div>
    </div>
    <p class="days-streaker">${card.daysStreak}</p>
    <button id="button"></button>
</div>
`;
        container.insertAdjacentHTML("beforeend", cardHTML)
}
)


}



addHabit(habitName, streakCount, container);
addHabitByList(list);
wda();