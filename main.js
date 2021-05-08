const shoppingList = [
  { ingredients: "Rice", acquired: false },
  { ingredients: "Onion", acquired: false },
  { ingredients: "Butter", acquired: true },
  { ingredients: "Parmesan", acquired: true },
  { ingredients: "Garlic", acquired: false },
  { ingredients: "Wild Mushroom", acquired: false },
  { ingredients: "Chicken Stock", acquired: false },
  { ingredients: "White Wine", acquired: false },
  { ingredients: "Basil", acquired: true },
  { ingredients: "Oregano", acquired: true },
  { ingredients: "Chili Flakes", acquired: true },
];
function addListItem(item) {
  //Adds items to the html list
  let list = document.querySelector("#shopping-list");
  let newListItem = document.createElement("li");

  newListItem.innerText = item.ingredients;
  if (item.acquired) {
    newListItem.classList.add(".in-basket");
  }
  //Adds a CheckBox to each List Item
  let newTickBox = document.createElement("input");
  newTickBox.type = "checkbox";
  if (item.acquired) {
    newTickBox.checked = true;
  }
  newTickBox.addEventListener("change", updateAcquired); //Adds an event listener to the new checkbox
  newListItem.appendChild(newTickBox);
  list.appendChild(newListItem);
}
resetList(); //On start of page, updates the html list

function addNewItem() {
  //Adds a new item to the array then updates the list
  let newItem = document.getElementById("new-item-input").value;
  let exitFuncton = false;
  //Stops adding more than one of the same item, not sure if there's a simplar method but it works!
  shoppingList.forEach((item) => {
    if (item.ingredients === newItem) {
      exitFuncton = true;
      return;
    }
  });
  if (exitFuncton) {
    return;
  }
  let newListObject = { ingredients: newItem, acquired: false };
  shoppingList.push(newListObject);
  addListItem(newListObject);
}
document.getElementById("new-item").addEventListener("click", addNewItem);

function resetList() {
  //Resets the html list to it's the same as the Array
  while (document.getElementById("shopping-list").firstChild) {
    document.getElementById("shopping-list").firstChild.remove();
  }
  shoppingList.forEach(addListItem);
}

function removeList() {
  //What the name says
  shoppingList.length = 0;
  resetList();
}
document.getElementById("remove-list").addEventListener("click", removeList);
//Add checkbox input to html
const checkBoxes = document.querySelectorAll("input[type=checkbox]");
// .addEventListener("click", updateAcquired);

function updateAcquired() {
  const listIndex = shoppingList.findIndex(
    (item) => item.ingredients === event.target.parentElement.innerText
  );
  //Finds the index of the shopping list that matches that of the item just clicked

  shoppingList[listIndex].acquired = !shoppingList[listIndex].acquired;
  resetList();
}
document.getElementById("remove-acquired").addEventListener("click", removeClicked);

function removeClicked() {
  const filteredShoppingList = shoppingList.filter((item) => item.acquired === false);
  //Creates a new array of unticked items
  shoppingList.length = 0;
  filteredShoppingList.forEach((item) => shoppingList.push(item));
  //Adds those items to the origional array
  resetList();
}
document.getElementById("filter-list").addEventListener("click", function () {
  shoppingList.sort((item1, item2) => item1.ingredients.localeCompare(item2.ingredients));
  resetList();
});
