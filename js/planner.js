const quotes = [
    "Your GPA can't hear your excuses.",
    "Coffee is temporary. Results are forever.",
    "Future You is watching.",
    "One more chapter, one step closer.",
    "Study now, thank yourself later.",
    "Studying at 2 AM is a tradition, not a strategy."
];

document.getElementById("quote").innerHTML =
quotes[Math.floor(Math.random() * quotes.length)];

function generatePlan(){

    const subjects =
    document.getElementById("subjects")
    .value
    .split("\n")
    .filter(subject => subject.trim() !== "");

    const tbody =
    document.getElementById("scheduleBody");

    tbody.innerHTML = "";

  let timeSlots = [
    "6:00 AM - 7:30 AM",
    "7:30 AM - 8:00 AM",
    "8:00 AM - 9:30 AM",
    "9:30 AM - 9:45 AM",
    "9:45 AM - 11:15 AM",
    "11:15 AM - 12:00 PM",
    "12:00 PM - 1:30 PM",
    "1:30 PM - 2:00 PM",
    "2:00 PM - 3:30 PM",
    "3:30 PM - 4:00 PM",
    "4:00 PM - 5:30 PM",
    "5:30 PM - 6:30 PM",
    "6:30 PM - 8:00 PM",
    "8:00 PM - 9:00 PM",
    "9:00 PM - 10:00 PM",
    "10:00 PM - 10:45 PM",
    "10:45 PM - 11:30 PM"
];
    let activities = [
    "Study",
    "Breakfast",
    "Study",
    "Break",
    "Study",
    "Lunch",
    "Study",
    "Break",
    "Study",
    "Tea Break",
    "Study",
    "Dinner",
    "Study",
    "Previous Year Questions",
    "Revision",
    "Quick Revision",
    "Plan Tomorrow"
];
    for(let i = 0; i < timeSlots.length; i++){

        let task;

        if(activities[i] === "Study"){
            task =
            subjects[
                Math.floor(Math.random() * subjects.length)
            ] || "Study Session";
        }
        else{
            task = activities[i];
        }

        tbody.innerHTML += `
        <tr>
            <td>${timeSlots[i]}</td>
            <td>${task}</td>
        </tr>
        `;
    }
}

function lastNightMode() {

    alert(
        "⚠️ Emergency Exam Mode Activated!\n\n" +
        "Use this plan only when you're running out of time.\n" +
        "Stay calm. Focus on revision.\n" +
        "Don't panic. You've got this! 💪"
    );

    const tbody = document.getElementById("scheduleBody");

    tbody.innerHTML = `

    <tr>
        <td>6:00 PM - 7:00 PM</td>
        <td>📚 Important Topics</td>
    </tr>

    <tr>
        <td>7:00 PM - 7:15 PM</td>
        <td>☕ Quick Break</td>
    </tr>

    <tr>
        <td>7:15 PM - 8:30 PM</td>
        <td>📝 Previous Year Questions</td>
    </tr>

    <tr>
        <td>8:30 PM - 9:00 PM</td>
        <td>🍽️ Dinner</td>
    </tr>

    <tr>
        <td>9:00 PM - 10:00 PM</td>
        <td>🔄 Revision Round 1</td>
    </tr>

    <tr>
        <td>10:00 PM - 10:30 PM</td>
        <td>📋 Formula Sheet / Notes</td>
    </tr>

    <tr>
        <td>10:30 PM - 11:00 PM</td>
        <td>🎯 Final Revision</td>
    </tr>

    <tr>
        <td>11:00 PM - 11:30 PM</td>
        <td>😌 Relax & Prepare for Sleep</td>
    </tr>

    <tr>
        <td>11:30 PM</td>
        <td>😴 Sleep (Very Important)</td>
    </tr>

    <tr>
        <td colspan="2">
            🚫 Don't make chits.<br>
            🚫 Don't start new chapters.<br>
            ☕ Coffee helps, miracles don't.<br>
            🎯 Focus on important topics.<br>
            💪 Don't panic. Panic never passed an exam.
        </td>
    </tr>

    `;
}