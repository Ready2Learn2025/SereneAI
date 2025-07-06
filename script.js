document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const cookieName = 'uk_gdpr_consent';
  const cookieValue = 'accepted';
  const cookieExpiryDays = 365;

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/;SameSite=Strict';
  }

  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  if (cookieBanner && acceptBtn) {
    if (!getCookie(cookieName)) {
      cookieBanner.style.display = 'block';
    }
    acceptBtn.addEventListener('click', function() {
      setCookie(cookieName, cookieValue, cookieExpiryDays);
      cookieBanner.style.display = 'none';
    });
  }
});
