


function key() {
  if (event.key === "Enter") {
    text = textinput.value;
    add(day__forfunction, text, event.srcElement);

  }
}
window.addEventListener("click", function (event) {
  if (event.srcElement.id === "array") {
    window.removeEventListener("keypress", key);
    document.getElementById("inputposition").style.display = "none";
  }

})
