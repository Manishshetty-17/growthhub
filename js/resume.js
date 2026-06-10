function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value;
    let github = document.getElementById("github").value;
    

    let objective = document.getElementById("objective").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let experience = document.getElementById("experience").value;
    let certificates = document.getElementById("certificates").value;
    let achievements = document.getElementById("achievements").value;
  

    let resume = `
        <div class="resume-box">

            <h1>${name}</h1>
            <hr>

            <p>${email}</p>
            <p>${phone}</p>
            <p>${linkedin}</p>
            <p>${github}</p>
            

            <h3>Career Objective</h3>
            <p>${objective}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Technical Skills</h3>
            <p>${skills}</p>

            <h3>Projects</h3>
            <p>${projects}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Certificates</h3>
            <p>${certificates}</p>

            <h3>Achievements</h3>
            <p>${achievements}</p>

            

        </div>
    `;

    document.getElementById("resumeOutput").innerHTML = resume;
}


function downloadPDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value;
    let github = document.getElementById("github").value;
   

    let objective = document.getElementById("objective").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let experience = document.getElementById("experience").value;
    let certificates = document.getElementById("certificates").value;
    let achievements = document.getElementById("achievements").value;
    

    let y = 15;

    // ================= NAME (CENTERED BIG)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(name || "Your Name", 105, y, { align: "center" });

    y += 6;

    // ================= CONTACT LINE (LIKE IMAGE)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    let contactLine =
        `${email}   |   ${phone}   |   ${linkedin}   |   ${github}`;

    doc.text(contactLine, 105, y + 5, { align: "center" });

    y += 15;

    // ================= FUNCTION FOR SECTION
    function addSection(title, content) {

        // heading
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.text(title.toUpperCase(), 10, y);

        // underline line (like your image)
        y += 2;
        doc.line(10, y, 200, y);

        y += 6;

        // content
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);

        let lines = doc.splitTextToSize(content || "-", 180);
        doc.text(lines, 10, y);

        y += lines.length * 6 + 6;
    }

    // ================= SECTIONS
    addSection("Career Objective", objective);
    addSection("Education", education);
    addSection("Technical Skills", skills);
    addSection("Projects", projects);
    addSection("Experience", experience);
    addSection("Certificates", certificates);
    addSection("Achievements", achievements);
   
    doc.save("Resume.pdf");
}