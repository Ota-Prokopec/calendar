
const days = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];
const pocetDnuVMesici = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const date = new Date();
const array = document.getElementById("center");

document.getElementById("month").value = new Date().getMonth() + 1;

function doCalendar(day, month) {

         remove();

    for (let i = 1; i < month+1; i ++) {
      if (day > 6) {
        day = 0;
      }
      let dataInformace = "";
      dataInformace = false;
      for (const [key, value] of Object.entries(informace)) {
        if (key === "a" + parseInt(iMonth.value) + "a" + i + "a" + parseInt(iYear.value)) {
             dataInformace = value.text;
        }
      }
      let element;
      if (dataInformace !== false) {
         element = Ota.createElementByTagName("div", {class:"pole"}, `${days[day]}    ${i}    ${dataInformace}`);
      }
      else {
         element = Ota.createElementByTagName("div", {class:"pole"}, `${days[day]}    ${i }`);
      }
      element.setAttribute("pos", i);
      appendElement(array, element);
      day ++;
    }

}


doCalendar(firstDay(date.getMonth(), date.getFullYear()), pocetDnuVMesici[date.getMonth()]);

function remove() {
  const removeelement = document.getElementsByClassName("pole");
  for (let i = 0; i < 5; i ++) {
    for(let pos = 0; pos < removeelement.length; pos++) {
      removeelement[pos].remove();
    }
  }

}


function firstDay(mesic, rok) {
  //console.log(rok, mesic);
  let firstDay = new Date(parseInt(rok), mesic, 1).getDay()-1;
  if (firstDay < 0) {
    firstDay = 6;
  }
  //console.log(firstDay);
  //console.log(firstDay);
    return firstDay;
}
