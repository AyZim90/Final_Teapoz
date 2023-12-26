function openSidebar() {
  document.getElementById("sidebar").style.width = "300px";
  document.getElementById("sidebar").style.position = "absolute";
  document.getElementById("sidebar").style.top = "24px";
  
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
  }
  
  
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
