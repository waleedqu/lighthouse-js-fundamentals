// // Write a while loop that prints out the contents of ingredients:
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
const reversed = ingredients.reverse();
console.log(reversed);