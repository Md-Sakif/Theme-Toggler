const dark_button = document.getElementById("dark-button");
const light_button = document.getElementById("light-button");

light_button.addEventListener("click", function() {
    this.style.display = "none";
    dark_button.style.display = "block";
    document.body.style.setProperty("--background", "var(--light)");
})

dark_button.addEventListener("click", function() {
    this.style.display = "none";
    light_button.style.display = "block";
    document.body.style.setProperty("--background", "var(--dark)");
})