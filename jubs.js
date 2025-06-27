// Tabs JS
function showTab(evt, tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(c => c.classList.remove("active"));
  buttons.forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
