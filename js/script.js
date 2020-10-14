let kwota = document.querySelector(".js-kwota");
let kurs = document.querySelector(".js-kurs");
let form = document.querySelector(".form");
let wynik = document.querySelector(".js-wynik");

form.addEventListener("submit", (kupa) => {
    kupa.preventDefault();
    
    let daneKwota = kwota.value;
    let daneKurs = kurs.value;
    console.log(daneKwota);

let daneWynik= daneKwota/daneKurs;
wynik.innerText = daneWynik;
   });