const keywords = ["Ideate", "Build", "Launch"];
const keywordElement = document.getElementById("keyword");
const splash = document.getElementById("splash");
const bulb = document.querySelector(".bulb");

let index = 0;

// Start immediately with first word
keywordElement.textContent = keywords[index];
keywordElement.style.opacity = 1;

const interval = setInterval(() => {
  keywordElement.style.opacity = 0;
  bulb.classList.toggle("glow");

  setTimeout(() => {
    index++;
    if (index < keywords.length) {
      keywordElement.textContent = keywords[index];
      keywordElement.style.opacity = 1;
    }
  }, 500);

  if (index >= keywords.length - 1) {
    clearInterval(interval);
    setTimeout(endSplash, 2500);
  }
}, 2000);

function endSplash() {
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = "none";
    window.location.href = "home.html"; // redirect to homepage
  }, 1000);
}

splash.addEventListener("click", endSplash);