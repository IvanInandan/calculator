const btn = document.querySelectorAll("button");
const input = document.querySelector(".input");
const memory = document.querySelector(".memory");

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let val = button.getAttribute("class");

        if (val.includes("delete")) {
        }

        else if (val.includes("clear")) {
        }

        else if (val.includes("equal")) {
        }

        else if (val.includes("operator")) {
            memory.textContent += (input.textContent  + " " + button.textContent);
        }

        else if (val.includes("number")) {
            input.textContent += button.textContent;
        }

        else if (val.includes("point")) {
            if (!(input.textContent).includes(".")) {
                input.textContent += button.textContent;
            }
        }
    })
})