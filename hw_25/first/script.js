document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.code === "KeyE") {
      event.preventDefault();
      const divs = document.querySelectorAll("div");
      divs.forEach((div) => {
        const textarea = document.createElement("textarea");
        textarea.value = div.textContent;
        textarea.style.width = "99%";
        textarea.style.height = "200px";
        div.replaceWith(textarea);
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.code === "KeyS") {
      event.preventDefault();
      const textareas = document.querySelectorAll("textarea");
      textareas.forEach((textarea) => {
        const div = document.createElement("div");
        div.textContent = textarea.value;
        textarea.replaceWith(div);
      });
    }
  });
});
