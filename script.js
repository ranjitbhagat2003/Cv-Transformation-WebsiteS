/* ===== FIXED & ENHANCED NAVIGATION MENU STYLES ===== */
/* This CSS resolves all menu bar bugs (mobile/laptop) and improves UI */

/* === GLOBAL RESET & BASE (Optional but recommended) === */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

/* === HEADER / NAV CONTAINER === */
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(0px);
  transition: all 0.3s ease;
}

/* Logo / Brand */
.nav-container .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e63946;
  text-decoration: none;
  z-index: 1002;
  letter-spacing: -0.5px;
}

/* === HAMBURGER ICON (mobile only) === */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1002;
  background: transparent;
  border: none;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #2c3e50;
  border-radius: 3px;
  transition: all 0.25s ease-in-out;
}

/* Optional: Animated hamburger when menu is open (enhancement) */
.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* === DESKTOP MENU (default) === */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  list-style: none;
}

.nav-menu a {
  text-decoration: none;
  font-weight: 500;
  color: #2c3e50;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  font-size: 1rem;
}

/* Active link styling (works with JS scroll highlight) */
.nav-menu a.active,
.nav-menu a:hover {
  color: #e63946;
}

/* Underline effect for desktop */
.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #e63946;
  transition: width 0.3s ease;
}

.nav-menu a.active::after,
.nav-menu a:hover::after {
  width: 100%;
}

/* === MOBILE RESPONSIVE STYLES (fix all menu bugs) === */
@media screen and (max-width: 768px) {
  .nav-container {
    padding: 1rem 1.5rem;
  }

  /* Show hamburger on mobile */
  .hamburger {
    display: flex;
  }

  /* Mobile menu - slide from right (fixes overlapping, push issues) */
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: #ffffff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
    padding: 5rem 2rem 2rem 2rem;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
    transition: right 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    z-index: 1001;
    overflow-y: auto;
    margin: 0;
  }

  /* When menu is open (JS toggles .show) */
  .nav-menu.show {
    right: 0;
  }

  /* Menu items styling for mobile */
  .nav-menu li {
    width: 100%;
    margin: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .nav-menu a {
    display: block;
    padding: 0.8rem 0;
    font-size: 1.1rem;
    font-weight: 500;
    width: 100%;
    color: #2c3e50;
  }

  .nav-menu a::after {
    display: none; /* Remove underline effect on mobile for cleaner look */
  }

  .nav-menu a.active,
  .nav-menu a:hover {
    color: #e63946;
    background: transparent;
    padding-left: 0.5rem;
    transition: padding-left 0.2s;
  }

  /* Optional: Prevent body scroll when menu is open (purely CSS improvement) */
  body.menu-open {
    overflow: hidden;
  }
}

/* === TABLET / SMALL LAPTOP ADJUSTMENTS === */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .nav-menu {
    gap: 1.5rem;
  }
  
  .nav-container {
    padding: 1rem 2rem;
  }
}

/* === EXTRA FIXES FOR LAPTOP === */
@media screen and (min-width: 769px) {
  /* Ensure menu is always visible and correctly positioned on desktop */
  .nav-menu {
    position: static;
    right: auto;
    width: auto;
    height: auto;
    background: transparent;
    flex-direction: row;
    padding: 0;
    box-shadow: none;
    transition: none;
    overflow: visible;
  }
  
  .nav-menu.show {
    right: auto; /* Override any leftover show class styles */
  }
  
  .nav-menu li {
    border-bottom: none;
    width: auto;
  }
  
  .nav-menu a {
    padding: 0.5rem 0;
  }
}

/* === FIX FOR ACTIVE LINK HIGHLIGHT ON SCROLL (VISUAL ENHANCEMENT) === */
.nav-menu a.active {
  color: #e63946;
  font-weight: 600;
}

/* Desktop active underline */
@media screen and (min-width: 769px) {
  .nav-menu a.active::after {
    width: 100%;
  }
}

/* === IMPROVED TOUCH TARGET & ACCESSIBILITY === */
.hamburger:focus-visible,
.nav-menu a:focus-visible {
  outline: 2px solid #e63946;
  outline-offset: 2px;
  border-radius: 2px;
}

/* === PREVENT CONTENT SHIFT WHEN MENU OPENS (FIX BUG) === */
.nav-menu.show {
  display: flex; /* Ensures proper display when toggled */
}

/* Fix for any weird overlapping with fixed header content */
main,
section {
  scroll-margin-top: 80px; /* Account for fixed header height */
}

/* Additional UI polish: smooth background overlay when menu open (optional, but improves UX) */
/* Note: This overlay can be optionally added via JS, but CSS-only overlay requires extra markup.
   For a pure CSS fix, we keep the menu clean and bug-free. */
