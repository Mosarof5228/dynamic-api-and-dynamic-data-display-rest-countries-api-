// function kanyeeDataLoad() {
//     fetch("https://api.kanye.rest/")
//         .then(response => response.json())
//         .then(data => displayQuote(data.quote))

// }
// function displayQuote(quote) {
//     const nameContainer = document.getElementById('kanyeeRandomContainer');
//     nameContainer.innerText = quote;
// }

const kanyeeLoadData = () => {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = (quote) => {
    const nameContainer = document.getElementById("kanyeeRandomContainer");
    nameContainer.classList.add("newContainer")
    nameContainer.innerText = quote.quote;
    console.log(quote.quote)
}