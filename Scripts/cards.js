console.log("Working Cards JS");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".item-shark-card");
  const sound = document.getElementById("hoverSound");

  // Safety check (prevents crashes if audio is missing)
  if (!sound) {
    console.warn("hoverSound audio element not found");
    return;
  }

  cards.forEach(card => {
    let hasPlayed = false;

    card.addEventListener("mouseenter", () => {
      if (!hasPlayed) {
        sound.currentTime = 0;
        sound.play().catch(err => {
          console.log("Audio blocked until user interaction:", err);
        });

        hasPlayed = true;
      }
    });
  });
});