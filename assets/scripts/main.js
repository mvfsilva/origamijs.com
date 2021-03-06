(function() {
  var btnOpen = document.getElementById("navOpen");
  var menu = document.getElementById("navigation");

  function toggleMenu() {
    if(menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  btnOpen.addEventListener("click",toggleMenu);

  var mediaQuery = window.matchMedia("(min-width: 840px)");

  if (mediaQuery.matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  mediaQuery.addListener(function(changed) {
    if(changed.matches) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
})();
