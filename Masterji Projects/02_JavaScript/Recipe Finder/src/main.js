// DOM elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsHeading = document.getElementById("results-heading");
const loading = document.getElementById("loading");
const recipesContainer = document.getElementById("recipes-container");
const singleRecipeView = document.getElementById("single-recipe-view");
const recipeDetails = document.getElementById("recipe-details");
const backButton = document.getElementById("back-button");

// link with api
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// function to fetch recipes
async function fetchRecipes(query) {
  showLoading();
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
    const data = await response.json();

    console.log("Data:", data);

    hideLoading();
    displayRecipes(data.meals);
  } catch (error) {
    hideLoading();
    recipesContainer.innerHTML = `<p class="text-center text-red-600 col-span-full">Failed to load recipes. Please try again.</p>`;
  }
}

function displayRecipes(meals) {
  if (!meals) {
    recipesContainer.innerHTML = `<p class="text-center text-red-600 col-span-full">Failed to load recipes. Please try again.</p>`;
    resultsHeading.classList.add("hidden");
    return;
  }

  resultsHeading.classList.remove("hidden");
  recipesContainer.innerHTML = meals
    .map(
      (meal) => `
        <div class="recipe-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" data-id="${meal.idMeal}">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-lg text-gray-800 truncate">${meal.strMeal}</h3>
            <p class="text-gray-600 mt-1 text-sm">Category: ${meal.strCategory}</p>
          </div>
        </div>
      `
    )
    .join("");

  // .join("") is used to join all the recipes into a single string otherwise you will get a comma after every recipe.
}

async function showRecipeDetails(id) {
  showLoading();
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();

    hideLoading();
    renderRecipeDetails(data.meals[0]);

    recipesContainer.classList.add("hidden");
    resultsHeading.classList.add("hidden");
    singleRecipeView.classList.remove("hidden");
  } catch (error) {
    hideLoading();
    recipesContainer.innerHTML = `<p class="text-center text-red-600 col-span-full">Failed to load recipe details. Please try again.</p>`;
  }
}

function renderRecipeDetails(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim() !== "") {
      ingredients.push(`${measure} ${ing}`);
    }
  }

  // for reference check the sample.json file - it has all the fields

  recipeDetails.innerHTML = `
    <img src="${meal.strMealThumb}" class="w-full h-64 object-cover" />
    <div class="p-6">
      <h2 class="text-3xl font-bold text-gray-800">${meal.strMeal}</h2>
      <p class="text-orange-600 font-medium mt-2">Category: 
        ${meal.strCategory} | Area: ${meal.strArea}</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800">Ingredients</h3>
      <ul class="grid grid-cols-2 gap-2 mb-6">
        ${ingredients
          .map(
            (ing) => `<li class="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            ${ing}</li>`
          )
          .join("")}
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-4">Instructions</h3>
      <p class="text-gray-700 leading-relaxed whitespace-pre-line">
        ${meal.strInstructions}
      </p>

      ${
        meal.strYoutube
          ? `
        <div class="mt-6">
          <a href="${meal.strYoutube}" target="_blank" class="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>  
          Watch on YouTube
          </a>
        </div>
      `
          : ""
      }
      
    </div>
  `;
}

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

// Event listeners
searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchRecipes(query);
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) fetchRecipes(query);
  }
});

backButton.addEventListener("click", () => {
  singleRecipeView.classList.add("hidden");
  recipesContainer.classList.remove("hidden");
  if (recipesContainer.innerHTML.trim() !== "") {
    resultsHeading.classList.remove("hidden");
  }
});

recipesContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-card");
  if (card) {
    const id = card.dataset.id;
    showRecipeDetails(id);
  }

  // data-id stores the meal ID safely in the DOM
  // closest('.recipe-card') ensures clicks on child elements (img, text) still work
});
