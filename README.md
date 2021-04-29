# Shopping List

Our task for this week is to make a shopping list. We will be using it as a chance to first practice our DOM manipulation with JS and then our design skills.

## View vs Model

We've talked before about HTML being the body, CSS being the clothes and JavaScript being the brains of a webpage. Today we are going to group HTML and CSS and think about them as the view of our webpage. For our shopping list to be useful it will have to be more than a pretty list of things that never changes. It will need to be data driven, and our data will be the actual items we have added to our shopping list. It is best practice to separate the data behind our app from the view of that data. This separation of concerns gives us the flexibility to change the way data is displayed without modifying the underlying data itself.

## Building a Shopping List 📝

Im half way through my shop and here is my shopping list:

- Rice
- Onion
- Butter ✅
- Parmesan ✅
- Garlic
- Wild Mushroom
- Chicken Stock
- White Wine
- Basil ✅
- Oregano ✅
- Chili Flakes ✅

<details>
<summary>Can you guess what I'm making for dinner?</summary>

Wild Mushroom Risotto!

![](https://cupfulofkale.com/wp-content/uploads/2020/05/Creamy-Vegan-Wild-Mushroom-Risotto-720x720.jpg)

</details>

### Stage 1

Before we start making our app we need to think about how we want to structure our data. From the above list we can see that there are 11 items on the list and that 5 have ticks, indicating that we have already put them in our shopping basket. Have a think about how you would use JavaScript data structures to store this information. In `main.js`, create a variable called shopping list and recreate the above list. Once you have had a go at doing this yourself, have a look at the way we have structured the data and compare it to your own. There is no one way to do this, but each way has pros and cons.

<details>
<summary>DO NOT OPEN (until you have completed step 1)</summary>
<details>
<summary>Are you sure you've completed step 1?</summary>
<details>
<summary>Triple sure???</summary>

```js
const shoppingList = [
  { item: "Rice", isInBasket: false },
  { item: "Onion", isInBasket: false },
  { item: "Butter", isInBasket: true },
  { item: "Parmesan", isInBasket: true },
  { item: "Garlic", isInBasket: false },
  { item: "Wild Mushroom", isInBasket: false },
  { item: "Chicken Stock", isInBasket: false },
  { item: "White Wine", isInBasket: false },
  { item: "Basil", isInBasket: true },
  { item: "Oregano", isInBasket: true },
  { item: "Chili Flakes", isInBasket: true },
];
```

Here we have chosen an array of objects as our data structure. Arrays are for lists of items of the same type. Each item is an object with a key of `item`, which holds a string value so we can track the name of the item; and a key of `isInBasket`, which holds a boolean value representing whether the item is in or out of the basket.

</details>
</details>
</details>

The following stages will help you structure building your shopping list. However, they only give an outline of what we need to do. For each stage, you will need to break down the stage into steps until you are able to start writing the code which will complete the stage. There may be different ways to solve the problem, so don't focus on finding the 'right' answer. Use your problem solving mindset to break it down and complete the stage!

### Stage 2

Now that we have a data structure to represent our list we can turn that into a view. What we want to do is display a list of items on the page.

<details>
<summary>What HTML elements are appropriate for our this task?</summary>

A `ul` with `li` elements as children.

</details>

So, our task is to use this array of objects to display an unordered list on our page. We know we will want a `ul` so lets create that in the `index.html`. We now want to create a list item for each object in our array. Using our computational thinking skills we can break this problem down and create a function that takes in a single item name as a string and a boolean telling us if it is in the basket, and creates a single `li`. We can then loop over all the items and use our function multiple times. This should happen as soon as the page loads. This problem will need breaking down further but that will be down to you!

Each list item should be something like this:

```html
<!-- E.G. 1 -->
<li class="in-basket">Item Name</li>
<!-- E.G. 2 -->
<li>Other Item Name</li>
```

NOTE: the class of in-basket would only be applied when the boolean value of `isInBasket` is true for the item. That way we can use CSS that applies only to completed items to make them appear different.

### Stage 3

We are now at the stage where we have an array of items and an unordered list displayed on the page. Lets add the functionality to add items to the list. We will first do this using prompt and then refactor to use an HTML text input.

1. Create a function that asks the user to input an item using a prompt.
2. Create a button on the page that calls your function.
3. Add the item to the array by creating an object with two keys: item (the string you have got from the user prompt) and isInBasket (which defaults to false). If you have used different key names in your array of objects then use those.
4. Display the item on the page by using your function from stage 2 to display your item on the page

**Refactor to use HTML input**

Once you have done this you can refactor your code so that instead of a prompt the user can add new items using an input field on the page.

### Stage 4

The following steps you should breakdown yourself. Remember to keep breaking down and to write yourself a plan.

👉 Add a button to clear the list.
👉 Add a button on each item to toggle whether it is in the basket.

### Optional Further JS Challenges

👉 Add a button that clears only the completed items.
👉 Sort the list alphabetically.

### Designing For Users

Now that we have a working list and are more comfortable with the logic that makes it work, it's time to take our proof of concept and go back to the drawing board. Think about who the user of your list would be and what functionality they would want to see. Wire frame your idea, get some feedback from a friend or partner, then use what you have learnt to make your very own list app. Use your CSS skills to bring the app to life and make it look professional.
