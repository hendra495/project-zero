document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Tombol telah diklik!';
    });
});
