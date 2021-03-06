

let text = "";
const textinput = document.getElementById("input");
const timeinput = document.getElementById("time");
const informace = {



};
/*localStorage.setItem("informace", {});*/
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
let day__forfunction;
let element__forfunction;

window.addEventListener("click", clicks);




function clicks() {
      let muzuNapsat = true;
    if (event.srcElement.className === "pole") {
      zobrazenitext(event);
      for (const [key, value] of Object.entries(informace)) {
      const pos = event.srcElement.getAttribute("pos");
        if ("a" + parseInt(iMonth.value)+"a" + parseInt(pos) + "a" + parseInt(iYear.value) === key) {
          if (value.year === iYear.value && value.month === parseInt(iMonth.value)) {
            muzuNapsat = true;
            console.log(informace);
            console.log("precist zpravu ju", value.text);
            //window.removeEventListener("keypress", key)
          }

        }
      }
      if (muzuNapsat) {
        const day = event.srcElement.getAttribute("pos");
        day__forfunction = day;
        const text = value;
            const element = document.getElementsByClassName("pole") ;
            for (let i= 0; i< element.length; i ++) {
              if (element[i] === event.srcElement) {
                idpos = i+1;
              }
            }
            element__forfunction = event.srcElement;
          window.addEventListener("keypress", key)
      }
    }
}
function add(day, text, thiselement) {
      informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)] = {month:parseInt(iMonth.value), year:iYear.value, day:day, text:text, time:timeinput.value};
      thiselement.innerText = thiselement.innerText + timeinput.value +"            " +  text;
}
function zobrazenitext(event) {
  //console.log(event.srcElement.getAttribute("pos"));
  document.getElementById("inputposition").style.display = "block";
  let cislo = event.srcElement.getAttribute("pos");
  const height = window.innerHeight;
  const width = window.innerWidth;
  const deleniY = Math.ceil(cislo / 6);
  //console.log(deleniY);
  console.log(deleniY);
  const deleni = Math.floor(cislo/6);
  const dilecekY = Math.floor(height / 8);
  cislo = cislo-6*deleni;

  if (cislo === 0) {
    cislo = 6;
  }

  const dilecek = width / 8;
  const positionY = Math.floor(dilecekY * deleniY + dilecekY);
  const positionX = Math.floor(dilecek * cislo + dilecek);
  console.log(positionY);
  document.getElementById("inputposition").style.top = positionY - dilecekY*2  + "px";
  document.getElementById("inputposition").style.left = positionX - dilecek*4 + "px";
}
