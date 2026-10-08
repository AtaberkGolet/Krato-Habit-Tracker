const form = document.querySelector("form")
const submitBtn = document.querySelector("#submitHabit");
const habitName  = document.querySelector("#habitName");
const streakCount = document.querySelector("#streakCount");
const habitArray = JSON.parse(localStorage.getItem("habit"))



form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    const tempDict = {
        habit: String(habitName.value),
        daysStreak: streakCount.value
    }
    habitArray.push(tempDict)
    console.log(habitArray)
    localStorage.setItem("habit", JSON.stringify(habitArray))
});

