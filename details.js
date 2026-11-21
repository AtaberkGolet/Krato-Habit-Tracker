let params = new URLSearchParams(document.location.search);
const URLid = params.get("id");
let habitArray = JSON.parse(localStorage.getItem("habit"));
const habit = habitArray.find(({id}) => id == URLid)
if(habit == undefined){
   window.location.href = "main.html";
}
const box = document.getElementById("statusBox");
box.textContent = habit.habitName;
