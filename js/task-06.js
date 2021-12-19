const input = document.querySelector("#validation-input");

const lengthForVerification = Number(
  document.querySelector("#validation-input").dataset.length
);

input.addEventListener("blur", checkInputAndColorBorder);
function checkInputAndColorBorder() {
  if (input.value.length === lengthForVerification) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}