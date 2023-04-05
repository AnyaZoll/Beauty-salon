var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);


itemsList.addEventListener("click", removeItem);


filter.addEventListener("keyup", filterItems);


function addItem(e) {
    
    e.preventDefault();

    
    var newItemInput = document.getElementById("newItemText");
    
    var newItemText = newItemInput.value;

    
    var newElement = document.createElement("li");
    newElement.className = "list-group-item";

    
    var newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    
    var deleteBtn = document.createElement("button");
    
    
    
    
   
    console.log("addItem -> newElement", newElement);

    
    itemsList.prepend(newElement);

   
    newItemInput.value = "";
}





function filterItems(e) {
    
    var searchedText = e.target.value.toLowerCase();

    
    var items = itemsList.querySelectorAll("li");

    
    items.forEach(function(item) {
        
        var itemText = item.firstChild.textContent.toLowerCase();

        
        if (itemText.indexOf(searchedText) != -1) {
          
            item.style.display = "block";
        } else {
            
            item.style.display = "none";
        }
    });
}
