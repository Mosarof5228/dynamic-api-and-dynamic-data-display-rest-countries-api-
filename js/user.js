const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => displayUsers(data.results));
}
const displayUsers = (users) => {
    const userContainer = document.getElementById("users-container");
    for (const user of users) {
        const userDiv = document.createElement("div");
        userDiv.className = "bg-blue-300 m-5"
        // userDiv.classList.add("each-user")
        userDiv.innerHTML = `
        <img class="image" src="${user.picture.large}">
       <h4>Date:${user.dob.date}</h4>
       <h5>Email:${user.email}</h5>
       <h3>Name: ${user.name.first} ${user.name.last}</h3>
       <h2>Gender: ${(user.gender === "male") ? "Yeh!!!!!Your are male" : "Very sad you Female"}</h2>
        `
        console.log(user)
        userContainer.appendChild(userDiv);
    }
}

loadUsers();
