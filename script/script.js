const task = document.querySelector(".task");
const inputAdd = document.querySelector(".addTask");
const addBtn = document.querySelector(".add-btn");
let selectBtn = document.querySelector("button");
const sectionTask = document.querySelector("section");
const inputTask = document.querySelector(".task input");

addBtn.addEventListener("click", addTaskFunction);
window.addEventListener("keydown", (e) => {
	if (e.key == "Enter") {
		addTaskFunction();
	}
});

function addTaskFunction() {
	if (inputAdd.value == "") {
		inputAdd.style.animation = "errorAdd 0.7s";
		setTimeout(() => {
			inputAdd.style.animation = "none";
		}, 700);
	} else {
		let newDiv = document.createElement("div");
		newDiv.className = "task";
		let newSpan = document.createElement("span");
		newSpan.type = "text";
		newSpan.textContent = inputAdd.value;
		inputAdd.value = "";
		newSpan.className = "unfinished";
		let newBtn = document.createElement("button");
		newBtn.className = "select-btn";

		let newIconSelect = document.createElement("i");
		newIconSelect.className = "bi bi-square";

		let newIconTrash = document.createElement("i");
		newIconTrash.className = "bi bi-trash";

		sectionTask.appendChild(newDiv);

		newDiv.appendChild(newBtn);
		newBtn.appendChild(newIconSelect);
		newDiv.appendChild(newSpan);
		newDiv.appendChild(newIconTrash);
		newBtn.addEventListener("click", () => {
			if (newSpan.className == "unfinished") {
				newSpan.className = "finished";
				newIconSelect.className = "bi bi-check2-square";
			} else {
				newSpan.className = "unfinished";
				newIconSelect.className = "bi bi-square";
			}
		});

		newSpan.addEventListener("click", () => {
			if (newSpan.className == "unfinished") {
				newSpan.className = "finished";
				newIconSelect.className = "bi bi-check2-square";
			} else {
				newSpan.className = "unfinished";
				newIconSelect.className = "bi bi-square";
			}
		});

		newIconTrash.addEventListener("click", () => {
			sectionTask.removeChild(newIconTrash.parentNode);
		});
	}
}
