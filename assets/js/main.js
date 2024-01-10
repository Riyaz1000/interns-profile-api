// Write your javascript code here

const internId = document.getElementById("internId");

internId.addEventListener("click", (e) => {
  e.preventDefault();

  let searchEl = document.getElementById("search").value;
  console.log(searchEl);

  let spaceRemove = searchEl.split(" ").join("");
  console.log(spaceRemove);

  document.getElementById("result").innerHTML = "";

  //   fetch("https://api.github.com/users/" + spaceRemove)
  //     .then((result) => result.json())
  //     .then((data) => {
  //       console.log(data);
  //       document.getElementById("result").innerHTML = `
  //     <a target="_blank" href="https://www.github.com/${spaceRemove}">
  //       <img src="${data.avatar_url}" alt="${spaceRemove}'s avatar"/>
  //     </a>
  //   `;
  //     });

  fetch("https://api.github.com/users/" + spaceRemove)
    //https://api.github.com/users/Riyaz1000/repos
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${spaceRemove}"> <img src = "${data.avatar_url}"/></a>

      `;
    });
});
