const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});
const ingredientsContainer = document.querySelector("#ingredients");

ingredientsContainer.append(...ingredientsItems);