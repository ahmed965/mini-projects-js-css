(function () {
  //DOM Elemenets
  const body = document.querySelector("body");
  const btnNewsletter = document.querySelector("#newsletter");
  const btnCloseModel = document.querySelector("#closeModel");
  const modal = document.querySelector("#modal");
  const form = document.querySelector("#form");
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const privacy = document.querySelector("#privacy");
  const arrInputs = [firstName, lastName, email];
  let isSubmit = false;

  //Events
  btnNewsletter.addEventListener("click", showModal);
  btnCloseModel.addEventListener("click", closeModal);
  form.addEventListener("submit", checkForm);
  removeBorderInvalid(arrInputs);

  //Functions
  function showModal() {
    modal.classList.add("show");
  }

  function closeModal(e) {
    e.preventDefault();
    modal.classList.remove("show");
  }

  function checkForm(e) {
    e.preventDefault();
    body.addEventListener("click", addBorderErrorsIfNotSubmit);
    if (checkEmptyFields(arrInputs) && checkPrivacy(privacy)) {
      showMessage(`Danke ${firstName.value}  ${lastName.value} für Ihre Anmeldung`, "success");
      clearInputs(arrInputs);
      isSubmit = true;
    } else {
      showMessage("Leider sind Ihre Angaben nicht komplet", "error");
    }
  }

  function checkEmptyFields(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value.trim() == "") {
        return false;
      }
    }
    return true;
  }

  function checkPrivacy(input) {
    if (input.checked) {
      return true;
    }
    return false;
  }

  function showMessage(msg, status) {
    message.textContent = msg;
    message.className = `message show text-white ${status}`;
  }

  function addBorderErrorsIfNotSubmit() {
    message.classList.remove("show");
    if (!isSubmit) {
      for (let i = 0; i < arrInputs.length; i++) {
        if (arrInputs[i].value.trim() == "") {
          arrInputs[i].className = "invalid";
        }
      }
    }
  }

  function clearInputs(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].value = "";
    }
    privacy.checked = false;
  }

  function removeBorderInvalid(arrInputs) {
    arrInputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.classList.remove("invalid");
      });
    });
  }
})();
