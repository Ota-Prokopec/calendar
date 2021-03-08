


function vymazani(event) {
  const element = event.srcElement;

  console.log(informace["a" + iMonth.value + "a" + element__forfunction.getAttribute("pos") + "a" + iYear.value]);
    if (informace["a" + iMonth.value + "a" + element__forfunction.getAttribute("pos") + "a" + iYear.value] != true) {
      console.log(element__forfunction.childNodes[1]);
      element__forfunction.childNodes[1].innerText = "";
    }
}
