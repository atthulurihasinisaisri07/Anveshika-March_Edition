// SALARY CHART
new Chart(document.getElementById("salaryChart"), {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8],
        datasets: [{
            label: "Salary (INR)",
            data: [400000,550000,700000,900000,1200000,1500000,1800000,2200000],
            borderColor: "#38bdf8",
            backgroundColor: "rgba(56,189,248,0.2)",
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: { labels: { color: "white" } }
        },
        scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" } }
        }
    }
});


// JOB GROWTH CHART
new Chart(document.getElementById("jobsChart"), {
    type: 'line',
    data: {
        labels: ["2018","2020","2022","2024","2026"],
        datasets: [{
            label: "AI Jobs",
            data: [45000,70000,110000,175000,250000],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.2)",
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: { labels: { color: "white" } }
        },
        scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" } }
        }
    }
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
