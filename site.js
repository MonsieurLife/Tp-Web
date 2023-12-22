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

function openTab(tabName, button) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    button.classList.add("active");
}
