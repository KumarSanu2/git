const textBox = document.getElementById("textbox");
const submitBtn = document.getElementById("submit");
const container = document.getElementById("container");
/*
submitBtn.addEventListener("click", () => {
    console.log("textbox");
});

// Promise Meethod
submitBtn.addEventListener("click", () => {
  let API_URL = `https://api.github.com/users/${inputVal.value}`;
  fetch(API_URL)
    .then((respose) => {
      return respose.json();
    })
    .then((data) => {
      // console.log(data);
      showData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});*/

// Async Await Method
submitBtn.addEventListener("click", () => {
  fetchData(textBox.value);
});
async function fetchData(userName) {
  try {
    let API_URL = `https://api.github.com/users/${userName}`;
    let respose = await fetch(API_URL);
    let jsonData = await respose.json();
    showData(jsonData);
  } catch (error) {
    console.log(error);
  }
}

const showData = (data) => {
    //console.log(fetchData);
  container.innerHTML = "";
  let avatarUrl = data.avatar_url;
  let loginName = data.login;
  let profile = data.html_url;
  let followers = data.followers;
  let following = data.following;
  let location = data.location;
  let repo = data.public_repos;
  let div = document.createElement("div");
  div.innerHTML = `
  <h1 style="color: blue">${loginName}</h1>
  <img src="${avatarUrl}" alt="${loginName + "image"}">
  <a href="${profile}" target="_blank">Go to profile</a>
  <h2>${followers}</h2>
  <h2>${following}</h2>
  <h2>${location}</h2>
  <h2>${repo}</h2>

  `;
  container.append(div);
};