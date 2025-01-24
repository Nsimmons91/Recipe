// select an element
console.log("hello👋👋👋👋👋");

// // First up, let's create a new list item and store it in a variable.
//let newLi = document.createElement('li')

// Now let's update the text content of that list item.
//newLi.textContent = 'Flaxseed'

// And finally, let's add that list item as a child of the ul.
//ul.appendChild("Flaxseed")

// First up, let's create a new list item and store it in a variable.
let newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = '2 tablespoons of Flaxseed';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);

// Create interactive elements using mybox method and addeventlistener

 const myBox = document.getElementById("myBox");
 const myButton = document.getElementById("myButton");

// function changeColor(event) {
//}

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "beige";
    myBox.textContent = "It's so good, make you wanna slap yo momma!";
    })
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "tan";
    myBox.textContent = "It's so good, make you wanna slap yo momma!";
},);

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "beige";
    myBox.textContent = "Mmm Mmm Good!";
});



const myDiv = document.getElementById("myDiv");

let checkbox = document.createElement("input");

checkbox.type = "checkbox";
checkbox.name = "packersOff";
checkbox.value = "1";
checkbox.class = "strikethrough";

var label = document.createElement("label");

label.htmlFor = "id";

label.appendChild(
   document.createTextNode("This create the laabel for checkbox.")
);

myDiv.appendChild(checkbox);
myDiv.appendChild(label);
