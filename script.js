document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const planButtons = document.querySelectorAll('.plan button');
  planButtons.forEach((button) => {
    button.addEventListener('click', () => {
      planButtons.forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
});
