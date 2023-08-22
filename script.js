const input = document.querySelector('.password__input');
const button = document.querySelector('.password__button');
const  title = document.querySelector('.advice__title');
const  lengthButton = document.querySelector('.advice__length');
const  symbols = document.querySelector('.advice__symbold');
const  numbers = document.querySelector('.advice__numbers');
const  letters = document.querySelector('.advice__letters');
const diff = document.querySelector('.password__diff')

const checkPasswords = (password) => {
    var rating = 0;

    var length = password.length >= 8;
    var s_letters = /[a-z]/.test(password);
    var b_letters = /[A-Z]/.test(password);
    var digits = /\d/.test(password);
    var specials = /[!@#$%^&*()_\-+=\\|/.,:;[\]{}]/.test(password);
    if(password.length === 0) {
            letters.style.display = 'block';
            numbers.style.display = 'block';
            symbols.style.display = 'block';
            lengthButton.style.display = 'block'
    }
    if(length && s_letters && b_letters && digits && specials) {
        title.style.display = 'none';
    } else {
        title.style.display = 'block';
    }

    for (var i = 0; i < password.length; i++) {
      if (s_letters) {
        rating++;
      } else {
        rating--;
      }

      if (b_letters) {
        rating++;
        letters.style.display = 'none';
      } else {
        rating--;
        letters.style.display = 'block';
      }

      if (digits) {
        rating++;
        numbers.style.display = 'none';
      } else {
        rating--;
        numbers.style.display = 'block';
      }
      
      if (specials) {
        rating++;
        symbols.style.display = 'none';
      } else {
        rating--;
        symbols.style.display = 'block';
      }
      
      if (length) {
        rating++;
        lengthButton.style.display = 'none'
      } else {
        rating--;
        lengthButton.style.display = 'block'
      }
    }

    if (password.length < 8 && rating < 3) {
        diff.style.color = 'red';
        diff.innerHTML = "Простой";
    }
    else if (password.length < 8 && rating >= 3) {
        diff.style.color = 'orange';
        diff.innerHTML = "Средний";
    }
    else if (password.length >= 8 && rating < 3) {
        diff.style.color = 'orange';
        diff.innerHTML = "Средний";
    }
    else if (password.length >= 8 && rating >= 3) {
        diff.style.color = 'green';
        diff.innerHTML = "Сложный";
    }
    else if (password.length >= 8 && rating == 1) {
        diff.style.color = 'red';
        diff.innerHTML = "Простой";
    }
    else if (password.length >= 8 && rating > 1 && rating < 4) {
        diff.style.color = 'orange';
        diff.innerHTML = "Средний";
    }
    else if (password.length >= 8 && rating == 4) {
        diff.style.color = 'green';
        diff.innerHTML = "Сложный";
    }
}

input.addEventListener('input', (e) => {
    checkPasswords(e.target.value);
})

button.addEventListener('click', () => {
    input.classList.toggle('visible');
    if(input.classList.contains('visible')) {
        input.type = 'text';
    } else input.type = 'password';
})
