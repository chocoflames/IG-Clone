let Json = [
  {
    id: 0,
    photo: "img/IMG_0272.JPG",
    // Comments: ["fdjjdkfkjd", "shghsgdjs"],
    // likes: 1,
    // capti0n: "fhfdjhdfhddffd",
  },
  {
    id: 1,
    photo: "img/IMG_0291.JPG",
  },
  {
    id: 2,
    photo: "img/IMG_0313.JPG",
  },
  {
    id: 3,
    photo: "img/IMG_0377.JPG",
  },
  {
    id: 4,
    photo: "img/IMG_0379.JPG",
  },
  {
    id: 5,
    photo: "img/IMG_0392.JPG",
  },
  {
    id: 6,
    photo: "img/IMG_0415.JPG",
  },
  {
    id: 7,
    photo: "img/IMG_E0400.JPG",
  },
  {
    id: 0,
    photo: "img/IMG_0272.JPG",
  },
  {
    id: 1,
    photo: "img/IMG_0291.JPG",
  },
  {
    id: 2,
    photo: "img/IMG_0313.JPG",
  },
  {
    id: 3,
    photo: "img/IMG_0377.JPG",
  },
];

let jsonImg = document.querySelector(".json-img");
let mapImg = Json.map((i) => {
  return `<div class="img-cont">
    <div class="post-img">
    <img src="${i.photo}" class="json-pic" alt=""/>
    </div>
    </div>
    `;
});

jsonImg.innerHTML = mapImg.join(" ");

let ham = document.querySelector(".ham");
let burg = document.querySelector(".burg");
let square = document.querySelector(".square");
let line = document.querySelector(".line");
let footer = document.querySelector(".footer");
let scrollSec = document.querySelector(".scroll-sec");
let scrollDiv = document.querySelector(".scroll-div");

// ham.addEventListener("click", () => {
//   scrollDiv.style.display = "block"
//   footer.style.display = "none"
// })
square.addEventListener("click", () => {
  if (scrollSec.style.display === "block") {
    footer.style.display = "block";
    scrollSec.style.display = "none";
  } else {
    scrollSec.style.display = "block";

    footer.style.display = "none";
  };
});
burg.addEventListener("click", () => {
  if (scrollDiv.style.display === "block") {
    footer.style.display = "block";
    scrollDiv.style.display = "none";
  } else {
    scrollDiv.style.display = "block";

    footer.style.display = "none";
  }
});
line.addEventListener("click", () => {
  scrollDiv.style.display = "none";
  scrollSec.style.display = "none";
  footer.style.display = "block";
});