// document.getElementById("baslik").innerHTML = "KODLUYORUZ"

// var isim = prompt("Lütfen isminizi giriniz:", "", "");
// // console.log("Merhaba, " + isim);
//  document.write("Merhaba ", isim,"!","Hoş geldin!");

let isim = prompt("Lütfen isminizi girin");

let myName = document.querySelector("#myName");

myName.innerHTML = isim;

let clock = document.querySelector("clock");

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  if (h == 00 && m == 00) {
    setInterval(shoTime);
  }
  document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s + " ";
}

setInterval(showTime, 1000);

function shoTime() {
  const bugun = new Date();

  let d = bugun.getDay();
  switch (d) {
    case 1:
      d = "Pazartesi";
  
      break;
    case 2:
      d = "Salı";
      break;
    case 3:
      d = "Çarşamba";
      break;
    case 4:
      d = "Perşembe";
      break;
    case 5:
      d = "Cuma";
      break;
    case 6:
      d = "Cumartesi";
      break;
    case 0:
      d = "pazar";
      break;
  }

  document.getElementById("myClock1").innerHTML = d;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

showTime();
shoTime();