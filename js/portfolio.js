const moonButton = document.getElementById("moonButton");
const sunButton = document.getElementById("sunButton");

const waveImage = document.getElementById("waveImage");
const waveImage2 = document.getElementById("waveImage2");
const lampe = document.getElementById("lampe");

let isLightOn = true;

moonButton.addEventListener("click", toggleLight);
sunButton.addEventListener("click", toggleLight);
lampe.addEventListener("click", toggleLight);

function toggleLight() {
  if (isLightOn) {
    offLight();
    isLightOn = false;
  } else {
    onLight();
    isLightOn = true;
  }
}

function onLight() {
  document.querySelectorAll(".night").forEach(element => {
    element.style.display = "none";
  });
  document.querySelectorAll(".day").forEach(element => {
    element.style.display = "flex";
  });

  document.querySelector('h1').classList.remove('darkTheme');
  document.querySelector('.topPage').classList.remove('darkThemeThing');
  document.querySelector('.midPageProject').classList.remove('darkThemePurple');
  document.querySelector('.navLien').classList.remove('darkThemeThing');
  document.querySelector('.navLien2').classList.remove('darkThemeThing');

  if (window.innerWidth >= 1000) {
    waveImage.src = "image/vagueVerte.svg";
    waveImage2.src = "image/vagueVerte.svg";
    lampe.src = "image/lightDay.svg";
  }

  document.querySelector('.btnTop').classList.remove('arrowButtonDark');
  document.querySelectorAll('.buttonIcon').forEach(btnElement => {
    btnElement.classList.remove('darkThemeThing');
  });
  document.querySelector('.textTopPage').classList.remove('darkTheme');
  document.querySelectorAll('h3').forEach(h3Element => {
    h3Element.classList.remove('darkTheme');
  });
  document.querySelector('.midPageSkills').classList.remove('darkThemeSection');
  document.querySelector('footer').classList.remove('darkThemeSection');
  document.querySelectorAll('.navImg').forEach((img, index) => {
    if (index === 0) {
      img.src = "image/picturemyself.svg";
    } else if (index === 1) {
      img.src = "image/ordiclavier.svg";
    } else if (index === 2) {
      img.src = "image/canape.svg";
    } else if (index === 3) {
      img.src = "image/picturemyself.svg";
    } else if (index === 4) {
      img.src = "image/ordiclavier.svg";
    } else if (index === 5) {
      img.src = "image/canape.svg";
    }
  });
};

function offLight() {
  document.querySelectorAll(".day").forEach(element => {
    element.style.display = "none";
  });
  document.querySelectorAll(".night").forEach(element => {
    element.style.display = "flex";
  });

  document.querySelector('h1').classList.add('darkTheme');
  document.querySelector('.topPage').classList.add('darkThemeThing');
  document.querySelector('.midPageProject').classList.add('darkThemePurple');
  document.querySelector('.navLien').classList.add('darkThemeThing');
  document.querySelector('.navLien2').classList.add('darkThemeThing');

  if (window.innerWidth >= 1000) {
    waveImage.src = "image/vagueRose.svg";
    waveImage2.src = "image/vagueRose.svg";
    lampe.src = "image/lightNight.svg";
  }

  document.querySelector('.btnTop').classList.add('arrowButtonDark');
  document.querySelectorAll('.buttonIcon').forEach(btnElement => {
    btnElement.classList.add('darkThemeThing');
  });
  document.querySelector('.textTopPage').classList.add('darkTheme');
  document.querySelectorAll('h3').forEach(h3Element => {
    h3Element.classList.add('darkTheme');
  });
  document.querySelector('.midPageSkills').classList.add('darkThemeSection');
  document.querySelector('footer').classList.add('darkThemeSection');
  document.querySelectorAll('.navImg').forEach((img, index) => {
    if (index === 0) {
      img.src = "image/picturemyselfnight.svg";
    } else if (index === 1) {
      img.src = "image/ordiclaviernight.svg";
    } else if (index === 2) {
      img.src = "image/canapenight.svg";
    } else if (index === 3) {
      img.src = "image/picturemyselfnight.svg";
    } else if (index === 4) {
      img.src = "image/ordiclaviernight.svg";
    } else if (index === 5) {
      img.src = "image/canapenight.svg";
    }
  });
};