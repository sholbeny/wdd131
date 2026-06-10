const cities = [
  {
    name: "Heidelberg",
    popular: "Heidelberg Castle",
    visitors: "around 1 million visitors per year",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Heidelberg-2726936.jpg/960px-Heidelberg-2726936.jpg",
    attractions: [
      {
        name: "Heidelberg Castle",
        built: "1214",
        cost: "€11",
        distance: "2 km from Old Bridge and 1 km from Altstadt",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Heidelberg-2726936.jpg/960px-Heidelberg-2726936.jpg"
      },
      {
        name: "Old Bridge",
        built: "1788",
        cost: "Free",
        distance: "2 km from Heidelberg Castle and connected to Altstadt",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Alte_Br%C3%BCcke_Heidelberg.JPG/960px-Alte_Br%C3%BCcke_Heidelberg.JPG"
      },
      {
        name: "Altstadt",
        built: "1200s",
        cost: "Free",
        distance: "1 km from Heidelberg Castle and connected to Old Bridge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Heidelberg_Fussgaengerzone.JPG/500px-Heidelberg_Fussgaengerzone.JPG"
      }
    ]
  },
  {
    name: "Köln",
    popular: "Köln Cathedral",
    visitors: "around 6 million visitors per year",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cologne_cathedral_aerial_%2825326253726%29_b.jpg/500px-Cologne_cathedral_aerial_%2825326253726%29_b.jpg",
    attractions: [
      {
        name: "Köln Cathedral",
        built: "1248-1880",
        cost: "Free for the main cathedral, €12 for the entire building",
        distance: "500 m from Hohenzollern Bridge and adjacent to Old Town",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cologne_cathedral_aerial_%2825326253726%29_b.jpg/500px-Cologne_cathedral_aerial_%2825326253726%29_b.jpg"
      },
      {
        name: "Hohenzollern Bridge",
        built: "1907-1911",
        cost: "Free",
        distance: "500 m from Köln Cathedral and connected to the northern edge of Old Town",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Hohenzollernbr%C3%BCcke_K%C3%B6ln_von_oben.jpg/960px-Hohenzollernbr%C3%BCcke_K%C3%B6ln_von_oben.jpg"
      },
      {
        name: "Old Town Köln",
        built: "Medieval times",
        cost: "Free",
        distance: "Adjacent to the cathedral and connected to Hohenzollern Bridge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/K%C3%B6ln_Altstadt_Luftbild_%2833198399503%29.jpg/1280px-K%C3%B6ln_Altstadt_Luftbild_%2833198399503%29.jpg"
      }
    ]
  },
  {
    name: "Dortmund",
    popular: "Signal Iduna Park",
    visitors: "around 1.8 million attendees",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Signal_iduna_park_stadium_dortmund_2.jpg/960px-Signal_iduna_park_stadium_dortmund_2.jpg",
    attractions: [
      {
        name: "Signal Iduna Park",
        built: "1974",
        cost: "€15 for a tour",
        distance: "4 km from the German Football Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Signal_iduna_park_stadium_dortmund_2.jpg/960px-Signal_iduna_park_stadium_dortmund_2.jpg"
      },
      {
        name: "German Football Museum",
        built: "2015",
        cost: "€19",
        distance: "4 km from Signal Iduna Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Deutsches_Fu%C3%9Fballmuseum.jpg/960px-Deutsches_Fu%C3%9Fballmuseum.jpg"
      },
      {
        name: "Westfalenpark",
        built: "1959",
        cost: "€5",
        distance: "2 km from Signal Iduna Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Westfalenpark_Dortmund%2C_Teich_am_Eingang.jpg/1280px-Westfalenpark_Dortmund%2C_Teich_am_Eingang.jpg"
      }
    ]
  },
  {
    name: "Mainz",
    popular: "Mainz Cathedral",
    visitors: "several hundred thousand visitors per year",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mainzer_Dom_nw.jpg/500px-Mainzer_Dom_nw.jpg",
    attractions: [
      {
        name: "Mainz Cathedral",
        built: "975-1009",
        cost: "Free",
        distance: "300 m from the Gutenberg Museum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mainzer_Dom_nw.jpg/500px-Mainzer_Dom_nw.jpg"
      },
      {
        name: "Gutenberg Museum",
        built: "1900",
        cost: "€5-10",
        distance: "300 m from Mainz Cathedral",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gutenberg-Museum_Mainz_585-vh.jpg/500px-Gutenberg-Museum_Mainz_585-vh.jpg"
      },
      {
        name: "Mainz Old Town",
        built: "Medieval times",
        cost: "Free",
        distance: "Walking distance from Mainz Cathedral and the Gutenberg Museum",
        image: "https://www.mainz-tourismus.com/typo3temp/assets/_processed_/9/0/csm_41164588-c403-401f-96c2-82f8fa1e58b0_0ea361e255.jpg"
      }
    ]
  },
  {
    name: "Würzburg",
    popular: "Würzburg Residence",
    visitors: "around 300,000 visitors per year",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/2004-06-27-Germany-Wuerzburg-Lutz_Marten-Residenz_side_view_1.jpg",
    attractions: [
      {
        name: "Würzburg Residence",
        built: "1720-1744",
        cost: "€10",
        distance: "1.5 km from Old Main Bridge",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/2004-06-27-Germany-Wuerzburg-Lutz_Marten-Residenz_side_view_1.jpg"
      },
      {
        name: "Marienberg Fortress",
        built: "c. 1200",
        cost: "Free for the grounds",
        distance: "1 km from Old Main Bridge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marienberg_wuerzburg.jpg/960px-Marienberg_wuerzburg.jpg"
      },
      {
        name: "Old Main Bridge",
        built: "1476-1703",
        cost: "Free",
        distance: "1.5 km from Würzburg Residence",
        image: "https://d15ldvyocwqu5y.cloudfront.net/images/uploaded-new/393394"
      }
    ]
  },
  {
    name: "Mannheim",
    popular: "Luisenpark",
    visitors: "around 1 million visitors per year",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rosenstein_fg04.jpg/500px-Rosenstein_fg04.jpg",
    attractions: [
      {
        name: "Mannheim Palace",
        built: "1720-1760",
        cost: "€9",
        distance: "2 km from the Water Tower and 3 km from Luisenpark",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/SchlossEhrenhof_2017.jpg/500px-SchlossEhrenhof_2017.jpg"
      },
      {
        name: "Luisenpark",
        built: "Opened in 1892",
        cost: "€9.50 for adults",
        distance: "2 km from the Water Tower and 3 km from Mannheim Palace",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rosenstein_fg04.jpg/500px-Rosenstein_fg04.jpg"
      },
      {
        name: "Mannheim Water Tower",
        built: "1886-1889",
        cost: "Free for exterior and gardens",
        distance: "2 km from Mannheim Palace and 2 km from Luisenpark",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Wasserturm_Mannheim_2020-04-24_COVID-19.jpg/500px-Wasserturm_Mannheim_2020-04-24_COVID-19.jpg"
      }
    ]
  }
];

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
}

function displayFeaturedCities() {
  const featuredCities = document.querySelector("#featuredCities");

  if (!featuredCities) {
    return;
  }

  featuredCities.innerHTML = cities.map(city => `
    <article class="city-card">
      <img src="${city.image}" alt="${city.name}" loading="lazy">
      <h3>${city.name}</h3>
      <p><strong>Most Popular Attraction:</strong> ${city.popular}</p>
      <p>${city.popular} welcomes ${city.visitors}.</p>
      <a class="button" href="cities.html">Learn More</a>
    </article>
  `).join("");
}

function displayCities(cityList) {
  const cityCards = document.querySelector("#cityCards");

  if (!cityCards) {
    return;
  }

  cityCards.innerHTML = cityList.map(city => `
    <article class="city-card">
      <h2>${city.name}</h2>
      <p><strong>Most Popular Attraction:</strong> ${city.popular}</p>
      <p>${city.popular} receives ${city.visitors}.</p>

      <div class="attraction-grid">
        ${city.attractions.map(attraction => `
          <section class="attraction-card">
            <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
            <h3>${attraction.name}</h3>
            <p><strong>Built:</strong> ${attraction.built}</p>
            <p><strong>Admission:</strong> ${attraction.cost}</p>
            <p><strong>Nearby:</strong> ${attraction.distance}</p>
          </section>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function filterCities() {
  const cityFilter = document.querySelector("#cityFilter");
  const selectedCity = cityFilter.value;

  if (selectedCity === "all") {
    displayCities(cities);
  } else {
    const filteredCities = cities.filter(city => city.name === selectedCity);
    displayCities(filteredCities);
  }
}

const cityFilter = document.querySelector("#cityFilter");

if (cityFilter) {
  cityFilter.addEventListener("change", filterCities);
}

displayFeaturedCities();
displayCities(cities);