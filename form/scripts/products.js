const products = [
    {
        id: "76419",
        name: "Hogwarts Castle",
        price: "$169.99",
        pieces: 2660,
        image: "https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "75379",
        name: "R2-D2",
        price: "$99.99",
        pieces: 1050,
        image: "https://www.lego.com/cdn/cs/set/assets/blt1dbcc5584e0e1f47/75379_alt2.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "43279",
        name: "Wall-E and Eve",
        price: "$69.99",
        pieces: 811,
        image: "https://www.lego.com/cdn/cs/set/assets/bltb61df5c6a83a2624/43279_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "21333",
        name: "The Starry Night",
        price: "$169.99",
        pieces: 2316,
        image: "https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "75375",
        name: "Millennium Falcon",
        price: "$84.99",
        pieces: 921,
        image: "https://www.lego.com/cdn/cs/set/assets/bltea91c53f2609bfa5/75375.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "76444",
        name: "Diagon Alley",
        price: "$199.99",
        pieces: 2750,
        image: "https://www.lego.com/cdn/cs/set/assets/blta8d5b7c13b5a3a81/76444_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "10294",
        name: "Titanic",
        price: "$679.99",
        pieces: 9090,
        image: "https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "75419",
        name: "Death Star",
        price: "$999.99",
        pieces: 9023,
        image: "https://www.lego.com/cdn/cs/set/assets/blt597e64c3c0f4786c/75419_Prod.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "10365",
        name: "Jack Sparrow Pirate Ship",
        price: "$379.99",
        pieces: 2862,
        image: "https://www.lego.com/cdn/cs/set/assets/bltcf20096d15e25f4c/10365_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "76466",
        name: "Sorcerer's Stone",
        price: "$169.99",
        pieces: 1571,
        image: "https://www.lego.com/cdn/cs/set/assets/bltff6d2570f98dec12/76466_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "21063",
        name: "Neuschwanstein Castle",
        price: "$279.99",
        pieces: 3455,
        image: "https://www.lego.com/cdn/cs/set/assets/blta2a10403bde99e82/21063_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    },
    {
        id: "76269",
        name: "Avengers Tower",
        price: "$499.99",
        pieces: 5201,
        image: "https://www.lego.com/cdn/cs/set/assets/blta1716ca226f20cab/76269.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5"
    }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} - ${product.price} - ${product.pieces} pieces`;
    productSelect.appendChild(option);
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;