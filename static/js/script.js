// Apply stored dark mode preference on page load
document.addEventListener("DOMContentLoaded", function () {
    const isDark = localStorage.getItem("dark-mode") === "true";
    const body = document.body;
    const icon = document.getElementById("darkModeIcon");

    if (isDark) {
        body.classList.add("dark-mode");
        if (icon) icon.textContent = "☀️";
    } else {
        body.classList.remove("dark-mode");
        if (icon) icon.textContent = "🌙";
    }
});

// Toggle dark mode and save preference
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDark);

    const icon = document.getElementById("darkModeIcon");
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
}

// Toggle results display
function toggleResults() {
    const box = document.getElementById("resultsBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
}

// Upload progress bar
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("uploadForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            const progressBar = document.getElementById("progressBar");
            progressBar.style.display = "block";
            let progress = 0;
            const interval = setInterval(() => {
                progress = Math.min(progress + 10, 95);
                progressBar.value = progress;
            }, 200);

            setTimeout(() => {
                clearInterval(interval);
                progressBar.value = 100;
            }, 2000);
        });
    }
});

// ...existing code...

// Sync dark mode across tabs/windows
window.addEventListener("storage", function (e) {
    if (e.key === "dark-mode") {
        const isDark = e.newValue === "true";
        const body = document.body;
        const icon = document.getElementById("darkModeIcon");
        if (isDark) {
            body.classList.add("dark-mode");
            if (icon) icon.textContent = "☀️";
        } else {
            body.classList.remove("dark-mode");
            if (icon) icon.textContent = "🌙";
        }
    }
});

// ...existing code...