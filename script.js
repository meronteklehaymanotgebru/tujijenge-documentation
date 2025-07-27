AOS.init();

const searchBox = document.querySelector('.search-box');
const sidebarLinks = document.querySelectorAll('.sidebar a');
searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  sidebarLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.parentElement.style.display = text.includes(query) ? 'block' : 'none';
  });
});

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
