/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('switch')
const darkTheme = 'dark-theme'
const iconTheme = '.sun'

//previously selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtaining the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? '.moon' : '.sun'

//validate the previously chosen
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === '.moon' ? 'add' : 'remove'](iconTheme)
}

//activate and deactivate theme using button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    //when clicked, show-menu will be removed as class
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    //add a class if bottom offset is greater than 50viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when scroll is higher than 350vh, add show-scroll class
    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== PROGRESS BAR ===============*/
window.addEventListener("scroll", () => {
    const bar = document.querySelector(".timeline__progress__bar");
    const footer = document.querySelector("footer");

    const barRect = bar.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    // Check if bottom of the bar is about to overlap footer
    if (barRect.bottom >= footerRect.top) {
        bar.classList.add("stopped");

        // Position bar just above footer
        const offset = window.scrollY + footerRect.top - bar.offsetHeight;
        bar.style.top = offset + "px";
        bar.style.position = "absolute";
        
    } else {
        bar.classList.remove("stopped");
        bar.style.top = "";
        bar.style.position = "fixed";
    }
});