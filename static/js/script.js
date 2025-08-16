// Sample data representing recipes
const recipes = [
  {
   // <script type="text/javascript" src="/static/script.js"></script>
    imageSrc: "/static/images/pasta.jpg",
    author: "HUM YA GAMAL RECIEPES",
    title: "Our most viewed dish",
    topic: "pasta",
    recipeLink: "./Skillet Chicken Penne Pasta.html",
  },
  {
    imageSrc: "/static/images/taco2.jpg",
    author: "HUM YA GAMAL RECIEPES",
    title: "The highest liked dish",
    topic: "tacos",
    recipeLink: "./birriatacodetails.html",
  },
  {
    imageSrc: "/static/images/suasagepasta.jpg",
    author: "HUM YA GAMAL RECIEPES",
    title: "Most viewed Egyptian dish",
    topic: "sausage pasta",
    recipeLink: "./pastawithsusagedetails.html",
  },
  {
    imageSrc: "/static/images/slamon.jpg",
    author: "HUM YA GAMAL RECIEPES",
    title: "Our healthiest<br>dish",
    topic: "salmon",
    recipeLink: "./salmonrecipiedetails.html",
  },
];

// Function to render recipes
function renderRecipes() {
  const listContainer = document.querySelector(".list");
  const thumbnailContainer = document.querySelector(".thumbnail");

  // Clear existing content
  listContainer.innerHTML = "";
  thumbnailContainer.innerHTML = "";

  // Render recipes
  recipes.forEach((recipe) => {
    // Create list item for carousel
    const listItem = document.createElement("div");
    listItem.classList.add("item");
    listItem.innerHTML = `
    <img src="${recipe.imageSrc}" />
    <div class="content">
      <div class="author">${recipe.author}</div>
      <div class="title">${recipe.title}</div>
      <div class="topic">${recipe.topic}</div>
      <div class="buttons">
        <button>
          <a href="${recipe.recipeLink}">full recipe</a>
        </button>
      </div>
    </div>
  `;
    listContainer.appendChild(listItem);

    // Create thumbnail item
    const thumbnailItem = document.createElement("div");
    thumbnailItem.classList.add("item");
    thumbnailItem.innerHTML = `
    <img src="${recipe.imageSrc}" />
    <div class="content">
      <div class="title">${recipe.topic}</div>
      <div class="description">Description</div>
    </div>
  `;
    thumbnailContainer.appendChild(thumbnailItem);
  });
}

// Call the renderRecipes function to render the data
renderRecipes();

//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}




