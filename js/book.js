const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const pagesCount = document.querySelector('.pages-count');
const currentPageNumber = document.querySelector('.current-page-number');
const chandeModeBtn = document.querySelector('#change-mode-btn');


prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);
chandeModeBtn.addEventListener('click', changeMode);

let currentPage = 0;
let isOn = false;

function prevPage() {
    pages[currentPage].classList.remove('active-page');
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    pages[currentPage].classList.add('active-page');
    currentPageNumber.innerHTML = currentPage + 1;
    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
}

function nextPage() {
    pages[currentPage].classList.remove('active-page');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.add('active-page');
    currentPageNumber.innerHTML = currentPage + 1;
    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
}

pagesCount.innerHTML = pages.length;

function changeMode() {
    const body = document.body;
    const main = document.querySelector('.main');
    const buttons = document.querySelectorAll('.btn');
    const link = document.querySelector('.link');
    if (isOn) {
        chandeModeBtn.classList.remove('change-mode-btn_dark');
        body.classList.remove('body-dark-mode');
        main.classList.remove('main-dark-mode');
        link.classList.remove('link-dark-mode');
        buttons.forEach(btn => {
            btn.classList.remove('btn-dark-mode');
        });
        pages.forEach(page => {
            page.classList.remove('page-dark-mode');
        });
    }
    else {
        chandeModeBtn.classList.add('change-mode-btn_dark');
        body.classList.add('body-dark-mode');
        main.classList.add('main-dark-mode');
        link.classList.add('link-dark-mode');
        buttons.forEach(btn => {
            btn.classList.add('btn-dark-mode');
        });
        pages.forEach(page => {
            page.classList.add('page-dark-mode');
        });
    }

    isOn = !isOn;
}
