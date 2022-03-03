let toggle = document.getElementById("toggle");
let scoreNum = 0;
let scoreNumHolder = document.getElementById("scoreNum");
scoreNumHolder.innerHTML = scoreNum;
let response = document.getElementById("response");
let bulb = document.getElementById("Icon_awesome-lightbulb");

toggle.addEventListener("change", increaser = () => {
    if (toggle.checked == false) {
        scoreNumHolder.innerHTML = ++scoreNum;
        bulb.style.fill = "#063B68";
        response.innerHTML = "Thanks!";
    } else {
        bulb.style.fill = "#f7de55";
        response.innerHTML = "Please turn off the light again!";
    }
})