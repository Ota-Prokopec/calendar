

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
            ////console.log(informace);
            ////console.log("precist zpravu ju", value.text);
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
                idpos = event.srcElement.getAttribute("pos");
              }
            }
            element__forfunction = event.srcElement;
          window.addEventListener("keypress", key)
      }
    }
}
function add(day, text, thiselement) {
    udelat = true;
    let pos = 0;
  for (const [key, value] of Object.entries(informace))  {
    ////console.log(key, "a" + parseInt(iMonth.value) + "a" + idpos  + "a" + parseInt(iYear.value)    );
    if (key === "a" + parseInt(iMonth.value) + "a" + idpos  + "a" + parseInt(iYear.value)  /*informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)]*/) {
          udelat = false;
          pos ++;
          informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)].push({text:text, time:timeinput.value});

          ////console.log(informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)][0]["text"] );
          /*write*/
          thiselement.childNodes[1].innerText = informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)][0]["text"]    ;
    }
  }


                   /*new array*/
      if (udelat) {
        informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)] = [{ text:text, time:timeinput.value}];
        ////console.log(informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)][0]["text"] );
        thiselement.childNodes[1].innerText = informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)][0]["text"]    ;
      }


}
function zobrazenitext(event) {
  document.getElementById("inputposition").style.display = "block";
  let cislo = event.srcElement.getAttribute("postion");


  const deleni = Math.ceil(cislo/7);
  let deleniX = cislo;
  for (let pos = 0; pos < 6; pos ++) {
    if (deleniX > 7) {
      deleniX = deleniX - 7;
    }
  }

  const dilekY = window.innerHeight/8;
                  const positionY = deleni * dilekY - dilekY+14;
                  const dilekX = window.innerWidth/8;
                  const positionX = deleni * dilekX - dilekX/2;
  document.getElementById("inputposition").style.top = positionY  + "px";
  document.getElementById("inputposition").style.left = deleniX*dilekX - dilekX*3  + "px";

}
