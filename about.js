document.addEventListener("DOMContentLoaded", () => {

  // ✅ Counter Animation
  const counters = document.querySelectorAll('.count');
  const speed = 100; // smaller = faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // ✅ 3D Image Slideshow Animation
  const slides = document.querySelectorAll('.about-pcte-image .slide');
  let currentIndex = 0;

  function showNextImage() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  // Automatically switch images every 3 seconds
  setInterval(showNextImage, 3000);

});