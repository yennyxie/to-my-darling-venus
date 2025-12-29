const password = document.getElementById("password");
const nickname = document.getElementById("nickname");
const music = document.getElementById("music");
const playBtn = document.getElementById("play-music");

password.addEventListener("input", () => {
  if (password.value === "0922") {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("envelope-screen").classList.remove("hidden");
  }
});

nickname.addEventListener("input", () => {
  if (nickname.value.toLowerCase() === "collie") {
    document.getElementById("envelope-screen").classList.add("hidden");
    document.getElementById("letter-screen").classList.remove("hidden");
  }
});

playBtn.addEventListener("click", () => {
  music.play();
});
