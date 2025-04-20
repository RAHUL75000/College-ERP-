// public/js/scripts.js
document.querySelector('form').addEventListener('login', function(e) {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    if (!username || !password) {
      e.preventDefault();
      alert('Please enter both username and password.');
    }
  });
  