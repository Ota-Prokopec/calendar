


setInterval(merenicas, 60000);
function merenicas() {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  for (const [key, value] of Object.entries(informace)) {
              if (/**/value.time == hour + ":" + minutes/**/ && date.getDate() == value.day/**/  && value.month == date.getMonth()+1 && date.getFullYear() == value.year) {
                 budik(value.text);
              }


   }

}
function budik(value) {
alert(value);
}
