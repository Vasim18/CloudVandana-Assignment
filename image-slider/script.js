// Array of image URLs
const images = [
    "https://images.pexels.com/photos/30729429/pexels-photo-30729429/free-photo-of-cozy-vintage-setting-with-books-and-candlelight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/30727196/pexels-photo-30727196/free-photo-of-surfers-riding-waves-at-sunset-in-golden-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/7470859/pexels-photo-7470859.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/29935738/pexels-photo-29935738/free-photo-of-stunning-alpine-view-of-the-matterhorn-peak.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
];

  // Get DOM elements
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // Track the current image index

  // Function to display the current image
function showImage(index) {
    sliderImage.src = images[index];
}

  // Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    showImage(currentIndex);
}

  // Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    showImage(currentIndex);
}

  // Event listeners for buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

  // Display the first image initially
showImage(currentIndex);