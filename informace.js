

let text = "";
const textinput = document.getElementById("input");
const informace = {



};
/*
const informace = {
  a1:
  {
  year:2021,
  month:4,
  day:4
  text:"ahoj"
}
}
*/
let idpos = 0;
let value = "";



window.addEventListener("click", clicks);




function clicks() {
      let muzuNapsat = true;
    if (event.srcElement.className === "pole") {
      value = textinput.value;
      for (const [key, value] of Object.entries(informace)) {
      const pos = event.srcElement.getAttribute("pos");
        if ("a" + parseInt(iMonth.value)+"a" + parseInt(pos) + "a" + parseInt(iYear.value) === key) {
          if (value.year === iYear.value && value.month === parseInt(iMonth.value)) {
            muzuNapsat = false;
            console.log(informace);
            console.log("precist zpravu ju", value.text);
          }

        }
      }
      if (muzuNapsat) {
        const day = event.srcElement.getAttribute("pos");
        const text = value;
            const element = document.getElementsByClassName("pole") ;
            for (let i= 0; i< element.length; i ++) {
              if (element[i] === event.srcElement) {
                idpos = i+1;
              }
            }

          add(day, text);
      }
    }
}
function add(day, text) {
      informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)] = {month:parseInt(iMonth.value), year:iYear.value, day:day, text:text};
}
