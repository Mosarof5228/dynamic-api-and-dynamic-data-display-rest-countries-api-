const countryDataLoad = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => dasplayData(data))
}

const dasplayData = (countries) => {
    const countryContainer = document.getElementById("country-container");
    countryContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    countries.forEach((country) => {
        // console.log(country
        // )
        const countryDiv = document.createElement("div")
        countryDiv.className = "border-4 border-indigo-400 p-5 m-10"
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="countryDetailLoad('${country.cca2}')" class="bg-purple-500 px-5 py-2 rounded-lg mt-2">Button</button>
        
        `
        countryContainer.appendChild(countryDiv);
    })
}

const countryDetailLoad = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(resp => resp.json())
        .then(data => countryDetailesDisplay(data[0]))
}

const countryDetailesDisplay = (obj) => {
    const showDetailesContainer = document.getElementById("each-country-detailes");
    showDetailesContainer.innerHTML = `
        <h3 class="text-2xl text-red-500 font-bold">Name: ${obj.name.common}</h3>
        <h4>Area C:${obj.area}</h4>
        <img src="${obj.flags.png}">

    `


    console.log(obj)
}

countryDataLoad();
