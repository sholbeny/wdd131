const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const travelForm = document.querySelector("#travelForm");
const savedPlan = document.querySelector("#savedPlan");
const clearPlan = document.querySelector("#clearPlan");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
}

function getSelectedInterests() {
  const checkedBoxes = document.querySelectorAll("input[name='interest']:checked");
  return Array.from(checkedBoxes).map(box => box.value);
}

function getRecommendation(city) {
  if (city === "Heidelberg") {
    return `Recommendation: Visit Heidelberg Castle first, then walk through the Altstadt and across the Old Bridge.`;
  } else if (city === "Köln") {
    return `Recommendation: Start at Köln Cathedral, then walk to Hohenzollern Bridge and Old Town.`;
  } else if (city === "Dortmund") {
    return `Recommendation: Take a tour of Signal Iduna Park and visit the German Football Museum.`;
  } else if (city === "Mainz") {
    return `Recommendation: Visit Mainz Cathedral and the Gutenberg Museum because they are close together.`;
  } else if (city === "Würzburg") {
    return `Recommendation: Visit the Würzburg Residence, then walk toward the Old Main Bridge.`;
  } else {
    return `Recommendation: Visit Luisenpark and the Mannheim Water Tower for a relaxed city experience.`;
  }
}

function displayPlan(plan) {
  if (!plan) {
    savedPlan.innerHTML = `<p>No travel plan has been saved yet.</p>`;
    return;
  }

  const interests = plan.interests.length > 0 ? plan.interests.join(", ") : "No interests selected";

  savedPlan.innerHTML = `
    <article class="city-card">
      <h3>${plan.name}'s Germany Travel Plan</h3>
      <p><strong>Favorite City:</strong> ${plan.city}</p>
      <p><strong>Travel Interests:</strong> ${interests}</p>
      <p><strong>Trip Length:</strong> ${plan.length}</p>
      <p>${getRecommendation(plan.city)}</p>
    </article>
  `;
}

function savePlan(event) {
  event.preventDefault();

  const plan = {
    name: document.querySelector("#travelerName").value,
    city: document.querySelector("#favoriteCity").value,
    interests: getSelectedInterests(),
    length: document.querySelector("#tripLength").value
  };

  localStorage.setItem("germanyTravelPlan", JSON.stringify(plan));
  displayPlan(plan);
  travelForm.reset();
}

function loadSavedPlan() {
  const saved = localStorage.getItem("germanyTravelPlan");

  if (saved) {
    const plan = JSON.parse(saved);
    displayPlan(plan);
  }
}

function removeSavedPlan() {
  localStorage.removeItem("germanyTravelPlan");
  displayPlan(null);
}

travelForm.addEventListener("submit", savePlan);
clearPlan.addEventListener("click", removeSavedPlan);

loadSavedPlan();