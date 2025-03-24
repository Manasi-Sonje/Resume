// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.innerText = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// GSAP Animations
gsap.from(".section", { 
    opacity: 0, 
    duration: 1, 
    y: 50, 
    stagger: 0.3 
});

// Form Submission Message
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("responseMessage").innerText = "✅ Message Sent Successfully!";
});
