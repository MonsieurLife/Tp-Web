document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const bookList = document.getElementById('bookList');

    toggleButton.addEventListener('click', function () {
        bookList.classList.toggle('hidden');
    });

    const showDescriptionButtons = document.querySelectorAll('.showDescriptionButton');

    showDescriptionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const bookDetails = this.parentNode.querySelector('.description');
            bookDetails.classList.toggle('hidden');
        });
    });
});
