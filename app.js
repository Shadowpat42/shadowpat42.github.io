document.addEventListener('DOMContentLoaded', () => {
  // Раскрываем логотип плавно (CSS-анимации уже подключены)
  const image = document.getElementById('myImage');
  if (image) image.style.display = 'block';

  // Подсветка активных ссылок по пути
  const path = location.pathname.replace(/\/+$/, '');
  document.querySelectorAll('.btn').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/\/+$/, '');
    if (normalized && path.endsWith(normalized)) {
      a.classList.add('is-active');
    }
  });
});
