const toggleButton = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.innerHTML = '☀️ Light';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '☀️ Light';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.innerHTML = '🌙 Dark';
        localStorage.setItem('darkMode', null);
    }
});