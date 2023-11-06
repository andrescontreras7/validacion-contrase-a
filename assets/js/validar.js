document.querySelector(".cards__button").addEventListener("click", () => {
  const password = document.querySelector(".cards__input").value;

  if (password.length <= 8) {
    Swal.fire({
      icon: 'error',
      title: '¡Contraseña demasiado corta!',
      text: 'La contraseña debe tener al menos 8 caracteres.',
    });
  } else {
    const uppercaseCheck = /[A-Z]/;
    if (!uppercaseCheck.test(password)) {
      Swal.fire({
        icon: 'error',
        title: '¡Falta mayúscula!',
        text: 'La contraseña debe contener al menos una letra mayúscula.',
      });
    } else {
      const numberCheck = /[0-9]/;
      if (!numberCheck.test(password)) {
        Swal.fire({
          icon: 'error',
          title: '¡Falta número!',
          text: 'La contraseña debe incluir al menos un número.',
        });
      } else {
        let timerInterval;
        Swal.fire({
          title: '¡Contraseña válida!',
          html: 'Se cerrará en <b></b> milisegundos.',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('Cerrado por el temporizador');
          }
        });
      }
    }
  }
});
const passwordInput = document.querySelector(".cards__input");
        const togglePassword = document.querySelector(".toggle-password");

        togglePassword.addEventListener("click", function () {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);

            this.querySelector("i").classList.toggle("fa-eye");
            this.querySelector("i").classList.toggle("fa-eye-slash");
        });
