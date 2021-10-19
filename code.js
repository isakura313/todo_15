const root = document.getElementById("root");

function createElement(tag, content, className, parent, position) {
  const el = document.createElement(tag);
  el.innerText = content;
  el.classList.add(className);
  parent.insertAdjacentElement(position, el);
  return el;
}
const main_columns = createElement("div", "", "columns", root, "afterbegin");
main_columns.style.marginTop = "2em";
const column = createElement("div", "", "column", main_columns, "afterbegin");
column.classList.add("is-half");
column.classList.add("is-offset-one-quarter");
const input = createElement("input", "", "input", column, "afterbegin");
const column2 = createElement("div", "", "column", main_columns, "beforeEnd");
const btn = createElement("button", "add", "button", column2, "beforeEnd");
btn.classList.add("is-primary");
const ol = createElement("ol", "", "ol", column, "beforeend"); // обертка списка
ol.style.margin = "1em 0 0 2em";
ol.setAttribute("type", "a");
const todo = [];
let delete_btns = [];

btn.onclick = () => {
  addTodo();
};

input.onkeydown = (e) => {
  if (e.code == "Enter") {
    addTodo();
  }
};

function addTodo() {
  if (input.value == "") {
    return;
  }
  todo.push(input.value);
  ol.innerHTML = "";
  input.value = "";
  todo.map((item) => {
    let li = createElement("li", item, "li", ol, "beforeend");
    li.style.marginTop = "1em";
    let btn_delete = createElement(
      "button",
      "delete",
      "button",
      li,
      "beforeend"
    );
    btn_delete.classList.add("is-danger");
    btn_delete.classList.add("is-small");
    btn_delete.style.marginLeft = "3em";
    delete_btns = [];
    delete_btns.push(btn_delete);
  });
}
// оформить наш интерфейс
// input уменьшить
// посередке
// кнопку справа
// li добавить border
// добавление дела на нажатие Enter
// удаление li ( добавить для этого кнопку к li)
// редактирование дела
