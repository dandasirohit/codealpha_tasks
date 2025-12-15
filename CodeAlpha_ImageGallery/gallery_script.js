const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const img = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');
const nextBtn = lightbox.querySelector('.next');
const prevBtn = lightbox.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filters button');


let currentIndex = 0;
let visibleItems = [...items];


function openLightbox(index) {
currentIndex = index;
img.src = visibleItems[currentIndex].querySelector('img').src;
lightbox.classList.add('active');
}


function closeLightbox() {
lightbox.classList.remove('active');
}


function nextImage() {
currentIndex = (currentIndex + 1) % visibleItems.length;
img.src = visibleItems[currentIndex].querySelector('img').src;
}


function prevImage() {
currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
img.src = visibleItems[currentIndex].querySelector('img').src;
}


items.forEach(item => {
item.addEventListener('click', () => {
openLightbox(visibleItems.indexOf(item));
});
});


closeBtn.onclick = closeLightbox;
nextBtn.onclick = nextImage;
prevBtn.onclick = prevImage;


filterButtons.forEach(btn => {
btn.addEventListener('click', () => {
filterButtons.forEach(b => b.classList.remove('active'));
btn.classList.add('active');


const filter = btn.dataset.filter;
visibleItems = [];


items.forEach(item => {
if (filter === 'all' || item.dataset.category === filter) {
item.style.display = 'block';
visibleItems.push(item);
} else {
item.style.display = 'none';
}
});
});
});