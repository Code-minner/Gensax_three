function ShadowScroller() {
  // Navbar shadowHeader Scroller Section //
  const shadowHeader = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 200;
    
    shadowHeader.classList.toggle("shadow", isScrolled);
  });
}