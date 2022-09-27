const cursor = document.querySelector(".cursor");
const btn = document.querySelector("button");

window.addEventListener("mousemove", (e) => {
  console.log(e);
  cursor.style.top = `${e.pageY - 5}px`;
  cursor.style.left = `${e.pageX - 5}px`;
});

btn.addEventListener("click", () => alert("Clicked"));
