(function () {
  //DOM elements
  const header = document.querySelector("header");
  const bntToggleHeader = document.querySelector(".toggle-header");
  //Events
  bntToggleHeader.addEventListener("click", toggleHeader);

  //Functions
  function toggleHeader() {
    header.classList.toggle("hide");
  }
})();
