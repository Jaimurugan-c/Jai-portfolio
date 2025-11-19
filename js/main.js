// ==================== SCROLL PROGRESS BAR ====================
const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }
};

window.addEventListener('scroll', updateScrollProgress);
// Initialize on page load
document.addEventListener('DOMContentLoaded', updateScrollProgress);

// ==================== DICE ROLL FEATURE ====================
const initDiceRoll = () => {
  const positiveMessages = [
    "Smile big, worries small.",
    "Today is your best day yet.",
    "You are enough, just as you are.",
    "Choose happy, it looks good on you.",
    "Good vibes only, always.",
    "Sunshine lives inside your heart.",
    "Be the reason someone smiles today.",
    "Happy thoughts make happy days.",
    "You glow when you're kind.",
    "Life loves you – love it back!",
    "BELIEVE IN YOURSELF – YOU ARE MAGIC!",
    "YOUR SMILE CAN LIGHT UP THE WHOLE WORLD!",
    "EVERY DAY IS A NEW CHANCE TO BE HAPPY!",
    "YOU ARE STRONGER THAN YOU KNOW!",
    "SPREAD LOVE EVERYWHERE YOU GO!",
    "GOOD THINGS ARE COMING – KEEP SHINING!",
    "BE SO HAPPY THAT OTHERS FEEL HAPPY TOO!",
    "YOU ARE BEAUTIFUL INSIDE AND OUT!",
    "CHOOSE JOY – IT'S ALWAYS IN YOUR HEART!",
    "THE BEST IS YET TO COME – YOU DESERVE IT ALL! 💖"
  ];
  
  const dice = document.getElementById('dice');
  const rollBtn = document.getElementById('rollBtn');
  const messageBox = document.getElementById('messageBox');
  const messageText = messageBox.querySelector('.message-text');
  
  if (!rollBtn || !dice || !messageBox) return;
  
  const rollDice = () => {
    // Add rolling animation
    dice.classList.add('rolling');
    
    // Generate random number (1-20 for 20 messages)
    const randomIndex = Math.floor(Math.random() * positiveMessages.length);
    const randomNumber = randomIndex + 1;
    
    // Remove rolling animation after it completes
    setTimeout(() => {
      dice.classList.remove('rolling');
      
      // Update dice face
      const diceface = dice.querySelector('.dice-face');
      diceface.textContent = randomNumber;
      
      // Update message
      messageText.textContent = positiveMessages[randomIndex];
    }, 800);
  };
  
  // Click on dice or button to roll
  rollBtn.addEventListener('click', rollDice);
  dice.addEventListener('click', rollDice);
};

// ==================== TYPING ANIMATION ====================
const initTypingAnimation = () => {
  const titles = [
    'MERN Stack Developer',
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Creative Coder',
    'UI/UX Enthusiast'
  ];
  
  let titleIndex = 0;
  let charIndex = 0;
  const typingElement = document.querySelector('.typing-text');
  
  if (!typingElement) return;
  
  const typeTitle = () => {
    const currentTitle = titles[titleIndex];
    
    if (charIndex < currentTitle.length) {
      typingElement.textContent += currentTitle[charIndex];
      charIndex++;
      setTimeout(typeTitle, 50);
    } else {
      setTimeout(() => {
        typingElement.textContent = '';
        charIndex = 0;
        titleIndex = (titleIndex + 1) % titles.length;
        typeTitle();
      }, 2000);
    }
  };
  
  typeTitle();
};

// ==================== THEME TOGGLE ==================== 
const initThemeToggle = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlElement = document.documentElement;
  const body = document.body;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  
  // Apply saved theme on page load
  if (currentTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '☀️';
  } else {
    body.classList.remove('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '🌙';
  }
  
  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.innerHTML = '☀️';
      } else {
        localStorage.setItem('theme', 'light-mode');
        themeToggle.innerHTML = '🌙';
      }
    });
  }
};

// ==================== MOBILE NAVIGATION TOGGLE ====================
const initMobileNav = () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }
  
  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburger && hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  });
};

// ==================== SCROLL ANIMATION ====================
const initScrollAnimations = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };
  
  // Initialize scroll animation elements
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
  
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);
};

// ==================== VISITOR COUNTER ====================
const initVisitorCounter = () => {
  let visitCount = localStorage.getItem('visitCount');
  
  if (!visitCount) {
    visitCount = 1;
  } else {
    visitCount = parseInt(visitCount) + 1;
  }
  
  localStorage.setItem('visitCount', visitCount);
  
  // Update all visitor counters on the page
  const counters = document.querySelectorAll('.visitor-count');
  counters.forEach(counter => {
    counter.textContent = visitCount;
  });
};

// ==================== CATCH THE DOT GAME ====================
const initDotGame = () => {
  const dotGames = document.querySelectorAll('.dot-game');
  
  dotGames.forEach(gameContainer => {
    let score = 0;
    const scoreDisplay = gameContainer.nextElementSibling;
    
    const createDot = () => {
      // Remove existing dot
      const existingDot = gameContainer.querySelector('.dot');
      if (existingDot) existingDot.remove();
      
      // Create new dot
      const dot = document.createElement('div');
      dot.className = 'dot';
      
      // Random position
      const randomX = Math.random() * (gameContainer.offsetWidth - 30);
      const randomY = Math.random() * (gameContainer.offsetHeight - 30);
      
      dot.style.left = randomX + 'px';
      dot.style.top = randomY + 'px';
      
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        score++;
        if (scoreDisplay) {
          scoreDisplay.textContent = `Score: ${score}`;
        }
        createDot();
      });
      
      gameContainer.appendChild(dot);
    };
    
    // Initialize game
    createDot();
    
    // Reset button
    const resetBtn = gameContainer.parentElement.querySelector('.reset-game-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        score = 0;
        if (scoreDisplay) scoreDisplay.textContent = 'Score: 0';
        createDot();
      });
    }
  });
};

// ==================== TYPING SPEED WIDGET ====================
const initTypingWidget = () => {
  const typingInputs = document.querySelectorAll('.typing-input');
  
  typingInputs.forEach(input => {
    let startTime = null;
    let wordCount = 0;
    
    input.addEventListener('focus', () => {
      startTime = Date.now();
      input.value = '';
      wordCount = 0;
      updateStats();
    });
    
    input.addEventListener('input', () => {
      updateStats();
    });
    
    const updateStats = () => {
      const text = input.value;
      const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
      const chars = text.length;
      
      let wpm = 0;
      let cpm = 0;
      
      if (startTime) {
        const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
        if (timeElapsed > 0) {
          wpm = Math.round(words / timeElapsed);
          cpm = Math.round(chars / timeElapsed);
        }
      }
      
      // Update display
      const statsContainer = input.parentElement.querySelector('.typing-stats');
      if (statsContainer) {
        const wpmDisplay = statsContainer.querySelector('[data-stat="wpm"]');
        const cpmDisplay = statsContainer.querySelector('[data-stat="cpm"]');
        const charDisplay = statsContainer.querySelector('[data-stat="chars"]');
        
        if (wpmDisplay) wpmDisplay.textContent = wpm;
        if (cpmDisplay) cpmDisplay.textContent = cpm;
        if (charDisplay) charDisplay.textContent = chars;
      }
    };
  });
};

// ==================== SURPRISE BUTTON (CONFETTI) ====================
const initSurpriseButton = () => {
  const surpriseButtons = document.querySelectorAll('.surprise-btn');
  
  surpriseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      createConfetti();
      showSurpriseMessage();
    });
  });
};

const createConfetti = () => {
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random colors
    const colors = ['#6366f1', '#ec4899', '#f472b6', '#818cf8', '#10b981'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.background = randomColor;
    
    // Random position
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    
    // Random animation duration
    const duration = 2 + Math.random() * 1;
    confetti.style.animationDuration = duration + 's';
    
    // Random rotation
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => confetti.remove(), duration * 1000);
  }
};

const showSurpriseMessage = () => {
  const messages = [
    '🎉 You found the surprise!',
    '✨ Amazing!',
    '🚀 Keep exploring!',
    '💫 You\'re awesome!',
    '🌟 Great job!',
    '🎊 Fantastic!',
    '💥 Boom!',
    '🎈 Celebrate!'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  const messageEl = document.createElement('div');
  messageEl.textContent = randomMessage;
  messageEl.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #6366f1, #ec4899);
    color: white;
    padding: 2rem 3rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 10000;
    animation: slideUp 0.5s ease-out;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  `;
  
  document.body.appendChild(messageEl);
  
  setTimeout(() => {
    messageEl.style.animation = 'fadeOut 0.5s ease-out forwards';
    setTimeout(() => messageEl.remove(), 500);
  }, 2000);
};

// ==================== ACTIVE NAV LINK ====================
const updateActiveNavLink = () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

// ==================== PROJECT FILTER ====================
const initProjectFilter = () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"));
        
        // Add active class to clicked button
        btn.classList.add("active");
        
        const filter = btn.getAttribute("data-filter");
        
        projectCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
            }, 100);
          } else {
            card.style.opacity = "0";
            card.style.transform = "scale(0.8)";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }
};

// ==================== SKILL BAR ANIMATION ====================
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress");
  
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
};

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initScrollAnimations();
  initVisitorCounter();
  initDiceRoll();
  initProjectFilter();
  animateSkillBars();
  initTypingAnimation();
  updateActiveNavLink();
});

// Re-run scroll animations on scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100 && element.style.opacity !== '1') {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
});
