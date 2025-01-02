const dark_button = document.getElementById("dark-button");
const light_button = document.getElementById("light-button");

light_button.addEventListener("click", function() {
    this.style.display = "none";
    document.body.style.backgroundColor = "white";
    dark_button.style.display = "block";
})

dark_button.addEventListener("click", function() {
    this.style.display = "none";
    document.body.style.backgroundColor = "black";
    light_button.style.display = "block";
})