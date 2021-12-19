let counterValue = Number(document.querySelector("#value").textContent);
const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');

incrBtn.addEventListener("click", increment);
decrBtn.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  document.querySelector("#value").textContent = String(counterValue);
}

function decrement() {
  counterValue -= 1;
  document.querySelector("#value").textContent = String(counterValue);
}