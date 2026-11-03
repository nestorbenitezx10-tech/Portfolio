
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";
});

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    document.getElementById("formNotice").textContent =
        "The form is working, but messages are not sent yet. Connect a form service to receive messages.";

    event.target.reset();
});
