



function sub() {
  let month = iMonth.value;
  //console.log(month, iYear.value);
  doCalendar(firstDay(iMonth.value-1, iYear.value), daysInMonth(iYear.value, iMonth.value));
}





function daysInMonth(year, month) {
  console.log(new Date(year, month, 0).getDate());
  return new Date(year, month, 0).getDate();
}










//////////*  eventy  *////////////
window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
      sub();
  }
});
////////***********//////////////*/*///////
iMonth.addEventListener("input", function () {
  sub()
})
iYear.addEventListener("input", function () {
  sub()
})
const click = document.getElementsByName("click");
for (let pos = 0; pos < click.length; pos ++) {
  click[pos].addEventListener("click", (event) => {
     if (event.srcElement.id === "levo") {
       iMonth.value = iMonth.value - 1;
       if (iMonth.value < 1) {
         iMonth.value = 12;
       }
     }
     else if (event.srcElement.id === "pravo") {
       iMonth.value = parseInt(iMonth.value)+1 ;
       if (iMonth.value > 12) {
         iMonth.value = 1;
       }

     }
    sub();
  });
}
