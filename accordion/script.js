(function () {
  //Selectors
  const accordion = document.querySelector(".accordion");
  const bodyAccordions = document.querySelectorAll(".body-accordion");
  const plusMinus = document.querySelectorAll("span");
  //Events
  accordion.addEventListener("click", showAccordion);

  //Functions
  function showAccordion(e) {
    if (e.target.classList.contains("btn-accordion") || e.target.tagName == "SPAN") {
      const nextEl = e.target.classList.contains("btn-accordion") ? e.target.nextElementSibling : e.target.parentElement.nextElementSibling;
      if (!nextEl.style.maxHeight) {
        bodyAccordions.forEach((bodyAccordion) => {
          if (bodyAccordion.style.maxHeight) {
            bodyAccordion.style.maxHeight = null;
          }
        });
        plusMinus.forEach((sign) => {
          sign.innerText = "+";
        });
        nextEl.style.maxHeight = nextEl.scrollHeight + "px";
        e.target.firstElementChild ? (e.target.firstElementChild.innerText = "-") : (e.target.innerText = "-");
      } else {
        nextEl.style.maxHeight = null;
        e.target.firstElementChild ? (e.target.firstElementChild.innerText = "+") : (e.target.innerText = "+");
      }
    }
  }
})();
