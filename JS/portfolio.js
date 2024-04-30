


//     const themedark = document.querySelector(".section1");
//     const themephaut = document.querySelector(".phaut");
//     const themediv = document.querySelector(".main__section__div ");
//     const themeh2 = document.querySelector("h2");
//     const themeh1 = document.querySelector("h1");
//     const themepmilieu = document.querySelector(".pmilieu");
//     const themevague = document.querySelector(".vague");
//     const themevague2 = document.querySelector(".vague2");
//     const themelogogreen = document.querySelectorAll(".pmilieu__a");
//     const themelogopink = document.querySelectorAll(".pmilieu__b");
//     const suntheme = document.querySelector(".sun");
//     const moontheme = document.querySelector(".moon");
//     const selfday = document.querySelector("#selfday");
//     const selfnight = document.querySelector("#selfnight");
//     const ordiday = document.querySelector("#ordiday");
//     const ordinight = document.querySelector("#ordinight");
//     const contactday = document.querySelector("#contactday");
//     const contactnight = document.querySelector("#contactnight");
//     const projetimgjour = document.querySelectorAll(".pmilieu__img__jour");
//     const projetimgnuit = document.querySelectorAll(".pmilieu__img__night");
   
//     const x = document.querySelector("body header span img");
//     let v = x.getAttribute("src");
//     if(v == "../image/light.svg"){
//         v = "../image/lightnight.svg";
//     } else
//         v = "../image/light.svg";
//     x.setAttribute("src", v);
   
//     // Tout ce qui n'est pas image et adaptable avec la class themedark
//     themedark.classList.toggle("themedark");
//     themephaut.classList.toggle("themedark");
//     themediv.classList.toggle("themedark");
//     themeh2.classList.toggle("themedark");
//     themeh1.classList.toggle("themedark");
//     themepmilieu.classList.toggle("thememiddle");
  
//     // Change style de l'image vague

//     themevague.style.display === "none" ? themevague.style.display = "block": themevague.style.display = "none";
//     themevague2.style.display === "block" ? themevague2.style.display = "none": themevague2.style.display = "block";

//     // Change style des logos
//     console.log(themelogogreen);
// //  for(const count)
//     themelogogreen[0].style.display === "none" ? themelogogreen[0].style.display = "block" : themelogogreen[0].style.display = "none";
//     themelogopink [0].style.display === "block" ? themelogopink[0] .style.display = "none" : themelogopink[0] .style.display = "block";
//     themelogogreen[1].style.display === "none" ? themelogogreen[1].style.display = "block" : themelogogreen[1].style.display = "none";
//     themelogopink [1].style.display === "block" ? themelogopink[1] .style.display = "none" : themelogopink[1] .style.display = "block";
//     themelogogreen[2].style.display === "none" ? themelogogreen[2].style.display = "block" : themelogogreen[2].style.display = "none";
//     themelogopink [2].style.display === "block" ? themelogopink[2] .style.display = "none" : themelogopink[2] .style.display = "block";
    
//     // Change style bouton theme
	
//     suntheme.style.display === "none" ? suntheme.style.display = "block": suntheme.style.display = "none";
//     moontheme.style.display === "block" ? moontheme.style.display = "none": moontheme.style.display = "block";

//     // Change style bouton theme

//     selfday.style.display === "none" ? selfday.style.display = "block": selfday.style.display = "none";
//     selfnight.style.display === "block" ? selfnight.style.display = "none": selfnight.style.display = "block";

//     ordiday.style.display === "none" ? ordiday.style.display = "block": ordiday.style.display = "none";
//     ordinight.style.display === "block" ? ordinight.style.display = "none": ordinight.style.display = "block";

//     contactday.style.display === "none" ? contactday.style.display = "block": contactday.style.display = "none";
//     contactnight.style.display === "block" ? contactnight.style.display = "none": contactnight.style.display = "block";

//     // Change the picture of projet

//     for ( let count = 0 ; count <=3 ; count++ ) {
//       projetimgjour[count].style.display === "none" ? projetimgjour[count].style.display = "block": projetimgjour[count].style.display = "none";
//       projetimgnuit[count].style.display === "block" ? projetimgnuit[count].style.display = "none": projetimgnuit[count].style.display = "block";
//     }
// } 

// const themebutton = document.querySelectorAll(".thememmoonsun");

// for (const button of themebutton) {
// button.addEventListener("click", changeTheme);
// }
// const x = document.querySelector("body header span img");

// x.addEventListener("click", changeTheme);
  const moonButton = document.getElementById('moon');
//par default la class -night est inactive ou display none
// document.querySelectorAll('.night').style.display = "none";

// if()//si active 
const sunButton = document.getElementById('sun').addEventListener('click', () => {
//   console.log('hey');
    document.querySelectorAll('.night').classList.toggle('dark-theme');
})
