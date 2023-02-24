//https://restcountries.com/v3.1/all
//https://restcountries.com/v3.1/alpha/{code}
/* 
1.tomake ai doita api dewa holo,first api theke data load kore name and capital dekhabe onekgolo card er moto kore and seti hbe column wise dynamic.
2.protiti card holo akti kore country and sei card a akti kore button thakebe
3.button a click korle sei countryer Name and flag sobar opore orthat card golu jei section a ace tar opore r akti section nia name and flag tike dekhate hbe.
4.orthat button a click korle akti parameter pass hbe code name and seti hbe protiti coutnry er jonne unique.
*/

const countryLoad = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = (countries) => {
    const countryContainer = document.getElementById("country-container");
    countryContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    countries.forEach((country) => {
        // console.log(country.cca2)
        const countryDiv = document.createElement("div");
        countryDiv.className = 'border-2 border-red-400 p-5 m-2 bg-gray-100 rounded-lg'
        countryDiv.innerHTML = `
         <h3>Name: ${country.name.common}</h3>
         <h4>Capital:${country.capital ? country.capital[0] : "no capital"}</h4>
         <button onclick="loadCountry('${country.cca2}')" class="bg-gray-300 px-4 py-2 mt-3 rounded-lg">Click for Detailes</button>
        `
        countryContainer.appendChild(countryDiv);

    })
}

const loadCountry = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(response => response.json())
        .then(country => displayCountry(country[0]))

}

const displayCountry = (eachCountry) => {
    console.log(eachCountry)
    const countyDetailes = document.getElementById("county-detailes");
    countyDetailes.innerHTML = `
    <h2>Name:${eachCountry.name.common}</h2>
    <img src="${eachCountry.flags.png}">
    `
}
countryLoad();