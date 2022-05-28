export function Book(details) {
  this.author = details.author ?? "unknown author";
  this.title = details.title ?? "unknown title";
  this.n_pages = details.n_pages ?? -1;
  this.haveRead = !!details.haveRead ?? false;
  this.book_id = null;
}

Book.prototype.toggleRead = () => {
  this.haveRead = !this.haveRead;
};
