document.querySelector(".myForm").addEventListener("click", function (event) {
  const formContainer = document.querySelector(".contact");
  const button = event.target; // The clicked button

  formContainer.style.display = "block"; // Show the form
  button.style.display = "none"; // Hide the button
});

// Get all the images and paragraphs with the respective classes
const images = document.querySelectorAll(".image-class");
const paragraphs = document.querySelectorAll(".hover-para");
// Loop through the images and paragraphs
images.forEach((image, index) => {
  const paragraph = paragraphs[index]; // Corresponding paragraph for each image

  // Show the paragraph with a fade-in effect when the image is hovered over
  image.addEventListener("mouseover", () => {
    paragraph.classList.add("visible"); // Add 'visible' class to fade in
  });

  // Hide the paragraph with a fade-out effect when the mouse leaves the image
  image.addEventListener("mouseout", () => {
    paragraph.classList.remove("visible"); // Remove 'visible' class to fade out
  });
});
