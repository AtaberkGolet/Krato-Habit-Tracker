const form = document.querySelector("form")
const submitBtn = document.querySelector("#submitHabit");
const habitName  = document.querySelector("#habitName");
let habitArray = JSON.parse(localStorage.getItem("habit"));

form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    if(!habitName.value.trim()){
        alert("Please Write Habit Name");
        return;
    }
    habit = new Habit(habitName.value);
    console.log(habitName.value)
    console.log(habit)
    Habit.addHabitToLocalStorage(habit,habitArray);
    habitArray = JSON.parse(localStorage.getItem("habit"));
});

