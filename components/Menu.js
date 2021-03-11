// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>
  */

function elementMaker(tag, textArg, ...classes) {
  let lmnt = document.createElement(tag);
  lmnt.textContent = textArg;
  if (classes.length > 0) {
    lmnt.classList.add(classes.toString());
  }
  return lmnt;
}

let menuButton = document.querySelector(`.menu-button`);

function menuMaker(menuArr) {
  // let menu = document.createElement(`div`);
  let menu = elementMaker("div", "", "menu");
  // let menuList = document.createElement(`ul`);
  let menuList = elementMaker("ul");
  menuArr.forEach((item) => {
    // let listItem = document.createElement(`li`);
    let listItem = elementMaker("li", item);
    // listItem.textContent = item;
    menuList.appendChild(listItem);
  });
  menu.appendChild(menuList);
  // menu.classList.add(`menu`);
  menuButton.addEventListener(`click`, () =>
    document.querySelector(`.menu`).classList.toggle(`menu--open`)
  );
  return menu;
}

let header = document.querySelector(`.header`);
let menu = menuMaker(menuItems);
console.log(menu);
header.appendChild(menu);

/*
  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
