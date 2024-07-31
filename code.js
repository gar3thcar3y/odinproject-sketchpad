const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function create_grid(num) {
    $("#container").innerHTML = ""
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center";

        for (let j = 0; j < num; j++) {
            var id = i + "," + j
            const div = document.createElement("div")
            div.classList.add("squere")
            div.id = id
            div.onclick = "color('" + i + "," + j + "');"
            row.appendChild(div);
        }

        $("#container").appendChild(row);
    }
}

create_grid(16);

function new_width() {
    var width = window.prompt();
    while(width > 100){
        width = window.prompt();
    }
    create_grid(width);

}