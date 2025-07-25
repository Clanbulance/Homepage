const dropdownButton = document.getElementById('navdropdown');
const dropdownContent = document.querySelector('.dropdown-menu');;

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show')
});   