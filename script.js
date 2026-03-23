/* === FORCE MOBILE MENU BAR TO APPEAR & FUNCTION === */
/* Add these styles at the end of your CSS to override any conflicts */

/* 1. Make sure the hamburger button is visible on mobile */
@media (max-width: 768px) {
  .hamburger {
    display: flex !important;          /* force display */
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1002;
    position: relative;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #2c3e50;
    border-radius: 3px;
    transition: all 0.25s ease;
  }

  /* 2. Hide the navigation menu off-canvas by default */
  .nav-menu {
    position: fixed !important;
    top: 0;
    right: -100% !important;          /* hidden off-screen */
    width: 280px;
    height: 100vh;
    background: #ffffff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    box-shadow: -5px 0 20px rgba(0,0,0,0.2);
    transition: right 0.3s ease-in-out;
    z-index: 1001;
    margin: 0;
    overflow-y: auto;
  }

  /* 3. When .show class is added, slide the menu in */
  .nav-menu.show {
    right: 0 !important;
  }

  /* 4. Style the menu items for mobile */
  .nav-menu li {
    width: 100%;
    margin: 0.5rem 0;
    border-bottom: 1px solid #eee;
    list-style: none;
  }

  .nav-menu a {
    display: block;
    padding: 0.8rem 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #2c3e50;
    text-decoration: none;
  }

  .nav-menu a.active,
  .nav-menu a:hover {
    color: #e63946;
  }

  /* 5. Prevent body scroll when menu is open (optional but recommended) */
  body.menu-open {
    overflow: hidden;
  }
}

/* 6. Ensure the nav-container stays fixed and properly layered */
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* 7. Laptop/desktop override: restore normal menu display */
@media (min-width: 769px) {
  .hamburger {
    display: none !important;
  }

  .nav-menu {
    position: static !important;
    right: auto !important;
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
    right: auto !important;
  }

  .nav-menu li {
    border-bottom: none;
    width: auto;
    margin: 0;
  }

  .nav-menu a {
    padding: 0.5rem 1rem;
  }
}
