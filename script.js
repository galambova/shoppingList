var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.querySelectorAll(".delete");
var itemList = document.getElementById("itemList");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var addButton = document.createElement("button");
	addButton.classList.add("delete");
	addButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(addButton);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();		
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListItem(event) {
	event.target.classList.toggle("done");
}

function checkIfElementIsLi(event) {
	if (event.target.tagName === "LI") {
		toggleListItem(event);
	}
}

function deleteItem(event) {
	if (event.target.classList.contains("delete")) {
		var listItem = event.target.parentElement;
		listItem.remove();
	}
}





ul.addEventListener("click", checkIfElementIsLi);

itemList.addEventListener("click", deleteItem);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




