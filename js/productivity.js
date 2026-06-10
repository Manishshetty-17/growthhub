// SECTION SWITCHING
function showSection(id) {
    let sections = document.querySelectorAll(".card");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

/* ---------------- ATTENDANCE ---------------- */
function calculateAttendance() {

    let attended = parseInt(document.getElementById("attended").value);
    let total = parseInt(document.getElementById("total").value);
    let target = parseInt(document.getElementById("target").value) || 75;

    let resultBox = document.getElementById("attendanceResult");

    if (isNaN(attended) || isNaN(total) || total === 0) {
        resultBox.innerHTML = "⚠️ Enter valid values";
        return;
    }

    let current = (attended / total) * 100;
// CASE 1: Already safe
if (current >= target) {

    let tempAttended = attended;
    let tempTotal = total;
    let canBunk = 0;

    // simulate how many classes you can still miss safely
    while (((tempAttended) / (tempTotal + 1)) * 100 >= target) {
        tempTotal++;
        canBunk++;
    }

    resultBox.innerHTML = `
        <h3>🟢 Current Attendance: ${current.toFixed(2)}%</h3>
        <p>🎉 You are in SAFE ZONE</p>

        <hr>

        <p>😎 You can still bunk <b>${canBunk}</b> classes safely</p>
        <p>⚠️ After that, your attendance will fall below ${target}%</p>
    `;
    return;
}


// CASE 2: Below target → find recovery plan
let required = 0;

let tempAttended = attended;
let tempTotal = total;

// simulate recovery (attend consecutive classes)
while ((tempAttended / tempTotal) * 100 < target) {
    tempAttended++;
    tempTotal++;
    required++;
}

resultBox.innerHTML = `
    <h3>📊 Current Attendance: ${current.toFixed(2)}%</h3>
    <p>🔴 You are below target (${target}%)</p>

    <hr>

    <p>📌 You must attend next <b>${required}</b> classes WITHOUT miss</p>
    <p>✔ After that your attendance becomes ~${((tempAttended / tempTotal) * 100).toFixed(2)}%</p>
`;
}
/* ---------------- CGPA ---------------- */
function addSubject() {
    let container = document.getElementById("subjects");

    let div = document.createElement("div");
    div.classList.add("subject");

    div.innerHTML = `
        <input type="number" placeholder="Marks (out of 100)" class="marks">
        <input type="number" placeholder="Credits" class="credits">
    `;

    container.appendChild(div);
}

function calculateCGPA() {

    let marks = document.querySelectorAll(".marks");
    let credits = document.querySelectorAll(".credits");

    let totalPoints = 0;
    let totalCredits = 0;

    let subjectCount = marks.length;

    if (subjectCount === 0) {
        document.getElementById("cgpaResult").innerText =
            "⚠️ Add at least one subject";
        return;
    }

    for (let i = 0; i < subjectCount; i++) {

        let m = parseFloat(marks[i].value);
        let c = parseFloat(credits[i].value);

        if (isNaN(m) || isNaN(c)) continue;

        let gp = getGradePoint(m);

        totalPoints += gp * c;
        totalCredits += c;
    }

    if (totalCredits === 0) {
        document.getElementById("cgpaResult").innerText =
            "⚠️ Enter valid data";
        return;
    }

    let cgpa = totalPoints / totalCredits;

    // TARGET FEATURE
    let target = parseFloat(document.getElementById("targetCGPA").value);

    let targetMsg = "";
    let suggestion = "";

    if (!isNaN(target)) {

        let neededPoints = (target * totalCredits) - totalPoints;

        if (neededPoints <= 0) {
            targetMsg = `🎉 You already achieved your target CGPA!`;
        } else {
            targetMsg = `🎯 You need ${neededPoints.toFixed(2)} more grade points to reach ${target}`;

            suggestion = `
                <p>📌 Suggestion: Improve next exams in low-score subjects</p>
            `;
        }
    }

    let status = getStatus(cgpa);

    document.getElementById("cgpaResult").innerHTML = `
        <h3>📊 Current CGPA: ${cgpa.toFixed(2)}</h3>
        <p>${status}</p>

        <hr>

        <p>${targetMsg}</p>
        ${suggestion}
    `;
}

// MARKS → GRADE POINT
function getGradePoint(m) {
    if (m >= 90) return 10;
    if (m >= 80) return 9;
    if (m >= 70) return 8;
    if (m >= 60) return 7;
    if (m >= 50) return 6;
    if (m >= 40) return 5;
    return 0;
}

// STATUS SYSTEM
function getStatus(cgpa) {
    if (cgpa >= 9) return "🔥 Excellent Performer";
    if (cgpa >= 8) return "🟢 Very Good";
    if (cgpa >= 7) return "🟡 Good";
    if (cgpa >= 6) return "🟠 Average";
    return "🔴 Need Improvement";
}
/* ---------------- TASKS ---------------- */
let tasks = [];

// LOAD saved data when page opens
window.onload = function () {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
        renderTasks();
    }
};

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {

    let name = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;
    let priority = document.getElementById("taskPriority").value;

    if (name === "") return;

    let task = {
        id: Date.now(),
        name,
        date,
        priority,
        done: false
    };

    tasks.push(task);

    saveTasks();   // 🔥 SAVE AFTER ADD
    renderTasks();

    document.getElementById("taskInput").value = "";
}

function toggleTask(id) {

    tasks = tasks.map(task => {
        if (task.id === id) {
            task.done = !task.done;
        }
        return task;
    });

    saveTasks();   // 🔥 SAVE AFTER UPDATE
    renderTasks();
}
function deleteTask(id) {

    // remove task from array
    tasks = tasks.filter(task => task.id !== id);

    // update storage
    saveTasks();

    // re-render UI
    renderTasks();
}

function renderTasks() {

    let container = document.getElementById("taskList");
    container.innerHTML = "";

    let sorted = tasks.sort((a, b) => {
        let order = { high: 1, medium: 2, low: 3 };
        return order[a.priority] - order[b.priority];
    });

    let completed = 0;

    sorted.forEach(task => {

        if (task.done) completed++;

        let div = document.createElement("div");
        div.className = "task-card";

        if (task.done) div.classList.add("done");

        div.innerHTML = `
            <h3>${task.name}</h3>
            <p>📅 ${task.date || "No date"}</p>
            <p>⚡ Priority: ${task.priority}</p>
            <div class="task-buttons">
    <button onclick="toggleTask(${task.id})">
        ${task.done ? "Undo" : "Mark Done"}
    </button>

    <button onclick="deleteTask(${task.id})" class="delete-btn">
        Delete
    </button>
</div>
        `;

        container.appendChild(div);
    });

    document.getElementById("taskStats").innerText =
        `Completed ${completed} / ${tasks.length} assignments`;
}
/* ---------------- POMODORO ---------------- */
let timer;
let timeLeft = 25 * 60;

let isRunning = false;

let mode = "focus"; // focus | shortBreak | longBreak
let sessionCount = 0;

// TIME SETTINGS
const focusTime = 25 * 60;
const shortBreak = 5 * 60;
const longBreak = 15 * 60;

function startTimer() {
    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {
        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {
            switchMode();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;

    mode = "focus";
    timeLeft = focusTime;

    updateDisplay();
}

function switchMode() {

    if (mode === "focus") {
        sessionCount++;

        if (sessionCount % 4 === 0) {
            mode = "longBreak";
            timeLeft = longBreak;
        } else {
            mode = "shortBreak";
            timeLeft = shortBreak;
        }

    } else {
        mode = "focus";
        timeLeft = focusTime;
    }

    notifyUser();
    updateDisplay();
}

// UPDATE UI
function updateDisplay() {

    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;

    document.getElementById("timer").innerText =
        `${min}:${sec < 10 ? "0" + sec : sec}`;

    document.getElementById("mode").innerText =
        mode === "focus" ? "Focus Mode 🎯" :
        mode === "shortBreak" ? "Short Break ☕" :
        "Long Break 🧠";

    document.getElementById("session").innerText =
        `Sessions Completed: ${sessionCount}`;
}

// NOTIFICATION (optional but powerful)
function notifyUser() {
    if (Notification.permission === "granted") {
        new Notification("Pomodoro Switch!", {
            body: mode === "focus"
                ? "Time to focus 🎯"
                : "Take a break ☕"
        });
    }
}

// ASK PERMISSION ON LOAD
if ("Notification" in window) {
    Notification.requestPermission();
}

// INIT
updateDisplay();
