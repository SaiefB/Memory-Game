const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tilesCount = colorsPicklist.length;

// Game state
let revealCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    /* element.setAttribute("data-revealed", "false"); */

    element.addEventListener("click", () => {
        if (awaitingEndOfMove) {
            return;
        }
    });

    return element;
}

// Build up tiles
for (let i = 0; i < tilesCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const tile = buildTile(color);

    colorsPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);

    console.log(color);
}

// https://www.youtube.com/watch?v=bznJPt4t_4s
// 17:30