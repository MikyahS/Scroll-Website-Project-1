const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const photos = document.querySelectorAll(".photo-section img");

function fadePhotosOnScroll() {
  photos.forEach((photo) => {
    const rect = photo.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const distanceFromCenter = Math.abs(
      rect.top + rect.height / 2 - windowHeight / 2
    );

    const fadeAmount = Math.max(
      0.35,
      1 - distanceFromCenter / (windowHeight * 0.9)
    );

    photo.style.opacity = fadeAmount;
  });
}

window.addEventListener("scroll", fadePhotosOnScroll);
window.addEventListener("resize", fadePhotosOnScroll);

fadePhotosOnScroll();



