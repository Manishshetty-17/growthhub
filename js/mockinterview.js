let currentQuestions = [];
let currentQuestion = 0;

const hrQuestions = [
{
    question: "Tell me about yourself.",
    answer: "I am a motivated individual with a passion for learning and personal growth. I have developed technical, communication, and problem-solving skills through my education and projects. I enjoy taking on new challenges and am looking forward to contributing to an organization while continuously improving my abilities."
},

{
    question: "Why should we hire you?",
    answer: "I have a strong willingness to learn, adapt, and contribute. I possess technical knowledge, problem-solving skills, and a positive attitude. I am a quick learner who enjoys taking responsibility and working with teams to achieve goals."
},

{
    question: "What are your strengths?",
    answer: "My strengths include problem-solving, adaptability, teamwork, and a strong learning mindset. I stay committed to my goals and continuously work on improving my technical and communication skills."
},

{
    question: "What is your biggest weakness?",
    answer: "Earlier, I sometimes spent too much time perfecting small details. However, I have learned to balance quality with efficiency by setting priorities and managing my time effectively."
},

{
    question: "Where do you see yourself in 5 years?",
    answer: "In five years, I see myself as a skilled professional with strong technical expertise, contributing to impactful projects, taking on greater responsibilities, and continuously learning new technologies."
},

{
    question: "Why do you want to work for our company?",
    answer: "Your company has a strong reputation for innovation, learning, and growth. I am excited about the opportunity to contribute to meaningful projects while developing my skills in a professional environment."
},

{
    question: "Describe a challenge you faced and how you overcame it.",
    answer: "During a project, my team faced difficulties due to limited time and technical challenges. I divided the tasks, communicated regularly with team members, and focused on problem-solving. As a result, we successfully completed the project on time."
},

{
    question: "Are you a team player?",
    answer: "Yes. I enjoy collaborating with others, sharing ideas, and supporting teammates. I believe teamwork helps achieve better results and creates a positive working environment."
},

{
    question: "How do you handle pressure or tight deadlines?",
    answer: "I stay calm, prioritize tasks based on importance, and focus on one task at a time. Effective planning and time management help me perform well even under pressure."
},

{
    question: "Do you have any questions for us?",
    answer: "Yes. I would like to know more about the team I would be working with, the learning opportunities available, and what success looks like in this role during the first year."
}
];

const technicalQuestions = {

    software: [
       {
    question: "What is Object-Oriented Programming (OOP)?",
    answer: "OOP is a programming paradigm based on objects and classes. The four main principles are Encapsulation, Inheritance, Polymorphism, and Abstraction."
},

{
    question: "What is the difference between a Stack and a Queue?",
    answer: "A Stack follows the LIFO (Last In First Out) principle, while a Queue follows the FIFO (First In First Out) principle."
},

{
    question: "What is the difference between an Array and a Linked List?",
    answer: "Arrays store elements in contiguous memory locations and allow fast indexing, while Linked Lists store elements using nodes connected by pointers and allow efficient insertions and deletions."
},

{
    question: "What is a Database?",
    answer: "A Database is an organized collection of data that can be stored, managed, and retrieved efficiently."
},

{
    question: "What is the difference between SQL and NoSQL?",
    answer: "SQL databases use structured tables with fixed schemas, while NoSQL databases use flexible data models such as documents, key-value pairs, and graphs."
},

{
    question: "What is an API?",
    answer: "An API (Application Programming Interface) allows different software applications to communicate and exchange data."
},

{
    question: "What is the difference between HTTP and HTTPS?",
    answer: "HTTPS is the secure version of HTTP and uses SSL/TLS encryption to protect data transmitted between the client and server."
},

{
    question: "What is a Process and what is a Thread?",
    answer: "A Process is an independent program in execution, while a Thread is a lightweight unit of execution within a process."
},

{
    question: "What is Git?",
    answer: "Git is a version control system used to track code changes, collaborate with teams, and manage project history."
},

{
    question: "What is the difference between Compilation and Interpretation?",
    answer: "Compilation translates the entire source code into machine code before execution, while Interpretation translates and executes code line by line."
}
    ],

    web: [
        {
    question: "What is the difference between HTML, CSS, and JavaScript?",
    answer: "HTML provides the structure of a webpage, CSS is used for styling and layout, and JavaScript adds interactivity and dynamic behavior."
},

{
    question: "What is the DOM?",
    answer: "DOM (Document Object Model) is a tree-like representation of an HTML document that allows JavaScript to access and modify webpage content and structure."
},

{
    question: "What is the difference between let, const, and var in JavaScript?",
    answer: "var is function-scoped, let is block-scoped and can be reassigned, while const is block-scoped and cannot be reassigned."
},

{
    question: "What is the difference between == and === in JavaScript?",
    answer: "== compares values after type conversion, while === compares both value and data type without type conversion."
},

{
    question: "What is an API?",
    answer: "An API allows different software applications to communicate and exchange data."
},

{
    question: "What is Responsive Web Design?",
    answer: "Responsive Web Design ensures that a website adapts and looks good on different screen sizes such as mobiles, tablets, and desktops."
},

{
    question: "What is the difference between GET and POST requests?",
    answer: "GET is used to retrieve data from a server, while POST is used to send data to a server."
},

{
    question: "What is Event Delegation in JavaScript?",
    answer: "Event Delegation is a technique where a parent element handles events for its child elements using event bubbling."
},

{
    question: "What is Local Storage?",
    answer: "Local Storage is a browser feature that allows data to be stored permanently on the user's device until it is manually cleared."
},

{
    question: "What is the difference between Frontend and Backend Development?",
    answer: "Frontend development focuses on the user interface and user experience, while Backend development handles server-side logic, databases, and APIs."
}
    ],

    cyber: [
      {
    question: "What is Cybersecurity?",
    answer: "Cybersecurity is the practice of protecting systems, networks, and data from cyber attacks, unauthorized access, and digital threats."
},

{
    question: "What is the difference between Authentication and Authorization?",
    answer: "Authentication verifies a user's identity, while Authorization determines what resources or actions the user is allowed to access."
},

{
    question: "What is a Firewall?",
    answer: "A Firewall is a security system that monitors and controls incoming and outgoing network traffic based on predefined security rules."
},

{
    question: "What is Phishing?",
    answer: "Phishing is a cyber attack in which attackers trick users into revealing sensitive information such as passwords, banking details, or personal data."
},

{
    question: "What is the CIA Triad?",
    answer: "The CIA Triad stands for Confidentiality, Integrity, and Availability, which are the three fundamental principles of information security."
},

{
    question: "What is the difference between HTTP and HTTPS?",
    answer: "HTTPS uses SSL/TLS encryption to secure communication between a client and server, while HTTP transmits data in plain text."
},

{
    question: "What is Encryption?",
    answer: "Encryption is the process of converting readable data into an unreadable format so that only authorized parties can access it."
},

{
    question: "What is Malware?",
    answer: "Malware is malicious software designed to damage, disrupt, or gain unauthorized access to computer systems. Examples include viruses, worms, and ransomware."
},

{
    question: "What is SQL Injection?",
    answer: "SQL Injection is a web application attack where malicious SQL queries are inserted into input fields to manipulate or access database information."
},

{
    question: "What is a VPN?",
    answer: "A VPN (Virtual Private Network) creates an encrypted connection between a user's device and a network, improving privacy and security."
}
    ],

    data: [
      {
    question: "What is Data Science?",
    answer: "Data Science is the field of extracting meaningful insights and knowledge from data using statistics, programming, and machine learning techniques."
},

{
    question: "What is the difference between Structured and Unstructured Data?",
    answer: "Structured data is organized in rows and columns, such as databases, while unstructured data includes text, images, videos, and other formats that do not follow a predefined structure."
},

{
    question: "What is Data Cleaning?",
    answer: "Data Cleaning is the process of identifying and correcting errors, missing values, duplicate records, and inconsistencies in a dataset."
},

{
    question: "What is Machine Learning?",
    answer: "Machine Learning is a branch of Artificial Intelligence that enables computers to learn patterns from data and make predictions without being explicitly programmed."
},

{
    question: "What is the difference between Supervised and Unsupervised Learning?",
    answer: "Supervised Learning uses labeled data to train models, while Unsupervised Learning works with unlabeled data to discover hidden patterns."
},

{
    question: "What is Overfitting?",
    answer: "Overfitting occurs when a machine learning model learns the training data too well, including noise, resulting in poor performance on new data."
},

{
    question: "What is a Dataset?",
    answer: "A Dataset is a collection of related data used for analysis, training machine learning models, and making predictions."
},

{
    question: "What is the purpose of Data Visualization?",
    answer: "Data Visualization helps represent data using charts, graphs, and dashboards, making it easier to understand trends and insights."
},

{
    question: "What is the difference between Mean, Median, and Mode?",
    answer: "Mean is the average value, Median is the middle value after sorting, and Mode is the value that appears most frequently in a dataset."
},

{
    question: "What is Python's role in Data Science?",
    answer: "Python is widely used in Data Science because it provides powerful libraries such as NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis and machine learning."
}
    ],

    cloud: [
      {
    question: "What is Cloud Computing?",
    answer: "Cloud Computing is the delivery of computing services such as servers, storage, databases, networking, and software over the internet."
},

{
    question: "What are the main types of Cloud Computing services?",
    answer: "The three main service models are IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service)."
},

{
    question: "What is the difference between Public, Private, and Hybrid Cloud?",
    answer: "A Public Cloud is available to everyone over the internet, a Private Cloud is dedicated to a single organization, and a Hybrid Cloud combines both approaches."
},

{
    question: "What is AWS?",
    answer: "AWS (Amazon Web Services) is a cloud computing platform that provides services such as computing, storage, networking, databases, and security."
},

{
    question: "What is Virtualization?",
    answer: "Virtualization is the technology that allows multiple virtual machines to run on a single physical machine by sharing hardware resources."
},

{
    question: "What is a Virtual Machine (VM)?",
    answer: "A Virtual Machine is a software-based computer that runs an operating system and applications just like a physical computer."
},

{
    question: "What is Docker?",
    answer: "Docker is a containerization platform that packages applications and their dependencies into lightweight containers for consistent deployment."
},

{
    question: "What is the difference between Containers and Virtual Machines?",
    answer: "Containers share the host operating system and are lightweight, while Virtual Machines include a full operating system and require more resources."
},

{
    question: "What is Scalability in Cloud Computing?",
    answer: "Scalability is the ability of a cloud system to increase or decrease resources based on workload demands."
},

{
    question: "What is Load Balancing?",
    answer: "Load Balancing distributes incoming traffic across multiple servers to improve performance, reliability, and availability."
}
    ]
};

function loadQuestion() {

    document.getElementById("answer-box").classList.add("hidden");

    document.getElementById("question-number").innerText =
    `Question ${currentQuestion + 1} of ${currentQuestions.length}`;

    document.getElementById("question").innerText =
    currentQuestions[currentQuestion].question;

    document.getElementById("answer").innerText =
    currentQuestions[currentQuestion].answer;
}

function startHRInterview() {

    currentQuestions = hrQuestions;
    currentQuestion = 0;

    document.querySelector(".interview-selection").style.display = "none";

    document.getElementById("question-box")
    .classList.remove("hidden");

    loadQuestion();
}

function startTechnicalInterview() {

    document.querySelector(".interview-selection").style.display = "none";

    document.getElementById("stream-selection")
    .classList.remove("hidden");
}

function startTechnicalStream(stream) {

    currentQuestions = technicalQuestions[stream];
    currentQuestion = 0;

    document.getElementById("stream-selection")
    .style.display = "none";

    document.getElementById("question-box")
    .classList.remove("hidden");

    loadQuestion();
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("show-answer-btn")
    .addEventListener("click", function() {

        document.getElementById("answer-box")
        .classList.remove("hidden");

    });

    document.getElementById("next-btn")
    .addEventListener("click", function() {

        currentQuestion++;

        if(currentQuestion < currentQuestions.length){

            loadQuestion();

        }else{

            document.getElementById("question-box").innerHTML = `
                <h2>🎉 Interview Completed</h2>
                <p>Great Job!</p>
                <button onclick="location.reload()">
                    Start Again
                </button>
            `;
        }

    });

});