// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".masonry-item img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".modal-close");

  // When any image is clicked
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalCaption.textContent = img.alt;
      document.body.style.overflow = "hidden"; // Prevent scroll
    });
  });

  // Close modal on clicking close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal if user clicks outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close on pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const collaborators = [
    { logo: "inop.jpeg", name: "Innovation Mission Punjab" },
    { logo: "sttt.jpeg", name: "Startup Punjab" },
    { logo: "msme.jpeg", name: "Ministry of MSME" },
    { logo: "iic.jpeg", name: "IIC" },
    { logo: "iqac.jpeg", name: "IQAC" },
  ];

  let index = 0;
  const logo = document.getElementById("collabLogo");
  const title = document.getElementById("collabTitle");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function updateCollaborator() {
    // Add fade-out
    logo.style.opacity = "0";
    title.style.opacity = "0";

    setTimeout(() => {
      logo.src = collaborators[index].logo;
      logo.alt = collaborators[index].name;
      title.textContent = collaborators[index].name;

      // Fade-in after change
      logo.style.opacity = "1";
      title.style.opacity = "1";
    }, 300);
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % collaborators.length;
    updateCollaborator();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + collaborators.length) % collaborators.length;
    updateCollaborator();
  });

  // Initial load
  updateCollaborator();
});


