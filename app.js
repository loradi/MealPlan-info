const buttons = document.querySelectorAll('[data-set-lang]');
const sections = document.querySelectorAll('[data-lang]');
function setLanguage(language) {
  for (const section of sections) section.hidden = section.dataset.lang !== language;
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.setLang === language));
  document.documentElement.lang = language;
  try { localStorage.setItem('mealplan-site-language', language); } catch (_) {}
}
for (const button of buttons) button.addEventListener('click', () => setLanguage(button.dataset.setLang));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('mealplan-site-language') || 'en'; } catch (_) {}
setLanguage(savedLanguage === 'es' ? 'es' : 'en');
