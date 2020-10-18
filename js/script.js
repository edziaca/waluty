
{  

const daneWynik = (a, b) => b/a ;

const updateResultText = (result) => {
    const wynik = document.querySelector(".js-wynik");
    wynik.innerText = result;}


const onFormSubmit = (kupa) => 
{
    kupa.preventDefault();
    const kwota = document.querySelector(".js-kwota");
    const kurs = document.querySelector(".js-kurs");
    const daneKwota = +kwota.value;
    const daneKurs = +kurs.value;
    
    const result = daneWynik(daneKurs, daneKwota);

    updateResultText(result);
   }
const init = () =>
{
const form = document.querySelector(".form");
form.addEventListener("submit", onFormSubmit);
}
init();
  
}