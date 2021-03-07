


const planelement = document.getElementById("otevritplan");
window.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  if (event.srcElement.className === "pole") {
   //console.log("element");
           const m = iMonth.value;
           const y = iYear.value;
           const d = event.srcElement.getAttribute("pos");
                  for (const [key, value] of Object.entries(informace)) {
                    //console.log("a" + m + "a" + d + "a" + y , key);
                    if ("a" + m + "a" + d + "a" + y == key) {

                        const delka = value.length;
                         console.log("je a jdu projizdet");
                         let el = [];
                        for (let pos = 0; pos < delka; pos ++) {
                              el.push(Ota.createElementByTagName("li", {}, `${value[pos]["text"]} ${value[pos]["time"]}`));
                              console.log(el);
                                 console.log(value[pos]["text"], value[pos]["time"]);

                        }
                            vytvoritotevritplan(el);

                    }
                    else {
                      console.log("neni");
                    }

                  }
  }

})
function vytvoritotevritplan(value) {
  planelement.style.display = "block";
  array.style.display = "none";
  const background = "red";
        const elementforopen = Ota.createElementByTagName("div", {background:background, height:"64px", width:"64px", position:"absolute", left:window.innerWidth/2-64+"px", top:window.innerHeight/8+"px", },`${element__forfunction.childNodes[0].innerText}` );
        appendElement(otevritplan, elementforopen);
        console.log(value, value.length);
  for (let pos = 0; pos < value.length; pos ++ ) {
            appendElement(otevritplan, value[pos]);
  }
  elementforopen.addEventListener("click", function () {
    const remove = otevritplan.childNodes;
    for (let pos = 0; pos < remove.length; pos ++) {
      remove[pos].remove();
    }
    elementforopen.remove();
    planelement.style.display = "none";
    array.style.display = "block";
  })
}
