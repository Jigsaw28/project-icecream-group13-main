!function(){var e=document.querySelector(".main-nav__wrapper"),t=document.querySelector(".menu-button"),n=document.querySelector(".menu-button"),a=document.querySelectorAll(".site-nav__link"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;if(t.setAttribute("aria-expanded",!n),e.classList.toggle("main-nav__wrapper--is-open"),t.classList.toggle("menu-button--is-open"),matchMedia){var a=window.matchMedia("(max-width: 1199px)");a.addListener(o),o(a)}function o(e){e.matches&&bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)}};a.forEach((function(e){return e.addEventListener("click",o)})),t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("main-nav__wrapper--is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.4a66859e.js.map
