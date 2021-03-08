


const planelement = document.getElementById("otevritplan");
window.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  if (event.srcElement.className === "pole") {
   ////console.log("element");
           const m = iMonth.value;
           const y = iYear.value;
           const d = event.srcElement.getAttribute("pos");
                  for (const [key, value] of Object.entries(informace)) {
                    ////console.log("a" + m + "a" + d + "a" + y , key);
                    if ("a" + m + "a" + d + "a" + y == key) {

                        const delka = value.length;
                         //console.log("je a jdu projizdet");
                         let el = [];
                        for (let pos = 0; pos < delka; pos ++) {
                              el.push(Ota.createElementByTagName("li", {pos:element__forfunction.getAttribute("pos")}, `${value[pos]["text"]} ${value[pos]["time"]}`));
                              //console.log(el);
                                 //console.log(value[pos]["text"], value[pos]["time"]);

                        }
                            vytvoritotevritplan(el);

                    }
                    else {
                      //console.log("neni");
                    }

                  }
  }

})
function vytvoritotevritplan(value) {
  planelement.style.display = "block";
  array.style.display = "none";
  const background = "red";
        const elementforopen = Ota.createElementByTagName("div", {background:background, class:"pole", position:"absolute", left:window.innerWidth/2-64+"px", top:window.innerHeight/8+"px", },`${event.srcElement.innerText}` );
        appendElement(otevritplan, elementforopen);
        //ap
           /*appending*/
  for (let pos = 0; pos < value.length; pos ++ ) {
            appendElement(value[pos], /*do delete element*/Ota.createElementByTagName("div", {class:"delete"}));
            appendElement(otevritplan, value[pos]);
            appendclickfordelete(pos);
  }
  elementforopen.addEventListener("click", function () {
    const remove = otevritplan.childNodes;
    //vybírání
    for (let i = 0; i < 4; i ++) {
      for (let pos = 0; pos < remove.length; pos ++) {
        remove[pos].remove();
      }
    }
   //remove
    elementforopen.remove();

    planelement.style.display = "none";
    array.style.display = "block";
    vymazani(event);
  })
}


function removeItem(arr, index) {

  arr.splice(index, 1);
  return arr;

}

          function appendclickfordelete(pos) {
             const element = document.getElementsByClassName("delete");
             for (let pos = 0; pos < element.length; pos++) {
                           element[pos].addEventListener("click", (event) => {
                             element[pos].parentNode.remove();
                                 //get pos element
                             const idops = element__forfunction.getAttribute("pos");
                             //remove informace
                            //informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)][pos].text = "";
                             removeItem(informace["a" + parseInt(iMonth.value)+"a"+idpos + "a" + parseInt(iYear.value)], pos);
                           })
             }
          }
