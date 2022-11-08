const toggleBtn = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
   sideBar.classList.toggle('show-sidebar');
});

closebtn.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
})