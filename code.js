const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "center";
    console.log("test");

    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div")
        div.classList.add("squere")
        row.appendChild(div);
    }

    $("#container").appendChild(row);
}

