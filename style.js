//Floating hearts 
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 700);

// Fade-in on scroll 
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

faders.forEach(el => observer.observe(el));

// Heart cursor trail (desktop)
let lastHeartTime = 0;

document.addEventListener("mousemove", e => {
  const now = Date.now();
  if (now - lastHeartTime < 40) return;
  lastHeartTime = now;

  spawnHeart(e.pageX, e.pageY);
});

// Heart touch trail (mobile)
document.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  if (!touch) return;

  spawnHeart(touch.pageX, touch.pageY);
});

document.addEventListener("touchstart", e => {
  const touch = e.touches[0];
  if (!touch) return;

  spawnHeart(touch.pageX, touch.pageY);
});

// Shared heart function 
function spawnHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.innerHTML = "❤";

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 800);
}

/* Toggle surprise box */
function toggleSurprise(button) {
  const section = button.parentElement;
  const surprise = section.querySelector(".surprise");

  const isOpen = surprise.style.display === "block";

  surprise.style.display = isOpen ? "none" : "block";
  button.classList.toggle("active", !isOpen);
}


// Set up click event for each Open When card
document.querySelectorAll(".open-when-card").forEach(card => {
  card.addEventListener("click", () => {
    const index = card.getAttribute("data-index");
    const contentDiv = card.querySelector(".open-when-content");
    
    // If already visible, hide it
    if (contentDiv.style.opacity === "1") {
      contentDiv.style.opacity = 0;
      setTimeout(() => contentDiv.innerHTML = "", 300);
      return;
    }

    // Show message and image
    const data = openWhenMessages[index];
    let html = `<p>${data.message}</p>`;
    if (data.image) {
      html += `<img src="${data.image}" alt="Open When image" class="memory hover-effect" width="250">`;
    }
    contentDiv.innerHTML = html;

    // Fade in
    contentDiv.style.transition = "opacity 0.5s ease";
    setTimeout(() => contentDiv.style.opacity = 1, 50);
  });
});
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = musicBtn.querySelector(".heart-label");


let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicBtn.classList.remove("playing");
  } else {
    bgMusic.play();
    isPlaying = true;
    musicBtn.classList.add("playing");
  }
});
const clickables = document.querySelectorAll("button, a, .heart-btn");

clickables.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "rotate(-45deg) scale(1.4)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "rotate(-45deg) scale(1)";
  });
});
