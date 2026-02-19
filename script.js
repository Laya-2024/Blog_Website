
function filterGallery(category) {
  const cards = document.querySelectorAll('.gallery-card');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');


document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = card.querySelector('img').src;
    document.body.style.overflow = 'hidden'; // stop background scroll
  });
});


function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
  document.body.style.overflow = 'auto'; // restore scroll
}


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    closeModal(); // close image if open
  });
});