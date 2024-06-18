const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(`${button.textContent} has been clicked!`)
    })
})