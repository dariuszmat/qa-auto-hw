const categoryList = document.querySelector("#categories");
const categoryItems = categoryList.querySelectorAll("li.item"); 
for (const item of categoryItems) {
  const tittle = item.querySelector("h2").textContent; 
  const categoryElements = item.querySelectorAll("ul li");  
  const numberOfElements = categoryElements.length; 
  console.log("Category " + tittle);
 console.log("Number of categories: ", numberOfElements); 
}
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});
