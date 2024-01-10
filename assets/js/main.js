// Write your javascript code here

const internId = document.getElementById("internId");

internId.addEventListener("click", (e) => {
  e.preventDefault();

  let searchEl = document.getElementById("search").value;
  console.log(searchEl);

  let spaceRemove = searchEl.split(" ").join("");
  console.log(spaceRemove);

  document.getElementById("result").innerHTML = "";

  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.github.com/users/" +
      spaceRemove
  )
    //https://api.github.com/users/Riyaz1000/repos
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${spaceRemove}"> <img src = "${data.avatar_url}"/></a>

      `;
    });
});

const allProfile = document.querySelector("");
const xhr = new XMLHttpRequest();

const userName = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "muthukumarimoorthi",
  "sharif-22",
  "danielace1",
  "gayathrihg",
  "kishorekumar-kp",
];

xhr.open("GET", "https://api.github.com/users/<USER-NAME>/repos");
xhr.send();
