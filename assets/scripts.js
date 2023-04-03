//4276724bedf2ea6571466085854c6336

//Variáveis e seleção de elementos

const apiKey = "4276724bedf2ea6571466085854c6336";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

//funcoes

const showWeatherData = (city) => {
    console.log(city);
};

//eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

});