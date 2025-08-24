const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata'];
const mainCourseMenu = ['Steak - $24.90', 'Pasta - $19.50', 'Burger - $15.20', 'Salmon - $24.30'];
const dessertMenu = ['Cake - $4.50', 'Ice Cream - $6.70', 'Pudding - $3.10', 'Fruit Salad - $3.85'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join(" ");
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`
    }
);
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;