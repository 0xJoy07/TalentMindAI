function rankCandidates() {

    const job = document.getElementById("job").value;

    fetch("/api/rank", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            job: job
        })
    })

    .then(res => res.json())

    .then(data => {

        let output = "";

        data.forEach(candidate => {

            output += `
            <div class="candidate-card">

                <h3>${candidate.name}</h3>

                <p class="score">
                    Match Score: ${candidate.score}%
                </p>

            </div>
            `;
        });

        document.getElementById("result").innerHTML = output;

    });
}

function getLearning() {

    fetch("/api/learning", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            role: document.getElementById("role").value
        })
    })

    .then(res => res.json())
    .then(data => {

        document.getElementById("result").innerHTML =
            JSON.stringify(data, null, 2);
    });
}


function checkAssessment() {

    fetch("/api/assessment", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            score: document.getElementById("score").value,
            hours: document.getElementById("hours").value
        })
    })

    .then(res => res.json())
    .then(data => {

        document.getElementById("result").innerHTML =
            JSON.stringify(data, null, 2);
    });
}