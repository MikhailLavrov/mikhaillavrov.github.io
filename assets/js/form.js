document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact');

  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    
    form.classList.add('form-sending');

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
      form.classList.remove('form-sending');
    } else {
      alert('Хм. Кажется что-то пошло не так...')
      form.classList.remove('form-sending');
    };
  }
})
