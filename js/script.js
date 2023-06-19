console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      count: 0,
    };
  },
  computed: {
    lastPhoto() {
      return this.count === this.images.length - 1;
    },
  },
  methods: {
    increasecount() {
      this.count++;
    },
    decreasecount() {
      this.count--;
    },
  },
});

app.mount("#root");

console.log("JSOK");
/*********************************************fase 0**********************************/

const thumbnails = document.querySelector(".thumbnails");
const arrowDown = document.querySelector(".fa-chevron-down");
const arrowUp = document.querySelector(".fa-chevron-up");
const carrousel = document.querySelector(".carrousel");

/*********************************************fase 1**********************************/
//listener up
// for (let i = 0; i < images.length; i++) {
//   carrousel.innerHTML += `<img src="${images[i]}" alt="videogame" />`;
// }
// const image = document.querySelectorAll("img");
// image[count].classList.add("active");
// arrowDown.addEventListener("click", function () {
//   image[count].classList.remove("active");
//   count++;
//   if (count === images.length) {
//     count = 0;
//   }
//   image[count].classList.add("active");
// });
// //listener down
// arrowUp.addEventListener("click", function () {
//   image[count].classList.remove("active");
//   count--;
//   if (count < 0) {
//     count = images.length - 1;
//   }
//   image[count].classList.add("active");
// });
/*********************************************thumbnails*************************************/
// for (let i = 0; i < images.length; i++) {
//   thumbnails.innerHTML += `<img src="${images[i]}" alt="videogame" />`;
// }
// const imagethumb = document.querySelectorAll(".thumbnails img");
// imagethumb[count].classList.add("bright");
// arrowDown.addEventListener("click", function () {
//   imagethumb[count].classList.remove("bright");
//   count++;
//   if (count === images.length) {
//     count = 0;
//   }
//   imagethumb[count].classList.add("bright");
// });
