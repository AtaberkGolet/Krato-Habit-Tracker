function tickOnClick(event) {
    event.currentTarget.classList.toggle("completed");
}

function wda() {
    let list = document.querySelectorAll("button")
    list.forEach((btn) => 
        btn.addEventListener("click", tickOnClick))
}

const list = [
    {habit:"Kitap Okuma", daysStreak:3},
    {habit:"Anki Kart", daysStreak:21},
    {habit:"spor", daysStreak:2}
]

let habitsThatFromLocalStorage = new Array();
let habitArray = JSON.parse(localStorage.getItem("habit"))
habitArray.forEach(element => {
    habitsThatFromLocalStorage.push(element);
});

window.addEventListener("storage", () => {
    
})

function addHabitByList(list){
    let container = document.querySelector(".habit-list")
    list.forEach((card) => {
        const cardHTML = `
<div class="habit-card">
    <span class="habit-name">${card.habit}</span>
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

function addHabitfromLocalStorage(){
    let container = document.querySelector(".habit-list")
    let habitArray = JSON.parse(localStorage.getItem("habit"))
    habitArray.forEach((card) => {
        const cardHTML = `
<div class="habit-card">
    <span class="habit-name">${card.habit}</span>
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

addHabitByList(list);
addHabitByList(habitsThatFromLocalStorage);
wda();