import { createElement } from './createElement';

export function drawTodos(todo, ol, delete_btns) {
  todo.map((item, index) => {
    let li = createElement("li", item, "li", ol, "beforeend");
    li.style.marginTop = "1em";
    li.setAttribute("key", index);
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
    delete_btns.map((btn) => {
      btn.onclick = () => {
        const key = btn.parentNode.getAttribute("key");
        todo.splice(key, 1);
        btn.parentNode.remove();
      };
    });
  });
}
