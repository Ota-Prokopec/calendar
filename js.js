
const days = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];
const pocetDnuVMesici = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date = new Date();
const iYear = document.getElementById("year");
const iMonth = document.getElementById("month");
const array = document.getElementById("center");

document.getElementById("month").value = date.getMonth() + 1;
iYear.value = date.getFullYear();
function doCalendar(day, month) {
  let dayfordoendelement = day;
           //removingof all element function on this page 52 js
         remove();
let position = 0;




         //doing elements for starts
         /*apend unreal element for starting ju day*/
       for (let loop = 0; loop < day; loop ++) {
                 position ++;
             const element = Ota.createElementByTagName("div", {class:"pole", background:"#000"}, );

             /*apend unreal element*/  appendElement(array, element);
       }


//začátek je proměná abych určil od kat se bude číslo přidávat
    for (let i = 1; i < month+1; i ++) {
      if (day > 6) {
        day = 0;
      }

      let dataInformace = "";
      dataInformace = false;
      for (const [key, value] of Object.entries(informace)) {
        if (key === "a" + parseInt(iMonth.value) + "a" + i + "a" + parseInt(iYear.value)) {
             dataInformace = value;
        }
      }
      let element;




      if (dataInformace !== false) {
                                                        dataInformace.push({text:"", time:""});
                                            console.log(dataInformace[0]["text"]);
  /*1*/       element = Ota.createElementByTagName("div", {class:"pole"}, `${days[day]}    ${i}`, Ota.createElementByTagName("div", {position:"relative"},`${dataInformace[0].text}           ${dataInformace[0].time}` )              );


      }

       else if (i === date.getDate() && iMonth.value == date.getMonth()+1 && iYear.value == date.getFullYear()) {

  /*2*/       element = Ota.createElementByTagName("div", {class:"pole", background:"lightblue"}, `${days[day]}    ${i}    `, Ota.createElementByTagName("div", {positon:"relative"}, ``));

       }
      else {

  /*3 */      element = Ota.createElementByTagName("div", {class:"pole"}, `${days[day]}    ${i }`, Ota.createElementByTagName("div", {positon:"relative"}, ``));

      }






                    position ++ ;
                      //position ++ for input positon



                                    element.setAttribute("pos", i);
                                    element.setAttribute("postion", position);
      /*apend real element for day*/appendElement(array, element);


      day ++;
    }
         /*unreal element for end*/for (let i = 0; i < 42 - month - dayfordoendelement ; i ++) {
         //element
           const element = Ota.createElementByTagName("div", {class:"pole", background:"#000"}, );
           appendElement(array, element);
         }
}


doCalendar(firstDay(date.getMonth(), date.getFullYear()), pocetDnuVMesici[date.getMonth()]);

function remove() {
  const removeelement = document.getElementsByClassName("pole");
  for (let i = 0; i < 6; i ++) {
    for(let pos = 0; pos < removeelement.length; pos++) {
      removeelement[pos].remove();
    }
  }

}


function firstDay(mesic, rok) {
  ////console.log(rok, mesic);
  let firstDay = new Date(parseInt(rok), mesic, 1).getDay()-1;
  if (firstDay < 0) {
    firstDay = 6;
  }
  ////console.log(firstDay);
  ////console.log(firstDay);
    return firstDay;
}
