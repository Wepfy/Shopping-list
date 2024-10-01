// Stores references of these elements
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Creates new list item from the inputted text and delete button for it
button.addEventListener("click", () => {
    const inputValue = input.value;
    input.value = "";
    
    const listItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    listItem.appendChild(newSpan);
    listItem.appendChild(newButton);
    newSpan.textContent = inputValue;
    newButton.textContent = "Delete";
    list.appendChild(listItem


    );

    newButton.addEventListener("click", () => {
        listItem.remove();
        
    });
    input.focus();
});

