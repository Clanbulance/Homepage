const dropdownButton = document.getElementById('navdropdown');
const dropdownContent = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-menu li');

let isDropdownVisible = false;

dropdownButton.addEventListener('click', () => {
  if (isDropdownVisible) {
    hideDropDown();
  } else {
    viewDropDown();
  }
});

function viewDropDown() {
  dropdownContent.style.display = "block";
  isDropdownVisible = true;

  dropdownContent.addEventListener('mouseleave', hideDropDown);

  dropdownItems.forEach(item => {
    item.addEventListener('click', hideDropDown);
  });

  console.log('Dropdown menu shown');
}

function hideDropDown() {
  dropdownContent.style.display = "none";
  isDropdownVisible = false;

  dropdownContent.removeEventListener('mouseleave', hideDropDown);

  dropdownItems.forEach(item => {
    item.removeEventListener('click', hideDropDown);
  });

  console.log('Dropdown menu hidden');
}



export default {
    viewDropDown  
};