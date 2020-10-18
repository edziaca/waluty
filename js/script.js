const kwota = document.querySelector(".js-kwota");
const kurs = document.querySelector(".js-kurs");
const form = document.querySelector(".form");
const wynik = document.querySelector(".js-wynik");

form.addEventListener("submit", (kupa) => {
    kupa.preventDefault();
    
    const daneKwota = kwota.value;
    const daneKurs = kurs.value;
    

const daneWynik = (a, b) =>  b/a;


//const daneWynik= daneKwota/daneKurs;
wynik.innerText = daneWynik(daneKurs, daneKwota);
   });