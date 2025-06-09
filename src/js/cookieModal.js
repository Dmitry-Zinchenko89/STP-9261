

  const cookieBanner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('acceptCookies');
const declineBtn = document.getElementById('declineCookies');


if (localStorage.getItem('cookiesChoice')) {
  cookieBanner.style.display = 'none';
}


acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesChoice', 'accepted');
  cookieBanner.style.display = 'none';
});


declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesChoice', 'declined');
  cookieBanner.style.display = 'none';
});