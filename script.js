// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

// const h3 = document.createElement("h3");
// h3.textContent = "This smaller content also added by JavaScript";

// document.querySelector("body").appendChild(h3);

const img = document.getElementById("pig");

// Alert for clicking pig img
img.addEventListener('click', function () {
    alert("You clicked the pig...");
});

// // move the pig img around the screen
// function movePigLeft() {
//     const leftNumbers = img.style.left.replace("px", "")
//     const left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//         img.style.left = `${left - 500}px`;
//     }
// }
// function movePigDown() {
//     const bottomNumbers = img.style.bottom.replace("px", "")
//     const bottom = parseInt(bottomNumbers, 10);

//     if (bottom < 360) {
//         img.style.bottom = `${bottom - 500}px`;
//     }
// }
// function movePigRight() {
//     const leftNumbers = img.style.left.replace("px", "")
//     const left = parseInt(leftNumbers, 10);

//     if (left < 360) {
//         img.style.left = `${left + 500}px`;
//     }
// }
// function movePigUp() {
//     const bottomNumbers = img.style.bottom.replace("px", "")
//     const bottom = parseInt(bottomNumbers, 10);

//     if (bottom > 0) {
//         img.style.left = `${bottom - 500}px`;
//     }
// }

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//         movePigLeft();
//     }
// })

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowRight") {
//         movePigRight();
//     }
// })

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowUp") {
//         movePigUp();
//     }
// })

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowDown") {
//         movePigDown();
//     }
// })

