/* Play Music */
function playMusic() {
  document.getElementById("bgMusic").play();
}

/* Typewriter Effect */
const text = "Happy Birthday, my love. To the girl who means everything to me. Happy Birthday, Namii ❤️💋";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

/* Hearts spelling NAMII */
const nameText = "NAMII";
const heartsContainer = document.querySelector(".hearts");

function showNameHearts() {
  heartsContainer.innerHTML = "";

  const spacing = 30;
  const startX = -(nameText.length * spacing) / 2;

  nameText.split("").forEach((_, i) => {
    const heart = document.createElement("span");
    heart.className = "name-heart";
    heart.innerHTML = "💖";
    heart.style.left = startX + i * spacing + "px";
    heart.style.top = "0px";
    heartsContainer.appendChild(heart);
  });

  setTimeout(() => {
    heartsContainer.innerHTML = "";
  }, 4000);
}

showNameHearts();
setInterval(showNameHearts, 5000);

/* Candle Blow */
function blowCandle() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("bgMusic").play();
  alert("Make a wish, Namii ❤️💋✨");
}