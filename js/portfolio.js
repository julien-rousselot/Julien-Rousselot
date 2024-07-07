const moonButton = document.getElementById("moonButton");
const sunButton = document.getElementById("sunButton");

const lamp = document.getElementById("lamp");

sunButton.addEventListener("click", offLight); 
moonButton.addEventListener("click", onLight);
// lamp.addEventListener("click", offLight); 
  
  function onLight(){
  document.querySelectorAll(".night").forEach(element => {
    element.style.display = "none";
  });
  document.querySelectorAll(".day").forEach(element => {
    element.style.display = "flex";
  });
  // lamp.scr = "image/lightnight.svg";
  document.querySelector('h1').classList.remove('darkTheme');
  document.querySelector('.topPage').classList.remove('darkThemeThing');
  document.querySelector('.midPageProject').classList.remove('darkThemePurple');
  document.querySelector('.navLien').classList.remove('darkThemeThing');
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
    }
  });
};


function offLight(){
  document.querySelectorAll(".day").forEach(element => {
  element.style.display = "none";
});
// lamp.scr = "image/light.svg";
document.querySelectorAll(".night").forEach(element => {
  element.style.display = "flex";
  });
  document.querySelector('h1').classList.add('darkTheme');
  document.querySelector('.topPage').classList.add('darkThemeThing');
  document.querySelector('.midPageProject').classList.add('darkThemePurple');
  document.querySelector('.navLien').classList.add('darkThemeThing');
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
    }
  });
};


