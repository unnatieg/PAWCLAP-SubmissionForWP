const container = document.querySelector(".container"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

const input_fields = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]+)(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/,
};

const validate = (field, regex) => {
  regex.test(field.value)
    ? (field.className = "valid")
    : (field.className = "invalid");
};

let keys = document.querySelectorAll("input");
keys.forEach((item) =>
  item.addEventListener("keyup", (e) => {
    validate(e.target, input_fields[e.target.attributes.name.value]);
  })
);
