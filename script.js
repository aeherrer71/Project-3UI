const url = "https://digimon-api.vercel.app/api/digimon";




//Rauls AXIOS
// function displayUI(arr) {
//   arr.forEach((person) => {
//     let htmlTemplate = `
//       <div class="card">
//         <h1>${person.name}</h1>
//         <p>Birth Year: ${person.birth_year}</p>
//         <p>Height (cm): ${person.height}</p>
//         <p>Mass (kg): ${person.mass}</p>
//         <p>Number of films: ${person.films.length}</p>
//       </div>
//     `;

//     starContainer.insertAdjacentHTML("afterend", htmlTemplate);
//   });
// }

// async function fetchStarWarsPeople() {
//   let response = await axios(url);
//   console.log(response);
// }

//  fetchStarWarsPeople();

let containerDigimon = document.querySelector('.digimon-container')
let buttonForward = document.querySelector('.forward')
let buttonBack = document.querySelector('.back')
let gallery = document.querySelector('.digimon-gallery')
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((digimon) => {
    
    digimon.forEach(digimon => {
      let htmlTemplate = `<li class=character>${digimon.name}<img src='${digimon.img}'> ${digimon.level} <li> `;
      gallery.insertAdjacentHTML('beforeend', htmlTemplate)
      }
    
    );
    
  }
  
)
  .catch((error) => {
    console.error("Something went wrong...", error);
  });




    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("character");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[slideIndex - 1].style.display = "block";
      }
      }
    




