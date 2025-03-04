document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 600,   // Keep animations smooth
        offset: 10,      // Avoid animations triggering too early
        debounceDelay: 50, // Optimize resize handling
        throttleDelay: 0,  // Optimize scroll handling
        mirror: true, 
        once: false,     // Allow animations to trigger multiple times
    });

    window.addEventListener('load', () => {
        AOS.refresh();
    });
});