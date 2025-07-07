document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById("reject-cookies");
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

  if (cookieBanner && acceptBtn && rejectBtn) {
    if (!getCookie(cookieName)) {
      cookieBanner.style.display = 'block';
    }
    acceptBtn.addEventListener("click", function() {
      setCookie(cookieName, cookieValue, cookieExpiryDays);
      cookieBanner.style.display = "none";
    });
    rejectBtn.addEventListener("click", function() {
      setCookie(cookieName, "rejected", cookieExpiryDays);
      cookieBanner.style.display = "none";
    });
  }

  const ctaButton = document.getElementById('cta-button');
  const ctaModal = document.getElementById('cta-modal');
  const ctaClose = document.getElementById('cta-close');
  const ctaForm = document.getElementById('cta-form');

  function closeModal() {
    if (ctaModal) {
      ctaModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  if (ctaButton && ctaModal) {
    ctaButton.addEventListener('click', function() {
      ctaModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const firstInput = document.getElementById('cta-name');
      if (firstInput) firstInput.focus();
    });

    if (ctaClose) {
      ctaClose.addEventListener('click', closeModal);
    }

    ctaModal.addEventListener('click', function(e) {
      if (e.target === ctaModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Allow default form submission so Netlify can capture entries
    // Modal will close automatically when the browser navigates away
    // to Netlify's default form success page.
    if (ctaForm) {
      ctaForm.addEventListener('submit', function() {
        closeModal();
      });
    }
  }
});
