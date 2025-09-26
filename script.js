// Content for each "page"
const pages = {
  home: `
    <h1>Welcome to Energy Appliances</h1>
    <p>
      Learn about how household appliances consume electricity in the Australian market. 
      Our aim is to help consumers make informed choices for energy-efficient living.
    </p>
    <p>
      Did you know? The average Australian household spends 
      <strong>around 40% of its energy on appliances</strong>.
    </p>
  `,
  televisions: `
    <h1>Televisions & Energy Consumption</h1>
    <p>
      Modern televisions in Australia are required to display an 
      <strong>Energy Rating Label</strong> showing their efficiency.
    </p>
    <ul>
      <li>LED TVs generally consume less energy than Plasma or LCD TVs.</li>
      <li>Screen size impacts electricity usage significantly.</li>
      <li>Energy-efficient TVs may save households up to <strong>$200 per year</strong>.</li>
    </ul>
  `,
  about: `
    <h1>About Us</h1>
    <p>
      We provide insights on household appliance energy consumption in the Australian market.  
      Our mission is to raise awareness about sustainable energy use and cost savings for consumers.
    </p>
    <p>
      Information provided is based on Australian government energy efficiency programs and market studies.
    </p>
  `
};

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
