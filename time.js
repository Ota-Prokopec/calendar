


setInterval(merenicas, 34000);
function merenicas() {
  date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const year = date.getFullYear();
  for (const [key, value] of Object.entries(informace)) {
    for (let i = 0; i < value.length; i ++) {
      if ("a" + month + "a" + day + "a" + year == key) {
        if (value[i]["time"] == hour + ":" + minutes)
         budik(value[i]["text"]);
      }
    }



   }

}
function budik(value) {
alert(value);
}
