import { onLoad } from "./adapter.in.gui.js";
import { addBookToLibrary } from "./service.js";
import { printAsTable as pat } from "./port.out.js";

window.addEventListener("load", async () => {
  window.service = {
    addBookToLibrary,
  };
  window.output_port = {
    printAsTable: (library) =>
      pat(document.querySelector("[data-table]"), library),
  };
  onLoad();
});
