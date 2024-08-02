const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


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
            div.colorinfo = [getRandomInt(256), getRandomInt(256), getRandomInt(256)]
            div.colorinfocurrent = [0, 0, 0]
            div.onmouseover = () => {
                div.colorinfocurrent[0] = div.colorinfo[0] + (div.colorinfo[0] - div.colorinfocurrent[0])/3
                div.colorinfocurrent[1] = div.colorinfo[1] + (div.colorinfo[1] - div.colorinfocurrent[1])/3
                div.colorinfocurrent[2] = div.colorinfo[2] + (div.colorinfo[2] - div.colorinfocurrent[2])/3
                div.style.backgroundColor = "rgb(" + div.colorinfocurrent[0] + ", " + div.colorinfocurrent[1] + ", " + div.colorinfocurrent[2] + ")";
            }
                
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