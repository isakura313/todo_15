const root = document.getElementById("root");

function createElement(tag, content, className, parent, position) {
  const el = document.createElement(tag);
  el.innerText = content;
  el.classList.add(className);
  parent.insertAdjacentElement(position, el);
  return el;
}
const input = createElement("input", "", "input", root, "afterbegin");
const btn = createElement("button", "add", "btn", root, "beforeend");
const ul = createElement("ul", "", "ul", root, "beforeend");
const todo = new Array();

btn.onclick = () => {
  todo.push(input.value);
  ul.innerHTML = "";
  input.value = "";
  todo.map((item) => {
    createElement("li", item, "li", ul, "beforeend");
  });
};
