const resizable = document.querySelector(".resizable");
const resizer = resizable.querySelector(".resizer");

resizer.addEventListener("mousedown", initResize);

function initResize() {
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
}

function startResize(e) {
  resizable.style.width = e.clientX - resizable.offsetLeft + "px";
  resizable.style.height = e.clientY - resizable.offsetTop + "px";
}

function stopResize() {
  window.removeEventListener("mousemove", startResize);
}
