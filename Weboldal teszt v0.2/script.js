"use strict";


// buttons used for buying

// used to buy lemonade
const gomb = document.getElementById('gomb');

// used to "buy groups" of children to make lemonade
const gomb2 = document.getElementById('gomb2');

// hire a kid to make & sell lemonade
const buy = document.getElementById('buy');

// const szoveg = document.getElementById('titkos2');
const invest = document.getElementById('invest');

// counter for money
const counter = document.getElementById('counter');


// affection meters
const family = document.getElementById('fam');
const motherAff = document.getElementById('mother_aff');

// counter for buyables
var kid = 0;
var group = 0;
var stock = 0;


// saving & loading data to JSON
function saveGame() {
    const data = {
        counter: Number(counter.textContent),
        kid: kid,
        group: group,
        stock: stock
    };

    localStorage.setItem("save", JSON.stringify(data));
}

function loadGame() {
    const save = localStorage.getItem("save");

    if (save) {
        const data = JSON.parse(save);

        counter.textContent = data.counter;
        kid = data.kid;
        group = data.group;
        stock = data.stock;
    }
}

loadGame();

// save game every 30 seconds
setInterval(saveGame, 30000);

gomb.addEventListener("click", () => {
    // document.body.style.backgroundColor = "green";
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent) > 10)  {
        buy.style.display = "block";
        // szoveg.style.display = "block";
    }
    saveGame();
});



// gomb2.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
// });

buy.addEventListener("click", () => {
    if (Number(counter.textContent) >= 10) 
    {
        counter.textContent = Number(counter.textContent) - 10;
        setInterval(() => {
        counter.textContent = Number(counter.textContent) + 1;
    }, 10000)
    kid++;
    }

    if (Number(counter.textContent) >= 100) {
        gomb2.style.display = "block";
    }
    saveGame();
});

gomb2.addEventListener("click", () => {
    if (Number(counter.textContent) >= 50) {
        counter.textContent = Number(counter.textContent) - 50;
        setInterval(() => {
            counter.textContent = Number(counter.textContent) + 10;
        }, 5000)
        group++;
    }
    
    if (Number(counter.textContent) >= 1000) {
        family.style.display = "block";
    }  
    saveGame();
});

// reload workers, groups, etc
function loadGame() {
    const save = localStorage.getItem("save");

    if (save) {
        const data = JSON.parse(save);

        counter.textContent = data.counter;
        kid = data.kid;
        group = data.group;
        stock = data.stock;

        for(let i = 0; i < kid; i++) {
            setInterval(() => {
                counter.textContent =
                    Number(counter.textContent) + 1;
            }, 10000);
        }

        for(let i = 0; i < group; i++) {
            setInterval(() => {
                counter.textContent =
                    Number(counter.textContent) + 10;
            }, 5000);
        }
    }
}