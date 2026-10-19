class Habit {
    id = "";
    habitName;
    completedDays = [];

    constructor(habitName) {
        this.habitName = habitName;
        this.id = crypto.randomUUID();
        
    }

    static addHabit(){
        let container = document.querySelector(".habit-list")
        let habitArray = JSON.parse(localStorage.getItem("habit"))
        if (habitArray == null){
            habitArray = new Array();
        }
        habitArray.forEach((card) => {
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
    <p class="days-streaker">0</p>
    <button class="button"></button>
</div>
`;
        container.insertAdjacentHTML("beforeend", cardHTML)
    })
    }

    static addHabitToLocalStorage(habit, habitArray){
        try {
            habitArray.push(habit);
        } 
        catch (err) {
            if (err instanceof TypeError){
                console.log("A")
                habitArray = new Array();
                habitArray.push(habit);
            }
        }
        localStorage.setItem("habit", JSON.stringify(habitArray))
    }

}