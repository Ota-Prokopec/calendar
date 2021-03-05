

let text = "";
const textinput = document.getElementById("input");
const informace = {



};

let idpos = 0;
let value = "ahoj";



window.addEventListener("click", clicked);




function clicked() {
  value = textinput.value;
if (event.srcElement.className === "pole") {
      if (event.srcElement.id !== "") {
        const data = event.srcElement.id;
            console.log(informace[data]);
      }
      else {
        idpos ++;
         event.srcElement.id = "a" + idpos;
         informace["a" + idpos] = value;
         textinput.value = "";
      }


}
}
