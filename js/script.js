const list = document.getElementById("list");
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");

let items = JSON.parse(localStorage.getItem("collegeList")) || [];

function saveItems() {
  localStorage.setItem("collegeList", JSON.stringify(items));
}

function renderList() {
  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("div");
    checkbox.className = "checkbox";
    if (item.checked) checkbox.classList.add("checked");

    const text = document.createElement("span");
    text.textContent = item.text;
    if (item.checked) text.classList.add("checked-text");

    checkbox.addEventListener("click", () => {
      items[index].checked = !items[index].checked;
      saveItems();
      renderList();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  items.push({
    text: input.value,
    checked: false
  });

  input.value = "";
  saveItems();
  renderList();
});

renderList();
