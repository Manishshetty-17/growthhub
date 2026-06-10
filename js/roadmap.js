
function generateRoadmap() {

    let career = document.getElementById("career").value;
    let roadmap = "";

    if (career === "software") {

        roadmap = `
        <div class="roadmap-box">

            <h2>💻 Your Software Engineering Journey</h2>

            <p>
                If you want to become a strong software engineer, start simple and stay consistent.
                Don’t rush — follow this path step by step.
            </p>

            <h3>🧠 Step 1: Build Your Foundation</h3>
            <p>
                First, choose ONE programming language (Java or C++ or Python).
                Focus on understanding basics like loops, functions, arrays.
            </p>
            <p>📺 Learn from: CodeWithHarry / Apna College</p>

            <h3>⚙️ Step 2: Start Problem Solving</h3>
            <p>
                Now move into Data Structures and Algorithms.
                Don’t just learn — practice daily.
            </p>
            <p>
                Follow: <a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target="_blank">Striver SDE Sheet</a>
            </p>
            <p>
                Practice on:
                <a href="https://leetcode.com" target="_blank">LeetCode</a> and
                <a href="https://www.geeksforgeeks.org" target="_blank">GeeksforGeeks</a>
            </p>

            <h3>🚀 Step 3: Think Like an Engineer</h3>
            <p>
                Start learning Git & GitHub. Build small projects like calculator, todo app, portfolio website.
                This is where you start becoming job-ready.
            </p>

            <h3>🏗️ Step 4: Build Real Projects</h3>
            <p>
                Don’t stay in tutorials. Build real-world apps like e-commerce or blog platform.
                Upload everything on GitHub.
            </p>

            <h3>🎯 Final Step: Get Ready for Placement</h3>
            <p>
                Revise DSA, practice mock interviews, and improve aptitude skills.
                Apply for internships and keep improving daily.
            </p>

        </div>
        `;
    }

    else if (career === "cyber") {

        roadmap = `
        <div class="roadmap-box">

            <h2>🔐 Your Cybersecurity Journey</h2>

            <p>
                Cybersecurity is not about memorizing — it's about thinking like an attacker.
                Learn step by step and practice daily.
            </p>

            <h3>🌐 Step 1: Understand Networks</h3>
            <p>
                Learn how the internet works: IP, DNS, HTTP, ports.
                Without this, hacking makes no sense.
            </p>
            <p>📺 Watch: NetworkChuck YouTube channel</p>

            <h3>🐧 Step 2: Learn Linux + Python</h3>
            <p>
                Linux is your main weapon. Learn commands and basic scripting in Python.
            </p>
            <p>
                Practice here: <a href="https://tryhackme.com" target="_blank">TryHackMe</a>
            </p>

            <h3>🛡️ Step 3: Learn Ethical Hacking Basics</h3>
            <p>
                Learn how attacks work (SQL injection, XSS, scanning tools).
                Understand tools like Nmap and Burp Suite.
            </p>

            <h3>💻 Step 4: Practice Real Hacking Labs</h3>
            <p>
                Don’t just watch — practice.
                Use:
                <a href="https://tryhackme.com" target="_blank">TryHackMe</a> and
                <a href="https://www.hackthebox.com" target="_blank">Hack The Box</a>
            </p>

            <h3>🏆 Final Step: Build & Certify</h3>
            <p>
                Do CTF challenges, build security projects, and aim for certifications like CEH or Security+.
            </p>

        </div>
        `;
    }

    else if (career === "fullstack") {

    roadmap = `
    <div class="roadmap-box">

        <h2>🌐 Your Full Stack Developer Journey</h2>

        <p>
            You are becoming a builder of complete applications.
            Focus on learning step by step — don’t jump directly to frameworks.
        </p>

        <h3>🎨 Step 1: Frontend Basics</h3>
        <p>
            Start with HTML, CSS, and JavaScript. Build simple pages first.
        </p>
        <p>📺 Learn from: <a href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a></p>

        <h3>⚙️ Step 2: JavaScript Deep Practice</h3>
        <p>
            Learn DOM, events, functions, and async JS properly.
        </p>
        <p>💻 Practice: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN JavaScript Docs</a></p>

        <h3>⚛️ Step 3: React Framework</h3>
        <p>
            Learn React to build modern UI applications.
        </p>
        <p>📺 Learn: <a href="https://react.dev" target="_blank">React Official Docs</a></p>

        <h3>🧠 Step 4: Backend Development</h3>
        <p>
            Learn Node.js + Express.js to build APIs.
        </p>
        <p>📺 Learn: <a href="https://nodejs.org" target="_blank">Node.js Official Site</a></p>

        <h3>🗄️ Step 5: Database</h3>
        <p>
            Learn MongoDB or MySQL and connect with backend.
        </p>
        <p>💻 Practice: <a href="https://www.mongodb.com/docs/" target="_blank">MongoDB Docs</a></p>

        <h3>🚀 Step 6: Real Projects + Deployment</h3>
        <p>
            Build full apps like e-commerce, chat app, blog system.
            Deploy using Vercel or Netlify.
        </p>
        <p>
            <a href="https://vercel.com" target="_blank">Vercel</a> |
            <a href="https://netlify.com" target="_blank">Netlify</a>
        </p>

    </div>
    `;
}
    else if (career === "data") {

    roadmap = `
    <div class="roadmap-box">

        <h2>📊 Your Data Analyst Journey</h2>

        <p>
            You are learning to turn raw data into meaningful insights.
            Focus more on practice than theory.
        </p>

        <h3>📘 Step 1: Excel Mastery</h3>
        <p>
            Learn formulas, charts, pivot tables.
        </p>
        <p>📺 Learn: <a href="https://www.youtube.com/@excelisfun" target="_blank">ExcelIsFun</a></p>

        <h3>🗄️ Step 2: SQL Basics</h3>
        <p>
            Learn SELECT, JOIN, GROUP BY, WHERE.
        </p>
        <p>
            Practice: <a href="https://www.hackerrank.com/domains/sql" target="_blank">HackerRank SQL</a>
        </p>

        <h3>🐍 Step 3: Python for Data</h3>
        <p>
            Learn Pandas, NumPy, Matplotlib.
        </p>
        <p>📺 Learn: <a href="https://www.kaggle.com/learn/python" target="_blank">Kaggle Python Course</a></p>

        <h3>📊 Step 4: Data Visualization</h3>
        <p>
            Learn Power BI or Tableau to create dashboards.
        </p>
        <p>
            <a href="https://powerbi.microsoft.com" target="_blank">Power BI</a>
        </p>

        <h3>🚀 Step 5: Projects</h3>
        <p>
            Work on real datasets like sales, finance, Netflix data.
        </p>
        <p>
            Practice on <a href="https://www.kaggle.com" target="_blank">Kaggle</a>
        </p>

    </div>
    `;
}

   else if (career === "aiml") {

    roadmap = `
    <div class="roadmap-box">

        <h2>🤖 Your AI / ML Engineer Journey</h2>

        <p>
            You are entering one of the most powerful fields in tech.
            Stay strong in math + practice coding daily.
        </p>

        <h3>📐 Step 1: Math Foundation</h3>
        <p>
            Learn linear algebra, probability, and statistics.
        </p>

        <h3>🐍 Step 2: Python + Libraries</h3>
        <p>
            Learn NumPy, Pandas, Matplotlib.
        </p>
        <p>
            Practice: <a href="https://www.kaggle.com/learn" target="_blank">Kaggle Learn</a>
        </p>

        <h3>🧠 Step 3: Machine Learning</h3>
        <p>
            Learn regression, classification, clustering algorithms.
        </p>
        <p>📺 Learn: Andrew Ng ML Course (Coursera)</p>

        <h3>🔥 Step 4: Deep Learning</h3>
        <p>
            Learn neural networks, CNN, RNN basics.
        </p>
        <p>
            <a href="https://www.tensorflow.org" target="_blank">TensorFlow</a>
        </p>

        <h3>🚀 Step 5: Projects</h3>
        <p>
            Build spam detector, image classifier, chatbot.
        </p>

        <h3>🏆 Step 6: Practice</h3>
        <p>
            Compete on <a href="https://www.kaggle.com" target="_blank">Kaggle Competitions</a>
        </p>

    </div>
    `;
}
    else {

    roadmap = `
    <div class="roadmap-box">

        <h2>⚠️ Select a Career Path</h2>

        <p>
            Please choose a career option first.
            I can guide you properly only when I know your direction.
        </p>

        <p>
            💡 Tip: Don’t switch paths frequently. Stick to one and master it.
        </p>

    </div>
    `;
}

    document.getElementById("roadmapResult").innerHTML = roadmap;
}