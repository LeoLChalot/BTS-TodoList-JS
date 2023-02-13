let arrayTodo = [];
let todoOutput = document.getElementById("todo-output");
let todoInput = document.getElementById("input");
let btnAdd = document.getElementById("btn-add");

function close() {
	var close = document.getElementsByClassName("delete");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		};
	}
}
function check() {
	var check = document.getElementsByClassName("check");
	var j;
	for (j = 0; j < check.length; j++) {
		check[j].onclick = function () {
			var div = this.parentElement;
			div.classList.toggle("checked");
		};
	}
}
function addTodo() {
	arrayTodo.push(todoInput.value);
	if (todoInput.value != '') {
		let todoCard = document.createElement("li");
		let todoP = document.createElement("p");
		let btnCheck = document.createElement("button");
		btnCheck.textContent = "Ok";
		let btnDel = document.createElement("button");
		btnDel.textContent = "X";
		todoCard.className = "todo-card";
		btnCheck.className = "check";
		btnDel.className = "delete";
		todoP.textContent = todoInput.value;
		todoOutput.appendChild(todoCard);
		todoCard.appendChild(todoP);
		todoCard.appendChild(btnCheck);
		todoCard.appendChild(btnDel);
		close();
		check();
	}
}
btnAdd.addEventListener("click", addTodo);
