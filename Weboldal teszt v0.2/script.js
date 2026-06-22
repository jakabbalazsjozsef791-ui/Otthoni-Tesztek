"use strict";


// buttons used for buying

// used to buy lemonade
const gomb = document.getElementById('gomb');

// hire a kid to make & sell lemonade
const buyKid = document.getElementById('buyKid');

// used to "buy groups" of children to make lemonade
const buyGroup = document.getElementById('buyGroup');

// used to save the game
const saveGameButton = document.getElementById('saveGame');

// used to invest in stocks
const invest = document.getElementById('invest');

// counter for money
const counter = document.getElementById('counter');


// affection meters
const family = document.getElementById('fam');
const motherAff = document.getElementById('mother_aff');

// counter for buyables
let kid = 0;
let group = 0;
let stock = 0;


// save game to JSON file
function saveToJSONFile() {
    const blob = new Blob([JSON.stringify({
        counter: Number(counter.textContent),
        kid: kid,
        group: group,
        stock: stock
    })], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "gameSave.json";
    a.click();
    URL.revokeObjectURL(url);
};

saveGameButton.addEventListener("click", () => {
    saveToJSONFile();
});

// load game from JSON file
document.getElementById("loadFile").addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        const saveData = JSON.parse(reader.result);

        // Apply save data
        counter.textContent = saveData.counter;
        kid = saveData.kid;
        group = saveData.group;
        stock = saveData.stock;

        counter.textContent = saveData.counter;
        kid = saveData.kid;
        group = saveData.group;
        stock = saveData.stock;

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

        updateScreen();
        };
    };

    reader.readAsText(file);
});

gomb.addEventListener("click", () => {
    // document.body.style.backgroundColor = "green";
    counter.textContent = Number(counter.textContent) + 1;
    // if (Number(counter.textContent) > 10)  {
    //     buyKid.style.display = "block";
    // }
    // saveGame();
});



buyKid.addEventListener("click", () => {
    if (Number(counter.textContent) >= 10) 
    {
        counter.textContent = Number(counter.textContent) - 10;
        setInterval(() => {
        counter.textContent = Number(counter.textContent) + 1;
    }, 10000)
    kid++;
    }

    // if (Number(counter.textContent) >= 100) {
    //     buyGroup.style.display = "block";
    // }
    // saveGame();
});

buyGroup.addEventListener("click", () => {
    if (Number(counter.textContent) >= 50) {
        counter.textContent = Number(counter.textContent) - 50;
        setInterval(() => {
            counter.textContent = Number(counter.textContent) + 10;
        }, 5000)
        group++;
    }
    
    // if (Number(counter.textContent) >= 1000) {
    //     family.style.display = "block";
    // }  
    // saveGame();
});

function buyKidAppears() {
    if (Number(counter.textContent) >= 10)  {
        buyKid.style.display = "block";
    }
};

setInterval(buyKidAppears, 1000);

function buyGroupAppears() {
    if (Number(counter.textContent) >= 100) {
        buyGroup.style.display = "block";
    };
};

setInterval(buyGroupAppears, 1000);