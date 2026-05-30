// Footer
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Temple Data
const temples = [
    {
        templeName: "St. Paul Minnesota Temple",
        location: "Oakdale, Minnesota, USA",
        dedicated: "2000, January, 9",
        area: 40032,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-paul-minnesota/800x500/st-paul-temple-lds-935253-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/1-Rome-Temple-2160936.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg, Saxony, Germany",
        dedicated: "1985, June, 29",
        area: 21500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/800x500/freiberg-germany-temple-lds-664670-wallpaper.jpg"
    },
    {
        templeName: "Frankfurt Germany Temple",
        location: "Friedrichsdorf, Germany",
        dedicated: "1987, August, 28",
        area: 32895,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/800x500/frankfurt-temple-1-2278179.jpg"
    },
    {
        templeName: "London England Temple",
        location: "Surrey, England, UK",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/800x500/london-england-temple-lds-919365-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois Temple",
        location: "Nauvoo, Illinois, USA",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-756496-wallpaper.jpg"
    },
    {
        templeName: "Guadalajara Mexico Temple",
        location: "Zapopan, Jalisco, Mexico",
        dedicated: "2001, April, 29",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guadalajara-mexico/800x500/guadalajara-mexico-temple-1368114-wallpaper.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/800x500/Paris-Temple02.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua Mexico Temple",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "1999, March, 6",
        area: 6800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/800x500/colonia-juarez-chihuahua-mexico-temple-1543027-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Minato-ku, Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52900,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/800x1280/tokyo_japan_temple-main.jpeg"
    },
    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska, USA",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/800x450/anchorage-temple-lds-253274-wallpaper.jpg"
    }
];

const templeContainer = document.querySelector("#temple-container");
const pageTitle = document.querySelector("#page-title");

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">
        `;

        templeContainer.appendChild(card);
    });
}

// Home
document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

// Old
document.querySelector("#old").addEventListener("click", () => {
    pageTitle.textContent = "Old Temples";
    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated.split(",")[0]) < 1900
        )
    );
});

// New
document.querySelector("#new").addEventListener("click", () => {
    pageTitle.textContent = "New Temples";
    displayTemples(
        temples.filter(
            temple => parseInt(temple.dedicated.split(",")[0]) > 2000
        )
    );
});

// Large
document.querySelector("#large").addEventListener("click", () => {
    pageTitle.textContent = "Large Temples";
    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );
});

// Small
document.querySelector("#small").addEventListener("click", () => {
    pageTitle.textContent = "Small Temples";
    displayTemples(
        temples.filter(
            temple => temple.area < 10000
        )
    );
});

// Initial Display
displayTemples(temples);
