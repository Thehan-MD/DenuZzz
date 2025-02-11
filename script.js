// Get elements
const detailsBtn = document.getElementById('details-btn');
const contactBtn = document.getElementById('contact-btn');
const detailsMenu = document.getElementById('details-menu');
const contactMenu = document.getElementById('contact-menu');
const personalDetailsBtn = document.getElementById('personal-details-btn');
const pcSpecsBtn = document.getElementById('pc-specs-btn');
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');

// Show details menu
detailsBtn.addEventListener('click', () => {
  detailsMenu.classList.remove('hidden');
  contactMenu.classList.add('hidden');
});

// Show contact menu
contactBtn.addEventListener('click', () => {
  contactMenu.classList.remove('hidden');
  detailsMenu.classList.add('hidden');
});

// Show personal details image
personalDetailsBtn.addEventListener('click', () => {
  popupImage.src = 'https://files.catbox.moe/q2gino.jpg';
  imagePopup.classList.remove('hidden');
});

// Show PC specs image
pcSpecsBtn.addEventListener('click', () => {
  popupImage.src = 'https://files.catbox.moe/ot7t7w.jpg';
  imagePopup.classList.remove('hidden');
});

// Close popup when clicking outside the image
imagePopup.addEventListener('click', () => {
  imagePopup.classList.add('hidden');
});
