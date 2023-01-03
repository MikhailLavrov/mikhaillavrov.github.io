window.addEventListener('DOMContentLoaded', () => {
  const translation = document.querySelector('#translation');
  const ruToggle = translation.querySelector('#ruTranslate');
  const enToggle = translation.querySelector('#enTranslate');

  translation.addEventListener('click', (evt) => {
    evt.target === enToggle ? toggleToEn() : null;
    evt.target === ruToggle ? toggleToRu() : null;
  });

  const toggleToEn = () => {
    enToggle.classList.add('active');
    ruToggle.classList.remove('active');
  };

  const toggleToRu = () => {
    ruToggle.classList.add('active');
    enToggle.classList.remove('active');
  };
});
