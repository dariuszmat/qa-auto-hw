
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulCategories = document.querySelector("#ingredients"); 

const ingredientsArr = ingredients.map((ingredient) => {       
  const li = document.createElement("li");     
  li.textContent = ingredient;              
  li.classList.add("item");  
  return li;                
});
ulCategories.append(...ingredientsArr);
