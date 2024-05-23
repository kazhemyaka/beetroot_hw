document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const headers = table.querySelectorAll("th");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const index = header.cellIndex;
      sortTable(index);
    });
  });

  function sortTable(index) {
    const rows = Array.from(table.rows).slice(1);
    const isNumeric = !isNaN(rows[0].cells[index].textContent);

    rows.sort((a, b) => {
      const aText = a.cells[index].textContent;
      const bText = b.cells[index].textContent;

      if (isNumeric) {
        return aText - bText;
      } else {
        return aText.localeCompare(bText);
      }
    });

    table.append(...rows);
  }
});
