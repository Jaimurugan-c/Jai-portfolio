// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll(".nav-links li a")
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    }
  })
})

// Scroll Animation
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize scroll animation elements
const initAnimateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  animateOnScroll()
}

// Project Filtering
const initProjectFilter = () => {
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        btn.classList.add("active")

        const filter = btn.getAttribute("data-filter")

        projectCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "scale(1)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "scale(0.8)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }
}

// Skill Bar Animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0"

    setTimeout(() => {
      bar.style.width = width
    }, 500)
  })
}

// Initialize on page load
window.addEventListener("load", () => {
  initAnimateOnScroll()
  initProjectFilter()
  animateSkillBars()
})

// Update on scroll
window.addEventListener("scroll", animateOnScroll)
