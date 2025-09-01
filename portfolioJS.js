const buttons = document.querySelectorAll("button")

// Change teh backgorund of the buttons once it has been clicked once
buttons.forEach((button) => (button.addEventListener("click", () => {button.style.backgroundColor = "navy"})))

// window.onscroll = () => console.log("you're scrolling!!")

window.addEventListener("scroll", () => console.log("you're scrolling!!"))


// THIS IS THE PART FOR ALL TEH FANCY SCROLLING ANIMATIONS

//This creates an observer object for all the page elements

const animationPages = document.querySelectorAll(".page, .page > *")

const observer = new IntersectionObserver((entries, observer) => {entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("animateOnScroll")
    }
})
}, {
    threshold: 0.15
})

// This assigns the pages to the elements
animationPages.forEach(page => observer.observe(page));



const footer = document.getElementById('myFooter');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});