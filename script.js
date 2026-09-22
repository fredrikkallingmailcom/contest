const showHiddenStuff = document.getElementById("showHiddenStuff");
const imageWithCaption = document.getElementById("imageWithCaption");

showHiddenStuff.addEventListener("click", () => {
    imageWithCaption.classList.toggle("hidden");
});