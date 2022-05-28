export let myLibrary = [];

export function addBookToLibrary(book) {
  book.book_id = 1000 + myLibrary.length;
  myLibrary = [book, ...myLibrary];
  console.log("add book: ", book);
  window.output_port.printAsTable(myLibrary);
}

function getBook(book_id) {
  const ans = myLibrary.find((b) => +book_id === +b.book_id);
  if (ans === undefined) {
    console.error(`not found book id: ${book_id}`);
  }
  return ans;
}

export function useBookHaveRead(book_id) {
  return [
    getBook(book_id).haveRead,
    (v) => {
      getBook(book_id).haveRead = v;
      window.output_port.printAsTable(myLibrary);
    },
  ];
}

export function deleteBookFromLibrary(book_id) {
  myLibrary = myLibrary.filter((b) => b.book_id !== +book_id);
  window.output_port.printAsTable(myLibrary);
}
