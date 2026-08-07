window.process = window.process || { env: { NODE_ENV: 'production' } };

// Tab functionality
const tablinks = document.getElementsByClassName("tab-links");const tabcontents = document.getElementsByClassName("tab-contents");
for (const tablink of tablinks){
  tablink.addEventListener("click", function(opentab) {
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    opentab.currentTarget.classList.add("active-link");
    const tabName = opentab.currentTarget.dataset.target;
    document.getElementById(tabName).classList.add(`active-tab`);
  });
}
