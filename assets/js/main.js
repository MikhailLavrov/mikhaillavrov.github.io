window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const agreement = document.querySelector('#agreement');
  const applyButton = document.querySelector('#agreement-apply');
  const downloadLink = document.querySelector('#download-link');
  const downloadPath = './docs/lavrov-frontend-cv-rus.pdf';

  if (downloadLink) {
    // TODO убрать дефолтное скачивание без нарушения семантики
    downloadLink.href = '#';

    downloadLink.addEventListener('click', (evt) => {
      evt.preventDefault;
      downloadLink.href = downloadPath;
      agreement.style.display = "flex";
      checkAgreement();
    });
  }

  const checkAgreement = () => {
    if (agreement) {
      body.classList.add('scroll-lock');
      
      agreement.addEventListener('click', (evt) => {
        if (evt.target != applyButton) {
          rejectDownload();
        };

        if (evt.target === applyButton) {
          applyDownload();
        };
      });

      const rejectDownload = () => {
        agreement.style.display = 'none';
        body.classList.remove('scroll-lock');
        agreement.removeEventListener('click', rejectDownload);
      };

      const applyDownload = () => {
        downloadLink.click();
        agreement.style.display = 'none';
        body.classList.remove('scroll-lock');
        agreement.removeEventListener('click', applyDownload);
      };
    }
  }
});
