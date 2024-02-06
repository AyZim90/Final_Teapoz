document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll('.nav-btn');

  navButtons.forEach((button) => {
    const submenu = button.querySelector('.submenu');
    button.addEventListener('mouseover', function () {
      submenu.style.opacity = '1';
      submenu.style.pointerEvents = 'auto';
    });

    button.addEventListener('mouseout', function () {
      submenu.style.opacity = '0';
      submenu.style.pointerEvents = 'none';
    });
  });
});