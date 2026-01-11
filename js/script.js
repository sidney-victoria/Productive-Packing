const list = document.getElementById("list");
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addItem);

function addItem() {
  if (!input.value.trim()) return;

  const li = document.createElement("li");

  const checkbox = document.createElement("div");
  checkbox.classList.add("checkbox");

  const text = document.createElement("span");
  text.textContent = input.value;

  checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("checked");
    text.classList.toggle("checked");
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  list.appendChild(li);

  input.value = "";
}
