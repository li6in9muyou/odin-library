export function asBookArray(book_repo) {
  return [...book_repo];
}

export function printAsTable(root, book_repo) {
  function Cell(text) {
    const tmp = document.createElement("td");
    tmp.appendChild(document.createTextNode(text));
    return tmp;
  }

  const books = asBookArray(book_repo);
  if (books.length !== 0) {
    root.replaceChildren(
      ...books.map((b) => {
        const tmp = document.createElement("tr");
        tmp.append(
          Cell(b.title),
          Cell(b.author),
          Cell(b.n_pages),
          Cell(b.haveRead)
        );
        tmp.setAttribute("bookId", b.book_id);
        return tmp;
      })
    );
  } else {
    root.replaceChildren(document.createTextNode("No books yet!"));
  }
  window.dispatchEvent(new CustomEvent("bookTableUpdate", { detail: root }));
}
