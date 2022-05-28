import { Book } from "./domain.js";

function randString(length = 10) {
  let result = "";
  const characters =
    "                      " +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

export const onLoad = () => {
  for (let i = 0; i < 7; i++) {
    window.service.addBookToLibrary(
      new Book({
        author: randString(),
        title: randString(30),
        n_pages: Math.floor(Math.random() * 100),
      })
    );
  }
};
