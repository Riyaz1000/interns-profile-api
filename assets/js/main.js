//search operation in fetch api method

const internId = document.getElementById("internId"); //form

internId.addEventListener("click", (e) => {
  e.preventDefault();

  let searchEl = document.getElementById("search").value;
  console.log(searchEl);

  let spaceRemove = searchEl.split(" ").join("");
  console.log(spaceRemove);

  document.getElementById("result").innerHTML = ""; //empty div in html

  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.github.com/users/" +
      spaceRemove
  )
    //https://api.github.com/users/Riyaz1000/repos
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = `

        <a href="https://www.github.com/${spaceRemove}" onclick="window.open('https://www.github.com/${spaceRemove}', '_blank')" id="id">
        <img src="${data.avatar_url}" class ="mt-2" />
      </a>

      `;
    });
});

//<a href="https://www.github.com/${spaceRemove}"target="_blank" class="mb" > <img src = "${data.avatar_url}"/></a>

//interns information using fetch api

const interns = [
  "muthukumarimoorthi",
  "mshajid",
  "swethadsalvatore",
  "mushkir",
  "gayathrihg",
  "yrd369",
  "esakki2104prsnl",
  "Vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "kishorekumar-kp",
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <div class="bg-gray-500 p-2 mt-3 flex">
// <img
//   src="https://avatars.githubusercontent.com/u/115968702?v=4"
//   class="w-40 h-40 rounded object-contain"
// />
// <div>
//   <p class="text-white font-poppins font-semibold ml-7 text-xl mt-2">
//     ESAKKI M
//   </p>
//   <p class="text-white font-poppins font-semibold ml-7 text-xl mt-2">
//     REPOSITORY NAME : esakki2104prsnl
//   </p>
//   <button
//     type="button"
//     class="text-white bg-zinc-800 ml-7 font-poppins p-2 mt-2 text-sm font-semibold rounded"
//     id="profile"
//   >
//     View All Repositories
//   </button>
//   <button
//     type="button"
//     class="text-white bg-zinc-800 ml-7 font-poppins p-2 mt-2 text-sm font-semibold rounded"
//   >
//     Github
//   </button>
//   <div>
//     <button
//       class="text-white font-poppins text-sm rounded p-1 ml-7 mt-2 bg-orange-500 font-semibold"
//     >
//       Intern Fullstack Engineer
//     </button>
//   </div>
// </div>
// </div>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const gitEl = document.querySelector("#git");

interns.forEach((name) => {
  const api = `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${name}`;
  // console.log(api);

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const mainEl = document.createElement("main");

      //save.classList.style.background-color = 'red'
      mainEl.innerHTML = `<div class="p-6 flex  rounded mt-2 mx">

      

      
      <img src="${data.avatar_url}" alt="profile image" class="w-40 mb-3  h-40 rounded object-contain" id="image"/>

      <div>
   <p class="text-white font-poppins font-semibold ml-7 text-xl">
   ${data.name}
   </p>
   <p class="text-white font-poppins font-semibold ml-7 text-xl mt-2"> 
     REPOSITORY NAME :<a href = "${data.login}" target="blank"> ${name} </a>
  </p>
   <button
     type="button"
     class="text-white bg-zinc-800 ml-7 font-poppins p-2 mt-2 text-sm font-semibold rounded"
     id="profile"
   ><a href="${data.repos_url}" target="blank">
     View All Repositories </a>
   </button>
   <button
     type="button"
     class="text-white bg-zinc-800 ml-7 font-poppins p-2 mt-2 text-sm font-semibold rounded"
   ><a href="${data.html_url}" target="blank"> 
     Github </a>
   </button>
   <div>
     <button
       class="text-white font-poppins text-sm rounded p-1 ml-7 mt-2 bg-orange-500 font-semibold"
     >
       Intern Fullstack Engineer
    </button>
   </div>
 </div

      

</div>`;

      gitEl.append(mainEl);
    });
});
