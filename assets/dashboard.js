// Salary Chart
new Chart(document.getElementById("salaryChart"), {
    type: 'scatter',
    data: {
        datasets: [{
            label: "Experience vs Salary",
            data: [
                {x:1, y:400000},
                {x:2, y:550000},
                {x:3, y:700000},
                {x:4, y:900000},
                {x:5, y:1200000},
                {x:6, y:1500000},
                {x:7, y:1800000},
                {x:8, y:2200000}
            ],
            backgroundColor: "#60a5fa",
            pointRadius: 6
        }]
    },
    options: {
        ...chartOptions(),
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: { color: "#cbd5e1" }
            },
            y: {
                ticks: { color: "#cbd5e1" }
            }
        }
    }
});



// Industry Chart
new Chart(document.getElementById("industryChart"), {
    type: 'doughnut',
    data: {
        labels: ["Healthcare","IT Services","Finance","E-commerce","Education"],
        datasets: [{
            data: [20,22,25,18,15],
            backgroundColor: [
                "#60a5fa",
                "#a78bfa",
                "#f59e0b",
                "#34d399",
                "#f87171"
            ]
        }]
    },
    options: chartOptions()
});

// Language Chart
new Chart(document.getElementById("languageChart"), {
    type: 'bar',
    data: {
        labels: ["Python","R","SQL","Java","Others"],
        datasets: [{
            label: "Usage %",
            data: [65,15,10,5,5],
            backgroundColor: "#a78bfa"
        }]
    },
    options: chartOptions()
});

// Job Growth Chart
const jobsCtx = document.getElementById("jobsChart").getContext("2d");

new Chart(jobsCtx, {
    type: "line",
    data: {
        labels: ["2018", "2020", "2022", "2024", "2026"],
        datasets: [{
            label: "Number of Jobs",
            data: [45000, 70000, 110000, 175000, 250000],
            borderColor: "#3b82f6",
            borderWidth: 3,
            fill: false,               // 🔥 IMPORTANT (removes area)
            tension: 0.3,              // smooth curve
            pointRadius: 5,
            pointBackgroundColor: "#3b82f6",
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "#e2e8f0",
                    font: { size: 14 }
                }
            },
            tooltip: {
                backgroundColor: "#1e293b",
                titleColor: "#fff",
                bodyColor: "#cbd5e1"
            }
        },
        scales: {
            x: {
                ticks: { color: "#cbd5e1" },
                grid: {
                    color: "rgba(255,255,255,0.05)"
                }
            },
            y: {
                ticks: { 
                    color: "#cbd5e1"
                },
                grid: {
                    color: "rgba(255,255,255,0.05)"
                }
            }
        }
    }
});



// Common Chart Options
function chartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000
        },
        plugins: {
            legend: {
                labels: { color: "#e2e8f0" }
            }
        },
        scales: {
            x: {
                ticks: { color: "#cbd5e1" }
            },
            y: {
                ticks: { color: "#cbd5e1" }
            }
        }
    };
}

