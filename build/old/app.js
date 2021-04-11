  //toggle the menu
  document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-dropdown").classList.toggle("hidden");

 document.getElementById('header').classList="bg-browngray opacity-60";
  }
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.getElementById("nav-dropdown").classList.add('hidden');
      document.getElementById('header').classList="bg-browngray";
     
    } 
  })
  //var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == document.getElementById("bodypage")) {
      document.getElementById("nav-dropdown").classList.add('hidden');
      document.getElementById('header').classList="bg-browngray";
    }
  }

  