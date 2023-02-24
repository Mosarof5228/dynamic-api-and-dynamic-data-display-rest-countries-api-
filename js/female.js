const loadData = () => {
    fetch("https://randomuser.me/api/?gender=female")
        .then(response => response.json())
        .then(data => displayData(data.results))
}

const displayData = (user) => {
    document.getElementById("name").innerHTML = user[0].name.first + " " + user[0].name.last
    const genderContainer = document.getElementById("gender");
    genderContainer.innerText = user[0].gender
    const imageContainer = document.getElementById("image");
    imageContainer.src = user[0].picture.large;


    console.log(user[0].picture.large)
}
loadData()