window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
});

function submitFeedback(id) {
    const message = document.getElementById(id).value;

    if (message.trim() === "") {
        alert("Please write something before submitting.");
        return;
    }

    alert("Thank you for your feedback! 😊");

    document.getElementById(id).value = "";
}

function saveFeedback() {
  const input = document.getElementById("mainFeedback");
  const message = input.value.trim();

  if (message === "") {
    alert("Please write something before submitting.");
    return;
  }

  // Get existing feedback
  let feedbacks = JSON.parse(localStorage.getItem("anveshikaFeedback")) || [];

  // Add new feedback
  feedbacks.push(message);

  // Save back to localStorage
  localStorage.setItem("anveshikaFeedback", JSON.stringify(feedbacks));

  input.value = "";

  displayFeedback();
}

function displayFeedback() {
  const feedbackList = document.getElementById("feedbackList");
  feedbackList.innerHTML = "";

  let feedbacks = JSON.parse(localStorage.getItem("anveshikaFeedback")) || [];

  feedbacks.forEach(function (msg) {
    const div = document.createElement("div");
    div.className = "feedback-item";
    div.textContent = msg;
    feedbackList.appendChild(div);
  });
}

// Load feedback when page opens
document.addEventListener("DOMContentLoaded", displayFeedback);

