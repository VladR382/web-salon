// Toggle class active menu
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#menu');

// Ketika Menu di klik
menu.onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

//ketika search di klik
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Klik di luar element
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});