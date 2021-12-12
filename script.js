const form = document.querySelector("form");
const subject = document.getElementById("form-subject");
const terms = document.getElementById("invalidCheck");
const stateNames = document.querySelectorAll(".state-name");
const rowName = document.querySelector(".row-name");
const email = document.getElementById("email");
const countries = document.querySelectorAll("#country option");
const country = document.getElementById("country");
const colOtherCountry = document.querySelector(".col-other-country");
const otherCountry = document.getElementById("other-country");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const additionalInfo = document.getElementById("textarea");
const colCounter = document.getElementById("counter");
const allInputs = document.querySelectorAll("form input");

//Events
form.addEventListener("submit", checkForm);

//Exectute Functions
checkName(stateNames);
sortCountries(countries);
showOtherCountry(country);
countLetters(additionalInfo);

//Functions
function checkForm(e) {
  e.preventDefault();
  checkEmpty(subject);
  checkEmpty(terms);
  checkEmail(email);
  checkMinOtherCountry(otherCountry);
  checkCity(city, zip);
  showContentInConsole(allInputs, country, additionalInfo);
}

function showError(input, message) {
  input.classList.add("is-invalid");
  const parentEl = input.parentElement;
  const small = parentEl.querySelector("small");
  small.textContent = message;
  small.className = "error";
}

function checkEmpty(input) {
  if (input.checked == false && input.value.trim() === "") {
    showError(input, "please fill the field.");
  }
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showError(input, "please give a valid email.");
  }
}

function checkName(input) {
  input.forEach((item) => {
    item.addEventListener("change", (e) => {
      if (e.target.value == "no") {
        rowName.classList.add("d-none");
      } else {
        rowName.classList.remove("d-none");
      }
    });
  });
}

function sortCountries(input) {
  let arrCountries = [];
  for (let i = 1; i < input.length - 1; i++) {
    arrCountries.push(input[i].textContent);
  }
  arrCountries = arrCountries.sort();
  for (let i = 1; i < input.length - 1; i++) {
    input[i].textContent = arrCountries[i - 1];
  }
}

function showOtherCountry(input) {
  input.addEventListener("change", () => {
    if (input.value === "Other Country") {
      colOtherCountry.classList.remove("d-none");
    } else {
      colOtherCountry.classList.add("d-none");
    }
  });
}

function checkMinOtherCountry(input) {
  console.log(typeof input.value);
  if (input.value.trim().length < 3) {
    showError(input, "please give min. 3 characters.");
  }
}

function checkCity(city, zip) {
  if (city.value.trim() === "") {
    showError(zip, "please fill the city field first.");
  }
}

function countLetters(textarea) {
  let counter;
  textarea.addEventListener("input", (e) => {
    if (textarea.value.length < 1001) {
      counter = textarea.value.length;
      colCounter.textContent = counter;
    } else {
      textarea.value = textarea.value.substring(0, 1001);
    }
  });
}

function showContentInConsole(allInputs, select, textarea) {
  let obj = {};

  allInputs.forEach((input) => {
    if (input.value.trim() !== "") {
      if (["checkbox", "radio"].indexOf(input.type) > -1 && !input.checked) {
        return;
      }
      // console.log(input.value);
      let name = input.getAttribute("data-id");
      obj[name] = input.value;
    }
  });
  obj["country"] = select.value;
  obj["aditional informations"] = textarea.value;
  console.log(obj);
}
