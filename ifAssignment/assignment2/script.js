let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 7 && hour <= 8) {
  textHolder.innerHTML = "Good morning!";
} else if (hour > 8 && hour <= 14) {
  textHolder.innerHTML = "School";
} else if (hour > 14 && hour <= 20) {
  textHolder.innerHTML = "School work and games";
} else if (hour > 20 && hour <= 22) {
  textHolder.innerHTML = "It is dinner time";
} else if (hour > 22 && hour <= 1) {
  textHolder.innerHTML = "Relaxing time";
} else {
  textHolder.innerHTML = "Goodnight";
}