const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation__toggle');
const siteList = document.querySelector('.site-list');

navigationToggle.addEventListener('click', () => {
  navigation.classList.toggle('navigation--close');
  navigation.classList.toggle('navigation--open');
  siteList.classList.toggle('site-list--open');
});
