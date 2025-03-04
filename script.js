const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContainer = document.querySelector(".accordion");
const rezulatsButton = document.getElementById("rezultats-button");
const uzdevumsButton = document.getElementById("uzdevums-button");
const infoContainer = document.querySelector(".info-container");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const activeItem = document.querySelector(".accordion-item.active");
    if (activeItem && activeItem !== this.parentElement) {
      activeItem.classList.remove("active");
    }

    this.parentElement.classList.toggle("active");
  });
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
