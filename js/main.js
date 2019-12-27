let headerSection = document.querySelector(".header");
let aboutSection = document.querySelector(".about");

let allNavs = document.querySelectorAll(".navbar-nav li a");
let allSection = document.querySelectorAll("section");

/* ==== Init ==== */
if (window.scrollY > 100) {
    headerSection.classList.add("header-scrolled");
} else {
    headerSection.classList.remove("header-scrolled");
}

/* ======= Header ===== */

allNavs.forEach(link => {
    link.addEventListener("click", e => {
        event.preventDefault();
        let activeSection = document.querySelector(e.target.hash);
        window.scrollTo({top: activeSection.offsetTop - getAbsoluteHeight(headerSection), behavior: 'smooth'});
    })
})

document.onscroll = () => {

    let scrollPosition = window.scrollY;
    let headerH = getAbsoluteHeight(headerSection);

    
    if (scrollPosition > 100) {
        headerSection.classList.add("header-scrolled");
    } else {
        headerSection.classList.remove("header-scrolled");
    }

    allSection.forEach(value => {
        
        let sectionOffsetTop = value.offsetTop;

        if ((scrollPosition + headerH) >= sectionOffsetTop && ((sectionOffsetTop + getAbsoluteHeight(value)) > scrollPosition)) {
            
            let activeSection = value.getAttribute("id");

            let activeLink = document.querySelector(".navbar-nav li a.active-section-link");
            activeLink.classList.remove("active-section-link");

            let currentLink = document.getElementById(`${activeSection}-link`);
            currentLink.classList.add("active-section-link");
        }
    });
}


const getAbsoluteHeight = (domElement) => {
  
    var styles = window.getComputedStyle(domElement);
    var margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);
  
    return Math.ceil(domElement.offsetHeight + margin);
  }