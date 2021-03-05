
const days = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];
const pocetDnuVMesici = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const date = new Date();
const array = document.getElementById("center");



function doCalendar(day, month) {

         remove();

    for (let i = 0; i < month; i ++) {
      if (day > 6) {
        day = 0;
      }
      const element = Ota.createElementByTagName("div", {class:"pole"}, `${days[day]}    ${i + 1}`);
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
