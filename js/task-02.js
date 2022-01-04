const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const navEl = document.querySelector('ul')
console.log(navEl);


for (let i = 0; i < ingredients.length; i += 1) {
  const navItemEl = document.createElement("li");
navItemEl.classList.add('item');
navItemEl.textContent = ingredients[i];
console.log(navItemEl);
navEl.appendChild(navItemEl, navEl.firstElementChild)

}

// const navItemEl2 = document.createElement("li");
// navItemEl2.classList.add('item');
// navItemEl2.textContent = ingredients[1];
// console.log(navItemEl2);
// navEl.appendChild(navItemEl2, navEl.firstElementChild)

// const navItemEl3 = document.createElement("li");
// navItemEl3.classList.add('item');
// navItemEl3.textContent = ingredients[2];
// console.log(navItemEl3);
// navEl.appendChild(navItemEl3, navEl.firstElementChild)

// const navItemEl4 = document.createElement("li");
// navItemEl4.classList.add('item');
// navItemEl4.textContent = ingredients[3];
// console.log(navItemEl4);
// navEl.appendChild(navItemEl4, navEl.firstElementChild)

// const navItemEl5 = document.createElement("li");
// navItemEl5.classList.add('item');
// navItemEl5.textContent = ingredients[4];
// console.log(navItemEl5);
// navEl.appendChild(navItemEl5, navEl.firstElementChild)

// const navItemEl6 = document.createElement("li");
// navItemEl6.classList.add('item');
// navItemEl6.textContent = ingredients[5];
// console.log(navItemEl6);
// navEl.appendChild(navItemEl6,navEl.firstElementChild)