function searchJobs() {

    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    let jobs = document.querySelectorAll(".job-card");

    let found = false;

    jobs.forEach(function(job) {

        let text = job.textContent.toLowerCase();

        if (text.includes(input)) {
            job.style.display = "";
            found = true;
        } 
        else {
            job.style.display = "none";
        }

    });

    if (!found) {
        alert("No jobs found matching your search.");
    }
}


// Apply Job Function

function applyJob(jobTitle) {

    let name = prompt("Enter your name to apply for " + jobTitle);

    if (name && name.trim() !== "") {

        alert(
            "Thank you " + name +
            "! Your application for " +
            jobTitle +
            " has been submitted successfully."
        );

    } else {

        alert("Application cancelled.");

    }
}