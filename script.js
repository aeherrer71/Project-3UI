const url = "https://digimon-api.vercel.app/api/digimon";


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



let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("character");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[slideIndex - 1].style.display = "block";
  }
}





