import { Book } from "./domain.js";
import { deleteBookFromLibrary, useBookHaveRead } from "./service.js";

function Operations(row) {
  const bid = row.getAttribute("bookId");
  const [haveRead, setHaveRead] = useBookHaveRead(bid);
  const td = document.createElement("td");

  function Button(text, fn) {
    const tmp = document.createElement("button");
    tmp.appendChild(document.createTextNode(text));
    tmp.addEventListener("click", fn);
    return tmp;
  }

  td.append(
    Button(haveRead ? "unread" : "read", () => setHaveRead(!haveRead)),
    Button("delete", () => deleteBookFromLibrary(bid))
  );
  return td;
}

export const onLoad = () => {
  const form = document.querySelector("[data-form]");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    window.service.addBookToLibrary(
      new Book({
        author: data.get("author"),
        title: data.get("title"),
        n_pages: +data.get("n_pages"),
      })
    );
  });
  window.addEventListener("bookTableUpdate", (ev) => {
    for (const child of ev.detail.children) {
      child.appendChild(Operations(child));
    }
  });
};
