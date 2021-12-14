const container = document.querySelector("#mainCard");
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/callingcode/91');
request.send();

request.addEventListener('load', function () {
   // console.log(this.responseText)
    const [data] = JSON.parse(this.responseText);
    // const htmlData = ``;
console.log(data.languages)
    const h1 = document.querySelector('#h1');
    const h2 = document.querySelector('#h2');
    const l1 = document.querySelector('#l1');
    const l2 = document.querySelector('#l2');
    const l3 = document.querySelector('#l3');
    const image = document.querySelector('#image');

h1.innerHTML=data.name;
h2.innerHTML="Capital : "+data.capital;
l1.innerHTML="Population : "+data.population;
l2.innerHTML="Native Name : "+data.nativeName;
l4.innerHTML="TimeZone : "+data.timezones;
l3.innerHTML="Continent : "+data.region;

image.innerHTML='<img src="https://flagcdn.com/in.svg" width="250"/>';
})