const searchInput = document.querySelector(".search");
const serial = document.querySelectorAll(".serial");

searchInput.addEventListener("keyup", (e) => {
const word = e.target.value.toLowerCase();

serial.forEach(item => {
item.querySelector("h2").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
})

console.log(word)
} )
