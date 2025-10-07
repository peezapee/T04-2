// Show page content
function showPage(page) {
  document.getElementById("content").innerHTML = pages[page];

  // Update active nav link
  document.querySelectorAll(".navbar a").forEach(link => link.classList.remove("active"));
  document.getElementById(`nav-${page}`).classList.add("active");
}

// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  showPage("home"); // Load home by default
});
